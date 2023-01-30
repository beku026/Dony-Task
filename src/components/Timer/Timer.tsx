import { observer } from 'mobx-react-lite'
import { office } from '../../store/office'
import s from './Timer.module.css'

const Timer = observer(() => {
  const second = office.second
  const starting = office.hourse
  const minut = office.minut
  return (
    <div className={s.timer}>
      {starting}:{minut}:{second}
    </div>
  )
})

export default Timer
