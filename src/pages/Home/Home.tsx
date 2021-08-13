import { useState, ChangeEventHandler, Fragment, FC } from 'react'
import { Button, Container, Paper, Grid } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Typography, Dropdown, AppBar } from '../../components'
import { SIGN_IN_ROUTE } from '../../constants'
import { userLogout } from '../../redux'
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
  }

  const handleSignOut = () => {
    dispatch(userLogout())
    history.push(SIGN_IN_ROUTE)
  }
  return (
    <Fragment>
      <AppBar handleClick={handleSignOut} />
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
              <Button variant="contained" color="primary" fullWidth>
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
