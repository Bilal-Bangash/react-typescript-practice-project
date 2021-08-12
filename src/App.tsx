import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { getCurrentUserAuthenticationStatus } from './firebase/authService'
import { Home, SignIn } from './pages'
import { SIGN_IN_ROUTE } from './constants'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={SIGN_IN_ROUTE} component={() => <SignIn />} />
          {/* Need to add protected Route */}
          {getCurrentUserAuthenticationStatus() ? (
            <Route exact path="/" component={Home} />
          ) : (
            <Redirect from="/" to={SIGN_IN_ROUTE} />
          )}
        </Switch>
      </Router>
    </div>
  )
}

export default App
