import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Avatar,
  Button,
  CssBaseline,
  Typography,
  Container,
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { getCurrentUserAuthenticationStatus } from '../../firebase/authService'
import { userLogin } from '../../redux'
import { signInStyles } from './SignIn.styles'
import { SignInProps } from './SignIn.interface'
const SignIn: FC<SignInProps> = () => {
  const classes = signInStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const userLoginDetail = useSelector((state) => state)

  useEffect(() => {
    userLoginDetail && getCurrentUserAuthenticationStatus() && history.push('/')
  }, [userLoginDetail, history])

  const handleSignInClick = () => {
    dispatch(userLogin())
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSignInClick}
        >
          Sign In With Google
        </Button>
      </div>
    </Container>
  )
}
export default SignIn
