import axios from 'axios'
import { makeAutoObservable, onBecomeObserved, onBecomeUnobserved } from 'mobx'
import { IObjects, IOffice } from '../types/Office'

class Office implements Office {
  links: string[] = [
    `https://goodsok.ru/mock-api/users.php`,
    `https://goodsok.ru/mock-api/objects.php`,
  ]
  newArrObj = []
  hourse: number = 0
  minut: number = 0
  second: number = 0
  secondInterval: any = null

  constructor() {
    makeAutoObservable(this)
    onBecomeObserved(this, 'newArrObj', () => {
      this.getData()
    })
    onBecomeObserved(this, 'second', () => {
      this.startTimer('12-40-55', '12-41-00')
    })
    onBecomeUnobserved(this, 'second', () => {
      this.stopTimer()
    })
  }

  startTimer = (start: string, end: string) => {
    const starting = start.split('-')
    const endTime = end.split('-')
    this.hourse = Number(starting[0])
    this.minut = Number(starting[1])
    this.second = Number(starting[2])

    this.secondInterval = setInterval(() => {
      this.second += 1
      if (this.second > 59) {
        this.second = 0
        this.minut += 1
        if (this.minut > 59) {
          this.minut = 0
          this.hourse += 1
          if (this.hourse > 11) {
            this.hourse = 0
          }
        }
      }
      if (
        this.hourse === Number(endTime[0]) &&
        this.minut === Number(endTime[1]) &&
        this.second === Number(endTime[2])
      ) {
        clearInterval(this.secondInterval)
      }
    }, 1000)
  }

  stopTimer = () => {
    clearInterval(this.secondInterval)
  }

  getData = async () => {
    try {
      const data = this.links.map(async (Item) => {
        return new Promise(async (resolve) => {
          const res = await axios.get(Item)
          resolve(res.data)
        })
      })
      Promise.all(data).then(
        (res) =>
          (this.newArrObj = res[1].map((obj: IObjects) => {
            const user = res[0].filter(
              (item: IOffice) => item.object_id === obj.id
            )
            if (user.length > 0) {
              return { ...obj, user: user }
            }
            return obj
          }))
      )
    } catch (e) {
      console.error(e)
    }
  }
}

export const office = new Office()
