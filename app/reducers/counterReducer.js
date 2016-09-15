import * as counterActionTypes from '../actions/counterActionTypes'

export default function counterReducer(state = 0, action = {}) {
  switch (action.type) {
    case counterActionTypes.COUNTER_ACTION_INCREMENT:
      return state + 1
    case counterActionTypes.COUNTER_ACTION_DECREMENT:
      return state - 1
    default:
      return state
  }
}