import { makeStyles } from '@material-ui/core/styles'
export const homeStyles = makeStyles(({ palette }) => ({
  paper: {
    margin: '50px',
    height: '70vh',
    padding: '10px',
  },
  typography: {
    // background: palette.secondary.light,
    margin: '50px 0px 100px 0px',
    paddingTop: '50px',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
  },
}))
