import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { Home, SignIn } from './pages'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/home" component={Home} />
          <Redirect from="/" to="/sign-in" />
        </Switch>
      </Router>
    </div>
  )
}

export default App
