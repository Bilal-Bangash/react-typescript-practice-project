import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const appBarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    userImg: {
      border: '1px solid black',
      borderRadius: '50%',
      width: '50px',
    },
  }),
)
