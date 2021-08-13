import { Route, Switch, Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCurrentUserAuthenticationStatus } from './firebase/authService'
import { Home, SignIn, TypingTest } from './pages'
import { AppBar } from './components'
import { HOME_ROUTE, SIGN_IN_ROUTE, TYPING_TEST_ROUTE } from './constants'
import { userLogout } from './redux'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const history = useHistory()
  const { pathname } = history.location

  const handleSignOut = () => {
    dispatch(userLogout())
    history.push(SIGN_IN_ROUTE)
  }
  return (
    <div className="App">
      {pathname !== SIGN_IN_ROUTE && <AppBar handleClick={handleSignOut} />}
      <Switch>
        <Route exact path={SIGN_IN_ROUTE} component={() => <SignIn />} />
        <Route exact path={HOME_ROUTE} component={Home} />
        <Route exact path={TYPING_TEST_ROUTE} component={TypingTest} />
        {/* Need to add protected Route */}
        {getCurrentUserAuthenticationStatus() ? (
          <Route exact path="/" component={Home} />
        ) : (
          <Redirect from="/" to={SIGN_IN_ROUTE} />
        )}
      </Switch>
    </div>
  )
}

export default App
