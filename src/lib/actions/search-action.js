import { key } from '../conf/key'


export const SEARCH_SUCCES = 'SEARCH_SUCCES'
export const SEARCH_FAIL = 'SEARCH_FAIL'
export const SEARCH_API = 'SEARCH_API'
export const END_SEARCH = 'END_SEARCH'

export const searchAPi = () => ({
  type: SEARCH_API,
})

export const searchSucces = (res) => ({
  type: SEARCH_SUCCES,
  payload: res,
  showResult: true,
})

export const searchFail = ({err}) => ({
  type: SEARCH_FAIL,
  payload: {
    err,
  },
})
export const endSearch = () => ({
  type: END_SEARCH,
})

export const searchAPI = (sValue) =>
  async function(dispatch) {
    dispatch(searchAPi())
    try {
      const result = await fetch('https://www.googleapis.com/youtube/v3/search?type=&q='+sValue+'&maxResult=25&part=snippet&key='+key+'',{
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'content-type': 'applicaiton/json',
        },
      })

      const json = await result.json()
      // console.log(json);
      // const { res } = json
      // console.log('res',json);
      if (json.kind) {

        dispatch(searchSucces({json}))
      }else {
        dispatch(searchFail({json}))
      }

    } catch (e) {
      // console.log(e)
      dispatch(searchFail(e))
    }
  }
