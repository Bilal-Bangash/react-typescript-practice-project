import {
  START_TEST_REQUEST,
  START_TEST_SUCCESS,
  START_TEST_FAIL,
  SAVE_TEST_RESULT_REQUEST,
  SAVE_TEST_RESULT_SUCCESS,
  SAVE_TEST_RESULT_FAIL,
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
export const saveTestResultReducer = (state = {}, action: any) => {
  switch (action.type) {
    case SAVE_TEST_RESULT_REQUEST:
      return {
        loading: true,
      }
    case SAVE_TEST_RESULT_SUCCESS:
      return {
        loading: false,
        saveTestResultInfo: action.payload,
      }
    case SAVE_TEST_RESULT_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
