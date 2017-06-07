export const SEARCH_SUCCES = 'SEARCH_SUCCES'
export const SEARCH_FAIL = 'SEARCH_FAIL'
export const SEARCH_API = 'SEARCH_API'

export const searchAPi = () => ({
  type: SEARCH_API,
})

export const searchSucces = ({res}) => ({
    type: SEARCH_SUCCES,
    payload: {
      res
    },
})

export const searchFail = ({err}) => ({
    type: SEARCH_FAIL,
    payload: {
      err
    },
})

export const searchAPI = (sValue) =>
  async function(dispatch) {
    dispatch(searchAPI())
    try {
      const result = await fetch()
    } catch (e) {

    } finally {

    }
  }
