import React, { AsyncStorage } from 'react'
import * as sampleActionTypes from '../actions/sampleActionTypes'

export const increment = () => ({ type: sampleActionTypes.COUNTER_INCREMENT })
export const decrement = () => ({ type: sampleActionTypes.COUNTER_DECREMENT })
export const valueIncrement = (value) => ({ type: sampleActionTypes.COUNTER_VALUE_INCREMENT, value: value })
export const searchValues = () => (dispatch) => (_searchValues(dispatch))
export const saveLocalValue = (value) => (dispatch) => (_saveLocalValue(dispatch, value))
export const getLocalValue = () => (dispatch) => (_getLocalValue(dispatch))

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
const _searchValuesSuccess = (values) => ({ type: sampleActionTypes.SEARCH_VALUES_SUCCESS, values: values })
const _searchValuesFailed = (error) => ({ type: sampleActionTypes.SEARCH_VALUES_FAILED, error: error })

const _saveLocalValue = (value) => {
  AsyncStorage.setItem("localValue", value)
  dispatch(_saveLocalValueSuccess(value))
}

const _saveLocalValueSuccess = (value) => ({ type: sampleActionTypes.SAVE_LOCAL_VALUE_SUCCESS, value: value })

const _getLocalValue = (dispatch) => {
  AsyncStorage.getItem("localValue").then((value) => {
    dispatch(_getLocalValueSuccess(value))
  }).done()
}

const _getLocalValueSuccess = (value) => ({ type: sampleActionTypes.SEARCH_VALUES_SUCCESS, value: value })