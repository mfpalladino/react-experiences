import React, { Component } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import counter from '../reducers/counterReducer'
import SamplesApp from './SamplesApp'

const createStoreWithMidleware = applyMiddleware(thunk)(createStore)
const reducer = combineReducers({ counter })
const store = createStoreWithMidleware(reducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SamplesApp />
      </Provider>
    )
  }
}