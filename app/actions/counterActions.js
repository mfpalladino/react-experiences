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