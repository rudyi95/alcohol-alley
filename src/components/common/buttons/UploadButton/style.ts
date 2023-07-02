import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
  root: {
    height: 48,
    padding: '12px 24px',
    borderRadius: 24,
    borderWidth: 2,
    fontSize: 16,
    fontWeight: 600,
    textTransform: 'inherit',
    whiteSpace: 'nowrap',

    '&:hover': {
      borderWidth: 2
    }
  }
}))
