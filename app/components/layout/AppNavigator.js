import React, {Component} from 'react'
import {View, Navigator} from 'react-native'

import Page1 from '../Page1'
import Page2 from '../Page2'

export default class AppNavigator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.actions = {}
    }

    render() {
        const { state, actions } = this.props;

        this.state = state
        this.actions = actions

        var initialRouteID = 'page1';
        return (
            <Navigator
                style={{ flex: 1 }}
                initialRoute={{ id: initialRouteID }}
                renderScene={this.navigatorRenderScene.bind(this) }
                configureScene={(route, routeStack) => route.configureScene ? route.configureScene : Navigator.SceneConfigs.PushFromRight}
                />
        )
    }

    navigatorRenderScene(route, navigator) {
        switch (route.id) {
            case 'page1':
                return (<Page1 counter={this.state.counter}
                    navigator={navigator}
                    route={route}
                    title="Página 1"/>)
            case 'page2':
                return (<Page2 onIncrementClick={this.actions.increment}
                    onDecrementClick={this.actions.decrement}
                    navigator={navigator}
                    route={route}
                    title="Página 2"/>)
        }
    }
}