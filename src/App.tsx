import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import firebase from 'firebase/app'
import { useAuthState } from 'react-firebase-hooks/auth'
import 'firebase/auth'
import { Home, SignIn } from './pages'
import { firebaseConfig } from './configs'
import './App.css'

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
function App() {
  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/sign-in"
            component={() => <SignIn firebase={firebase} auth={auth} />}
          />
          {/* Need to add protected Route */}
          {user && <Route exact path="/home" component={Home} />}
          <Redirect from="/" to="/sign-in" />
        </Switch>
      </Router>
    </div>
  )
}

export default App
