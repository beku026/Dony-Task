import axios from 'axios'
import { makeAutoObservable } from 'mobx'
import { IObjects, IOffice } from '../types/Office'

class Office {
  users: IOffice[] = []
  objects: IObjects[] = []

  constructor() {
    makeAutoObservable(this)
  }

  getUsers = async () => {
    try {
      const { data } = await axios.get(`https://goodsok.ru/mock-api/users.php`)
      this.users = [ ...data ]
      // console.log(this.users)
    } catch (e) {
      console.log(e)
    }
  }

  getObj = async () => {
    try {
      const { data } = await axios.get(`https://goodsok.ru/mock-api/objects.php`)
      this.objects = [ ...data ]
      // console.log(this.objects)
    } catch (e) {
      console.log(e)
    }
  }
}

export const office = new Office()
