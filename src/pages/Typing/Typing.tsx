import { Fragment, FC } from 'react'
import { Container, Paper, Grid, TextField } from '@material-ui/core'
import { Timer, Typography } from '../../components'
import { typingStyles } from './Typing.styles'

interface TypingProps {}

const Typing: FC<TypingProps> = () => {
  const classes = typingStyles()
  return (
    <Fragment>
      <Container fixed>
        <Paper elevation={3} className={classes.paper}>
          <Grid className={classes.grid} container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography
                component="h6"
                variant="h5"
                className={classes.typography}
              >
                Paragraph to type
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                component="h5"
                variant="h4"
                className={classes.typography}
              >
                Timer
              </Typography>
              <Timer />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="notes"
                variant="outlined"
                rows={1}
                multiline
                disabled
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          a"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Start Typing..."
                name="notes"
                variant="outlined"
                rows={4}
                multiline
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Fragment>
  )
}
export default Typing
