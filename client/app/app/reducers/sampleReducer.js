import * as sampleActionTypes from '../actions/sampleActionTypes'

const initialState = {
  counter: 0,
  searchValue: {
    isSearching: false,
    currentValues: []
  }
}

export default function sampleReducer(state = initialState, action = {}) {
  switch (action.type) {

    case sampleActionTypes.COUNTER_INCREMENT:
      return Object.assign({}, state, { counter: state.counter + 1 })

    case sampleActionTypes.COUNTER_DECREMENT:
      return Object.assign({}, state, { counter: state.counter + 1 })

    case sampleActionTypes.COUNTER_VALUE_INCREMENT:
      return Object.assign({}, state, { counter: state.counter + action.value })

    case sampleActionTypes.SEARCH_VALUES_STARTED:
      return Object.assign({}, state, {
        searchValue: Object.assign({}, state.searchValue,
          {
            isSearching: true
          })
      })

    case sampleActionTypes.SEARCH_VALUES_SUCCESS:
      return Object.assign({}, state, {
        searchValue: Object.assign({}, state.searchValue,
          {
            isSearching: false,
            currentValues: action.values
          })
      })

    case sampleActionTypes.SEARCH_VALUES_FAILED:
      return Object.assign({}, state, {
        searchValue: Object.assign({}, state.searchValue,
          {
            isSearching: false
          })
      })


    default:
      return state
  }
}