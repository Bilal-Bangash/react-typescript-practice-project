import { makeStyles } from '@material-ui/core/styles'
export const typingStyles = makeStyles(({ palette }) => ({
  paper: {
    margin: '50px',
    height: '80vh',
    padding: '10px',
    paddingTop: '20px',
  },
  typography: {
    // background: palette.secondary.light,
    // margin: '50px 0px 100px 0px',
    // paddingTop: '50px',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
  },
  textAreaAutoSize: {
    width: '-webkit-fill-available',
    padding: '10px',
    fontSize: '20px',
    height: '16px',
  },
  testParagraph: {
    border: '1px solid lightgrey',
    borderRadius: '6px',
    margin: '6px',
    textAlign: 'left',
  },
}))
