import {
  START_TEST_REQUEST,
  START_TEST_SUCCESS,
  START_TEST_FAIL,
} from '../types'
import { testParagraph } from '../../data'

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
