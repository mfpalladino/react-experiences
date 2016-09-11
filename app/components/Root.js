import React, { Component } from 'react';
import { View } from 'react-native';

export default class Root extends Component {

    render() {
        return (
            <View >
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                    <View style={{ width: 50, height: 50, backgroundColor: 'green' }}/>
                    <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }}/>
                    <View style={{ width: 50, height: 50, backgroundColor: 'blue' }}/>
                </View>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'stretch' }}>
                    <View style={{ width: 50, height: 50, backgroundColor: 'green' }}/>
                    <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }}/>
                    <View style={{ width: 50, height: 50, backgroundColor: 'blue' }}/>
                </View>
            </View>
        )
    }
}