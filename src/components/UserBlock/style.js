import { createUseStyles } from 'react-jss'

const allStyle = {
  border: '1px solid black',
  position: 'absolute',
  left: (theme) => theme.left,
  top: (theme) => theme.top,
  rotate: (theme) => theme.angle + 'deg',
}

export const styleSheet = createUseStyles({
  block: {
    ...allStyle,
    width: 25,
    height: 25,
    borderRadius: '50%',
    backgroundColor: 'grey',
  },
  table: {
    ...allStyle,
    width: 100,
    height: 50,
    borderRadius: 25,
  },
  desk: {
    ...allStyle,
    width: 60,
    height: 30,
  },
  img: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
