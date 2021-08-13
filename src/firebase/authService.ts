import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { firebaseConfig } from '../configs'
import { IS_USER_AUTHENTICATED } from '../constants'

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const fireStore = firebase.firestore()

const getCurrentUserAuthenticationStatus = () => {
  return localStorage.getItem(IS_USER_AUTHENTICATED)
}

const signInWithGoogle = () => {
  return new firebase.auth.GoogleAuthProvider()
}

export { auth, fireStore, signInWithGoogle, getCurrentUserAuthenticationStatus }
