import * as counterActionTypes from '../actions/counterActionTypes'

export function increment() {
  return {
    type: counterActionTypes.COUNTER_ACTION_INCREMENT
  }
}

export function decrement() {
  return {
    type: counterActionTypes.COUNTER_ACTION_DECREMENT
  }
}

export function valueIncrement(value) {
  return {
    type: counterActionTypes.COUNTER_ACTION_VALUE_INCREMENT,
    value: value
  }
}
