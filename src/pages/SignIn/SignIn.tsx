import { FC } from 'react'
import {
  Avatar,
  Button,
  CssBaseline,
  Typography,
  Container,
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { signInStyles } from './SignIn.styles'
import { SignInProps } from './SignIn.interface'

const SignIn: FC<SignInProps> = ({ firebase, auth }) => {
  const classes = signInStyles()

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
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
          onClick={signInWithGoogle}
        >
          Sign In With Google
        </Button>
      </div>
    </Container>
  )
}
export default SignIn
