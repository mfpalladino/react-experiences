import React, { Component } from 'react'
import {  View, Text, StyleSheet } from 'react-native'
import SearchValuesProgress from './SearchValuesProgress'
import Button from 'apsl-react-native-button'

export default class Page1 extends Component {
    constructor(props) {
        super(props)
        this.navigator = props.navigator;
    }
    render() {
        const { counter, searchValue, onSearchValuesClick } = this.props;

        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 50, paddingBottom: 50 }}>Page 1</Text>
                <Text style={{ paddingBottom: 20 }}>Contador: {counter}</Text>

                <Button style={styles.buttonStyle4}
                    textStyle={styles.textStyle}
                    onPress={this.gotoPage2.bind(this) }>
                    Go to page 2
                </Button>

                <Button style={styles.buttonStyle4}
                    textStyle={styles.textStyle}
                    isDisabled={searchValue.isSearching}
                    isLoading={searchValue.isSearching}
                    onPress={onSearchValuesClick}>
                    Buscar valores
                </Button>
            </View>
        )
    }

    gotoPage2() {
        this.navigator.push({
            id: 'page2'
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
    textStyle6: {
        color: '#8e44ad',
        fontFamily: 'Avenir',
        fontWeight: 'bold'
    },
    buttonStylePressing: {
        borderColor: 'red',
        backgroundColor: 'red'
    },
    buttonStyle: {
        borderColor: '#f39c12',
        backgroundColor: '#f1c40f'
    },
    buttonStyle1: {
        borderColor: '#d35400',
        backgroundColor: '#e98b39'
    },
    buttonStyle2: {
        borderColor: '#c0392b',
        backgroundColor: '#e74c3c'
    },
    buttonStyle3: {
        borderColor: '#16a085',
        backgroundColor: '#1abc9c'
    },
    buttonStyle4: {
        borderColor: '#27ae60',
        backgroundColor: '#2ecc71'
    },
    buttonStyle5: {
        borderColor: '#2980b9',
        backgroundColor: '#3498db'
    },
    buttonStyle6: {
        borderColor: '#8e44ad',
        backgroundColor: '#9b59b6'
    },
    buttonStyle7: {
        borderColor: '#8e44ad',
        backgroundColor: 'white',
        borderRadius: 0,
        borderWidth: 3,
    },
    buttonStyle8: {
        backgroundColor: 'white',
        borderColor: '#333',
        borderWidth: 2,
        borderRadius: 22,
    },
    textStyle8: {
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        color: '#333',
    },
    customViewStyle: {
        width: 120,
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
    }
})