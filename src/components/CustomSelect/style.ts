import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minWidth: 120,
    width: 350,
    display: 'flex',
    padding: 0,
    rowGap: 8,
    paddingTop: 5,
    flexDirection: 'column',

    '& .MuiInputLabel-root': {
      lineHeight: 'initial',
      transformOrigin: 'top',
      left: 10
    },

    '& fieldset': {
      borderRadius: 8,
      // borderColor: theme.palette.neutral[400]
    }
  },
  select: {}
}))
