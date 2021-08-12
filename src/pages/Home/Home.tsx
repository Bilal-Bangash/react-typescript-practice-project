import React from 'react'
import { Button, Container, Paper } from '@material-ui/core'
import { Typography, Dropdown } from '../../components'
import { homeStyles } from './Home.styles'
import { levels } from './Home.constant'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const classes = homeStyles()

  const [level, setLevel] = React.useState<string>('')

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setLevel(value)
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
        </Paper>
      </Container>
    </React.Fragment>
  )
}

export default Home
