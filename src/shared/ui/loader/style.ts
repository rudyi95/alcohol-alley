import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
  wrapper: {
    position: 'relative',
    height: '50px',
    width: '100%'
  },
  circular: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}))
