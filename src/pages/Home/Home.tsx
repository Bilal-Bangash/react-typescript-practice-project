import React from 'react'
import { Button, Container, Paper } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Typography, Dropdown } from '../../components'
import { SIGN_IN_ROUTE } from '../../constants'
import { userLogout } from '../../redux'
import { homeStyles } from './Home.styles'
import { levels } from './Home.constant'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const classes = homeStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  const [level, setLevel] = React.useState<string>('')

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setLevel(value)
  }

  const handleSignOut = () => {
    dispatch(userLogout())
    history.push(SIGN_IN_ROUTE)
  }
  return (
    <React.Fragment>
      <Container fixed>
        <Paper elevation={3} className={classes.paperStyle}>
          <Typography
            component="div"
            variant="h3"
            className={classes.typographyStyle}
          >
            Speed Typing Test
          </Typography>

          <Dropdown
            label="Select Level"
            value={level}
            onChange={handleChange}
            options={levels}
          />
          <Button variant="contained" color="primary">
            Start
          </Button>
          <br />
          <Button variant="contained" color="secondary" onClick={handleSignOut}>
            SignOut
          </Button>
        </Paper>
      </Container>
    </React.Fragment>
  )
}

export default Home
