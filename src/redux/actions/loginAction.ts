import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from '../types'
export const userLogin = () => async (dispatch: any) => {
  // work in-progress
  try {
    dispatch({ type: USER_LOGIN_REQUEST })

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: 'data',
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
