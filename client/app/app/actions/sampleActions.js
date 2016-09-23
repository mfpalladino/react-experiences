import React, { AsyncStorage } from 'react-native'
import * as sampleActionTypes from '../actions/sampleActionTypes'

export const increment = () => ({ type: sampleActionTypes.COUNTER_INCREMENT })
export const decrement = () => ({ type: sampleActionTypes.COUNTER_DECREMENT })
export const valueIncrement = (value) => ({ type: sampleActionTypes.COUNTER_VALUE_INCREMENT, value: value })

export const searchValues = () => {
  return dispatch => {
    dispatch({ type: sampleActionTypes.SEARCH_VALUES_STARTED })

    let url = 'http://192.168.56.2:5000/api/values'

    return fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) throw data.error.message || 'Unable to search'
        return data
      })
      .then((values) => {
        dispatch({ type: sampleActionTypes.SEARCH_VALUES_SUCCESS, values })
      })
      .catch((error) => {
        dispatch({ type: sampleActionTypes.SEARCH_VALUES_FAILED, error })
      })
  }
}

export const saveLocalValue = (value) => {
  return dispatch => {
    dispatch({ type: sampleActionTypes.SAVE_LOCAL_VALUE, value: value })

    let thisValue = value
    return AsyncStorage.setItem("localValue", JSON.stringify(value)).then(function () {
      dispatch({ type: sampleActionTypes.SAVE_LOCAL_VALUE_SUCCESS, value: thisValue })
    })
  }
}


export const getLocalValue = () => (dispatch) => (_getLocalValue(dispatch))
const _getLocalValue = (dispatch) => {
  AsyncStorage.getItem("localValue").then((value) => {
    dispatch(_getLocalValueSuccess(value))
  }).done()
}
const _getLocalValueSuccess = (value) => ({ type: sampleActionTypes.GET_LOCAL_VALUE_SUCCESS, value: value })