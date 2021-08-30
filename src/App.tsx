import { Route, Switch, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Home, SignIn, TypingTest, Scorecard } from './pages'
import { AppBar } from './components'
import {
  HOME_ROUTE,
  SIGN_IN_ROUTE,
  TYPING_TEST_ROUTE,
  SCORECARD_ROUTE,
} from './constants'
import { userLogout } from './redux'
import { PrivateRoute } from './routes'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const userLogin = useSelector((state: any) => state.userLogin)
  const { refreshToken = '' } = (userLogin && userLogin?.userInfo) || ''
  const history = useHistory()
  const handleSignOut = () => {
    dispatch(userLogout())
    history.push(SIGN_IN_ROUTE)
  }
  return (
    <div className="App">
      {refreshToken && <AppBar handleClick={handleSignOut} />}
      <Switch>
        <Route exact path={SIGN_IN_ROUTE} component={() => <SignIn />} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path={HOME_ROUTE} component={Home} />
        <PrivateRoute exact path={SCORECARD_ROUTE} component={Scorecard} />
        <PrivateRoute exact path={TYPING_TEST_ROUTE} component={TypingTest} />
      </Switch>
    </div>
  )
}

export default App
