import { useState, ChangeEventHandler, Fragment, FC } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Button, Container, Paper, Grid } from '@material-ui/core'

import { Typography, Dropdown } from '../../components'
import { startTest } from '../../redux'
import { homeStyles } from './Home.styles'
import { levels } from './Home.constant'

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const classes = homeStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const [level, setLevel] = useState<string>('')

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setLevel(value)
    dispatch(startTest(value))
  }

  const handleStartClick = () => {
    history.push('typing-test')
  }

  return (
    <Fragment>
      <Container fixed>
        <Paper elevation={3} className={classes.paper}>
          <Grid
            className={classes.grid}
            container
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12}>
              <Typography
                component="div"
                variant="h3"
                className={classes.typography}
              >
                Speed Typing Test
              </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <Dropdown
                label="Select Level"
                value={level}
                onChange={handleChange}
                options={levels}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={7}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleStartClick}
                fullWidth
              >
                Start
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Fragment>
  )
}

export default Home
