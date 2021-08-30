import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  userLoginReducer,
  testReducer,
  scorecardReducer,
  saveTestResultReducer,
} from './reducers'
// work in-progress
const reducer = combineReducers({
  userLogin: userLoginReducer,
  testData: testReducer,
  scorecard: scorecardReducer,
  saveTestResult: saveTestResultReducer,
})
const initialState = {}
const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export type AppState = ReturnType<typeof reducer>
export default store
