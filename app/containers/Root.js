import React, { Component } from 'react'
import {  View, Text, DrawerLayoutAndroid } from 'react-native'

import AppNavigator from './AppNavigator'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import * as valueActions from '../actions/valueActions'
import * as reducers from '../reducers/reducer'

import { connect } from 'react-redux'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const reducer = combineReducers(reducers)
const store = createStoreWithMiddleware(reducer)

export class Root extends Component {

  render() {
    var navigationView = (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>Isto aqui poderia ser um item de menu!</Text>
      </View>
    )

    return (
      <Provider store={store}>
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}>
          <View>
            <Text style={{ margin: 10, fontSize: 15, textAlign: 'center' }}>Linha 1 do cabeçalho</Text>
            <Text style={{ margin: 10, fontSize: 15, textAlign: 'center' }}>Linha 2 do cabeçalho</Text>
          </View>
          <AppNavigator>
          </AppNavigator>
        </DrawerLayoutAndroid>
      </Provider>
    )
  }
}

export default connect(state => ({
  state: state.reducer
}),
  (dispatch) => ({
    actions: bindActionCreators(valueActions, dispatch)
  })
)(Root)
