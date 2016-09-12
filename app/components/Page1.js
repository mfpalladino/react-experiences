import React, { Component } from 'react'
import {  View, Text, Button, TouchableNativeFeedback, StyleSheet  } from 'react-native'

class Page1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 'page1'
        }
    }
    render() {

        return (
            <View>
                <Text style={{fontSize:50, paddingBottom:50}}>Page 1</Text>
                <TouchableNativeFeedback
                    onPress={this.gotoPage2.bind(this) }>
                    <View>
                        <Text>Go to page2</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    gotoPage2() {
        this.props.navigator.push({
            id: 'page2'
        });
    }
}

module.exports = Page1;