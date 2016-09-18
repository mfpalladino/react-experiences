import React, { Component } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import samplesState from '../reducers/sampleReducer'
import SamplesApp from './SamplesApp'

const logger = createLogger()
const createStoreWithMidleware = applyMiddleware(thunk,logger)(createStore)
const reducer = combineReducers({ samplesState })
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