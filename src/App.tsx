import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { office } from './store/office'
import './App.css'
import UserBlock from './components/UserBlock/UserBlock'
import { IAllTypes, IObjects, IOffice } from './types/Office'

const App = observer(() => {
  const users = JSON.parse(JSON.stringify(office.users))
  const objects = JSON.parse(JSON.stringify(office.objects))
  const newArrObj: IAllTypes[] = objects.map((obj: IObjects) => {
    const user = users.filter((u: IOffice) => u.object_id === obj.id)
    if (user) {
      return { ...obj, user: user }
    }
    return obj
  })
  useEffect(() => {
    office.getUsers()
    office.getObj()
  }, [])
  return (
    <div className="App">
      <div className="app">
        {newArrObj.map((item: IAllTypes) => (
          <UserBlock key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
})

export default App
