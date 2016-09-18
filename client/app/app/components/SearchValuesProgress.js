import React, { Component } from 'react'
import {  View  } from 'react-native'
import * as Progress from 'react-native-progress'

export default class SearchValuesProgress extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { searchValue, style } = this.props;

        var searchValueProgress;
        if (searchValue.isSearching)
            searchValueProgress = <Progress.CircleSnail colors={['green']} />

        return (
            <View style={style}>
                {searchValueProgress}
            </View>
        )
    }
}