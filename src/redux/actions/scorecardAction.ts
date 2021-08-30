import { fireStore } from '../../firebase/authService'
import { SCORECARD_REQUEST, SCORECARD_SUCCESS, SCORECARD_FAIL } from '../types'

export const scorecard = () => async (dispatch: any) => {
  // work in-progress
  try {
    dispatch({ type: SCORECARD_REQUEST })
    const scorecardResponse = fireStore.collection('user-scorecard')
    const scorecardDocs = await scorecardResponse.get()
    const scorecardData = scorecardDocs.docs.map((item) => item.data())
    dispatch({
      type: SCORECARD_SUCCESS,
      payload: scorecardData,
    })
  } catch (error) {
    dispatch({
      type: SCORECARD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
