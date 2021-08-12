import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from '../types'
import { auth, signInWithGoogle } from '../../firebase/authService'
import { IS_USER_AUTHENTICATED } from '../../constants'
export const userLogin = () => async (dispatch: any) => {
  // work in-progress
  try {
    dispatch({ type: USER_LOGIN_REQUEST })
    const { user } = await auth.signInWithPopup(signInWithGoogle())
    user && localStorage.setItem(IS_USER_AUTHENTICATED, 'true')
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: user,
    })
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const userLogout = () => async (dispatch: any) => {
  localStorage.removeItem(IS_USER_AUTHENTICATED)
  dispatch({ type: USER_LOGOUT })
  auth.signOut()
}
