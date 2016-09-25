import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import SamplesApp from './SamplesApp'

const store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SamplesApp />
      </Provider>
    )
  }
}