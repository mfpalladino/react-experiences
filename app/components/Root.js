import React, { Component } from 'react';
import {  View, Text, DrawerLayoutAndroid } from 'react-native';

import AppNavigator from './AppNavigator'

export default class Root extends Component {
  render() {

    var navigationView = (

<View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Isto aqui poderia ser um item de menu!</Text>
      </View>      
    );

    return (
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
    )
  }
}
