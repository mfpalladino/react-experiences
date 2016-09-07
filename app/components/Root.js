import React, {Component} from 'react'
import {StyleSheet, StatusBar, TextInput, View} from 'react-native'
import Colors from '../utils/Colors'
import Consts from '../utils/Consts'

export default class Root extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.searchBox} />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        paddingTop: 64,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    searchBox: {
        width: Consts.windowWidth * 0.8
    }
})