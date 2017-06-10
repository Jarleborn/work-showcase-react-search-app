import {
  SEARCH_SUCCES,
  SEARCH_FAIL,
  SEARCH_API,
} from '../actions/search-action'

const initialState = {
  searchValue: null,
  searchResults: null,
  isSearching: false,
  isDoneSearching: false,
  failure: false,
  showResult: false,
}

function search(state = initialState, action) {
  switch(action.type) {
    case SEARCH_SUCCES:
      return{
        ...state,
        isSearching: false,
        isDoneSearching: true,
        searchResults: action.payload,
        failure: false,
        showResult: true,
      }
    case SEARCH_FAIL:
      return{
        ...state,
        isSearching: false,
        failure: true,
        searchResults: action.payload.error,
      }

    case SEARCH_API:
      return{
        ...state,
        isSearching: true,
      }
    default:
      return state
  }
}
export default search
