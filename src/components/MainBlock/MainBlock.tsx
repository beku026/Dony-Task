import { observer } from 'mobx-react-lite'
import UserBlock from '../UserBlock/UserBlock'
import { office } from '../../store/office'
import { IAllTypes } from '../../types/Office'
import Timer from '../Timer/Timer'

const MainBlock = observer(() => {
  const newArrObj = office.newArrObj
  return (
    <div className="App">
      <Timer />
      <div className="app">
        {newArrObj.map((item: IAllTypes) => (
          <UserBlock key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
})

export default MainBlock;