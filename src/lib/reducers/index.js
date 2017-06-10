import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import search from './searchReducer'

const appReducer = combineReducers({
  routing: routerReducer,
  search,
})

export default (state, action) => {
  // if (action.type === 'LOGOUT_USER' ||
  //     action.type === 'DELETE_ACCOUNT') {
  //   state = undefined
  // }
  return appReducer(state, action)
}
