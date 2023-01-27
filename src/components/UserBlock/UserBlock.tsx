import { FC } from 'react'
import { IAllTypes } from '../../types/Office'
import { styleSheet } from './style'

interface IProps {
  item: IAllTypes
}

const UserBlock: FC<IProps> = ({ item }) => {
  const classes = styleSheet({
    top: item.top,
    left: item.left,
    angle: item.angle,
  })
  const classnames: any = {
    pillar: classes.block,
    table: classes.table,
    desk: classes.desk
  }

  return (
    <div className={classnames[item.type]}>
      <div className='img'>
        {
          item.user?.map(img => (
            <img src={img.avatar} alt={img.name} key={img.id} />
          )) 
        }
      </div>
    </div>
  )
}

export default UserBlock
