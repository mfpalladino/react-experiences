import React, { Component } from 'react'
import {  View, Text  } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View>
                <Text style={{ margin: 10, fontSize: 15, textAlign: 'center' }}>Linha 1 do cabeçalho</Text>
                <Text style={{ margin: 10, fontSize: 15, textAlign: 'center' }}>Linha 2 do cabeçalho</Text>
            </View>
        )
    }
}