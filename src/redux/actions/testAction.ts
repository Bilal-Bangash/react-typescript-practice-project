import {
  START_TEST_REQUEST,
  START_TEST_SUCCESS,
  START_TEST_FAIL,
  SAVE_TEST_RESULT_REQUEST,
  SAVE_TEST_RESULT_SUCCESS,
  SAVE_TEST_RESULT_FAIL,
} from '../types'
import { testParagraph } from '../../data'
import { fireStore } from '../../firebase/authService'

export const startTest = (selectedLevel: string) => async (dispatch: any) => {
  // work in-progress
  try {
    dispatch({ type: START_TEST_REQUEST })
    const testInfo = testParagraph.find(({ level }) => level === selectedLevel)
    dispatch({
      type: START_TEST_SUCCESS,
      payload: testInfo,
    })
  } catch (error) {
    dispatch({
      type: START_TEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const saveTestResult =
  (name: string, photoURL: string) => async (dispatch: any) => {
    // work in-progress
    try {
      dispatch({ type: SAVE_TEST_RESULT_REQUEST })
      await fireStore.collection('user-scorecard').add({
        name,
        photoURL,
        score: '82.5%',
      })
      dispatch({
        type: SAVE_TEST_RESULT_SUCCESS,
        payload: 'Successfully',
      })
    } catch (error) {
      dispatch({
        type: SAVE_TEST_RESULT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
