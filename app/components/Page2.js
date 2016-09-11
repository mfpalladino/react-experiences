import React, { Component } from 'react'
import {  View, Text, Button, TouchableNativeFeedback, StyleSheet  } from 'react-native'

class Page2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 'page2'
        }
    }
    render() {
        return (
            <View>
                <Text style={{fontSize:50, paddingBottom:50}}>Page 2</Text>
                <TouchableNativeFeedback
                    onPress={this.gotoPage1.bind(this) }>
                    <View>
                        <Text>Go to page1</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    gotoPage1() {
        this.props.navigator.push({
            id: 'page1'
        })
    }
}

module.exports = Page2