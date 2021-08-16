import { Route, Switch, Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
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
        <Route exact path={HOME_ROUTE} component={Home} />
        <Route exact path={SCORECARD_ROUTE} component={Scorecard} />
        {/* Need to add protected Routes */}
        {refreshToken ? (
          <Route exact path={TYPING_TEST_ROUTE} component={TypingTest} />
        ) : (
          <Redirect from="/" to={SIGN_IN_ROUTE} />
        )}
        {refreshToken ? (
          <Route exact path="/" component={Home} />
        ) : (
          <Redirect from="/" to={SIGN_IN_ROUTE} />
        )}
      </Switch>
    </div>
  )
}

export default App
