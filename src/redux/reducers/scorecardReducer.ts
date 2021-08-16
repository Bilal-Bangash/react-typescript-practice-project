import { SCORECARD_REQUEST, SCORECARD_SUCCESS, SCORECARD_FAIL } from '../types'

export const scorecardReducer = (state = {}, action: any) => {
  switch (action.type) {
    case SCORECARD_REQUEST:
      return {
        loading: true,
      }
    case SCORECARD_SUCCESS:
      return {
        loading: false,
        scorecardData: action.payload,
      }
    case SCORECARD_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
