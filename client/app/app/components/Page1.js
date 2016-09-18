import React, { Component } from 'react'
import {  View, Text, Button, TouchableNativeFeedback, StyleSheet  } from 'react-native'

export default class Page1 extends Component {
    constructor(props) {
        super(props)
        this.navigator = props.navigator;
    }
    render() {
        const { counter, onSearchValuesClick } = this.props;

        return (
            <View>
                <Text style={{ fontSize: 50, paddingBottom: 50 }}>Page 1</Text>
                <TouchableNativeFeedback
                    onPress={this.gotoPage2.bind(this) }>
                    <View>
                        <Text>{counter}</Text>
                        <Text>Go to page2</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback
                    onPress={onSearchValuesClick}>
                    <View>
                        <Text>Buscar valores</Text>
                    </View>
                </TouchableNativeFeedback>
                
            </View>
        )
    }

    gotoPage2() {
        this.navigator.push({
            id: 'page2'
        })
    }
}