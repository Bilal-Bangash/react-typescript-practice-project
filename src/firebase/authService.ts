import firebase from 'firebase/app'
import 'firebase/auth'
import { firebaseConfig } from '../configs'

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

const getCurrentUserAuthenticationStatus = () => {
  return localStorage.getItem('isUserAuthenticated')
}

export { firebase, auth, getCurrentUserAuthenticationStatus }
