import React, { Component } from 'react';
import { View } from 'react-native';

export default class Root extends Component {

    render() {
        return (
            // Try removing the `flex: 1` on the parent View.
            // The parent will not have dimensions, so the children can't expand.
            // What if you add `height: 300` instead of `flex: 1`?
            <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: 'black'}} />
                <View style={{flex: 1, backgroundColor: 'red'}} />
                <View style={{flex: 1, backgroundColor: 'yellow'}} />
            </View>
        )
    }
}