import React, { Component } from 'react'
import { View, Text, DrawerLayoutAndroid } from 'react-native'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'

import Header from '../components/layout/Header'
import AppNavigator from '../components/layout/AppNavigator'
import SideBar from '../components/layout/SideBar'
import * as counterActions from '../actions/counterActions';

export class SamplesApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { state, actions } = this.props;

        var navigationView = (
            <SideBar>
            </SideBar>
        )

        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                <Header>
                </Header>
                <AppNavigator state={state} actions={actions} >
                </AppNavigator>
            </DrawerLayoutAndroid>
        )
    }
}

export default connect(state => ({
    state: state
}),
    (dispatch) => ({
        actions: bindActionCreators(counterActions, dispatch)
    })
)(SamplesApp);