export const SEARCH_SUCCES = 'SEARCH_SUCCES'
export const SEARCH_FAIL = 'SEARCH_FAIL'
export const SEARCH_API = 'SEARCH_API'

export const searchAPi = () => ({
  type: SEARCH_API,
})

export const searchSucces = ({res}) => ({
  type: SEARCH_SUCCES,
  payload: {
    res,
  },
})

export const searchFail = ({err}) => ({
  type: SEARCH_FAIL,
  payload: {
    err,
  },
})

export const searchAPI = (sValue) =>
  async function(dispatch) {
    dispatch(searchAPI())
    try {
      const result = await fetch('link',{
        method: 'post',
        body: JSON.stringify({
          sValue,
        }),
        headers: {
          'Accept': 'application/json',
          'content-type': 'applicaiton/json',
        },
      })

      const json = await result.json()
      const { res } = json
      if (res.length > 0) {
        dispatch(searchSucces({res}))
      }else {
        dispatch(searchFail(res.code))
      }

    } catch (e) {
      dispatch(searchFail(e))
    } 
  }
