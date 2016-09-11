import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class Root extends Component {

    constructor(props) {
        super(props);
        this.state = { textoDigitado: '' };
    }

    render() {
        return (
            <View style={{ padding: 10 }}>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Exemplo de placeHolder..."
                    onChangeText={(text) => this.setState({ textoDigitado : text }) }
                    />
                <Text style={{ padding: 10, fontSize: 42 }}>
                    {this.state.textoDigitado }
                </Text>
            </View>
        )
    }
}