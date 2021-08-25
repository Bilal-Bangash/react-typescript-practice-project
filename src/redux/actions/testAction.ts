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
import { RANDOM_PARAGRAPH_URL } from '../../constants'

export const startTest = (selectedLevel: string) => async (dispatch: any) => {
  // work in-progress
  try {
    dispatch({ type: START_TEST_REQUEST })
    const testInfo = testParagraph.find(({ level }) => level === selectedLevel)
    const resultParagraph = await fetch(
      RANDOM_PARAGRAPH_URL
    )
      .then((response: any) => response.json())
      .then(
        (data: any) =>
          // @ts-ignore
          (testInfo.paragraph = data?.content)
      )
    console.log('this is paragraph', resultParagraph)
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
  (
    name: string,
    photoURL: string,
    level: string,
    accuracy: number,
    netWPM: number
  ) =>
  async (dispatch: any) => {
    // work in-progress
    try {
      dispatch({ type: SAVE_TEST_RESULT_REQUEST })
      await fireStore.collection('user-scorecard').add({
        name,
        photoURL,
        level,
        accuracy,
        netWPM,
        score: accuracy,
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
