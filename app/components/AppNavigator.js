import React , {Component} from 'react'
import
{
  View,
  Navigator
} from 'react-native'

import Page1 from './Page1'
import Page2 from './Page2'

class AppNavigator extends React.Component{
  constructor(props) {
  super(props)
  }
  
  render() {
    var initialRouteID = 'page1';
    return (
      <Navigator
        style={{flex:1}}
        initialRoute={{id: initialRouteID}}
        renderScene={this.navigatorRenderScene}/>
    )
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'page1':
        return (<Page1 navigator={navigator} route={route} title="Página 1"/>)
      case 'page2':
        return (<Page2 navigator={navigator} route={route} title="Página 2"/>)
    }
  }
}


module.exports = AppNavigator;