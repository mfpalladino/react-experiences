import React, { Component } from 'react'
import {  View, Text, StyleSheet } from 'react-native'
import SearchValuesProgress from './SearchValuesProgress'
import Button from 'apsl-react-native-button'

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;

export default class Page1 extends Component {
    constructor(props) {
        super(props)
        this.navigator = props.navigator;
    }
    render() {
        const { counterState, searchValueState, onSearchValuesClick, onSaveLocalValueClick } = this.props;

        return (
            <View style={styles.container}>

                <Text style={{ fontSize: 50, paddingBottom: 50 }}>Page 1</Text>
                <Text style={{ paddingBottom: 20 }}>Contador: {counterState}</Text>

                <LoginButton />

                <Button style={styles.buttonStyle}
                    textStyle={styles.textStyle}
                    onPress={this.gotoPage2.bind(this) }>
                    Go to page 2
                </Button>

                <Button style={styles.buttonStyle}
                    textStyle={styles.textStyle}
                    isDisabled={searchValueState.isSearching}
                    isLoading={searchValueState.isSearching}
                    onPress={onSearchValuesClick}>
                    Search remote values
                </Button>

                <Button style={styles.buttonStyle}
                    textStyle={styles.textStyle}
                    onPress={this.saveLocalValue.bind(this)}>
                    Save local value (AsyncStorage)
                </Button>
            </View>
        )
    }

    gotoPage2() {
        this.navigator.push({
            id: 'page2'
        })
    }

    saveLocalValue() {
        this.props.onSaveLocalValueClick({
            today: new Date()
        })            
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    textStyle: {
        color: 'white'
    },
    buttonStyle: {
        borderColor: '#27ae60',
        backgroundColor: '#2ecc71'
    }
})