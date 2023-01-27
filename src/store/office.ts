import axios from 'axios'
import { makeAutoObservable, onBecomeObserved} from 'mobx'
import { IObjects, IOffice } from '../types/Office'

class Office {
  links = [
    `https://goodsok.ru/mock-api/users.php`,
    `https://goodsok.ru/mock-api/objects.php`
  ]
  newArrObj = []

  constructor() {
    makeAutoObservable(this)
    onBecomeObserved(this, 'newArrObj', () => {
      this.getData()
    })
  }

  getData = async () => {
    try {
      const data = this.links.map(async (Item ) => {
        return new Promise(async(resolve) => {
          const res = await axios.get(Item)
          resolve(res.data)
        })
      }) 
      Promise.all(data).then(res => (
        this.newArrObj = res[1].map((obj: IObjects) => {
          const user = res[0].filter((item: IOffice) => item.object_id === obj.id )
          if (user.length > 0) {
            return { ...obj, user: user }
          }
          return obj
        })
      ))
    } catch (e) {
      console.error(e)
    }
  }
}

export const office = new Office()