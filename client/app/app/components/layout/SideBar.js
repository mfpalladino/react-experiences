import React, { Component } from 'react'
import {  View, Text  } from 'react-native'

export default class SideBar extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>Isto aqui poderia ser um item de menu!</Text>
      </View>
    )
  }
}