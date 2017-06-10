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
}

function search(state = initialState, action) {
  console.log('state',state)
  console.log('is', initialState);
  console.log('action', action);
  switch(action.type) {
    case SEARCH_SUCCES:
      console.log('succ');
      console.log('HHHHHHHHHHHÖÖÖÖÖÖÖÖÖÖÖÖÖÖÖÖÖÖÖÖR BORDET DET STÅ SAKER -------------->',action);
      return{
        ...state,
        isSearching: false,
        isDoneSearching: true,
        searchResults: action.payload,
        failure: false,
        showResult: true,
      }
    case SEARCH_FAIL:
      console.log('fail');
      return{
        ...state,
        isSearching: false,
        failure: true,
        searchResults: action.payload.error,
      }

    case SEARCH_API:
      console.log('search');
      return{
        ...state,
        isSearching: true,
      }
    default:
      console.log('def')
      return state
  }
}
export default search
