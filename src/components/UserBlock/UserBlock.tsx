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

  const classNames = () => {
    switch (item.type) {
      case 'pillar':
        return classes.block
      case 'table':
        return classes.table
      case 'desk':
        return classes.desk
    }
  }

  return (
    <div className={classNames()}>
      <div className="img">
        {item.user.map((img) => (
          <img src={img.avatar} alt={img.name} />
        ))}
      </div>
    </div>
  )
}

export default UserBlock
