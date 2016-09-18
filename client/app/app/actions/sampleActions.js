import * as sampleActionTypes from '../actions/sampleActionTypes'

export const increment = () => ({ type: sampleActionTypes.COUNTER_INCREMENT })
export const decrement = () => ({ type: sampleActionTypes.COUNTER_DECREMENT })
export const valueIncrement = (value) => ({ type: sampleActionTypes.COUNTER_VALUE_INCREMENT, value: value })
export const searchValues = () => (dispatch) => (_searchValues(dispatch))

const _searchValues = (dispatch) => {
  
  dispatch(_searchValuesStarted())

  let url = 'http://192.168.56.2:5000/api/values'

  return fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      if (data.error) throw data.error.message || 'Unable to search'
      return data
    })
    .then((data) => {
      dispatch(_searchValuesSuccess(data))
    })
    .catch((err) => {
      dispatch(_searchValuesFailed(err))
    })
}

const _searchValuesStarted = () => ({ type: sampleActionTypes.SEARCH_VALUES_STARTED })
const _searchValuesSuccess = (values) => ({ type: sampleActionTypes.SEARCH_VALUES_SUCCESS, values: values})
const _searchValuesFailed = (error) => ({ type: sampleActionTypes.SEARCH_VALUES_FAILED, error: error}) 