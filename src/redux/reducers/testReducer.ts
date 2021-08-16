import {
  START_TEST_REQUEST,
  START_TEST_SUCCESS,
  START_TEST_FAIL,
} from '../types'

export const testReducer = (state = {}, action: any) => {
  switch (action.type) {
    case START_TEST_REQUEST:
      return {
        loading: true,
      }
    case START_TEST_SUCCESS:
      return {
        loading: false,
        testInfo: action.payload,
      }
    case START_TEST_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
