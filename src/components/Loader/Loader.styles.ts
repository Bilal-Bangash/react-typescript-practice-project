import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const loaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  })
)
