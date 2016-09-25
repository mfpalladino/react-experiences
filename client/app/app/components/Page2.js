import React, { Component } from 'react'
import {  View, Text, StyleSheet  } from 'react-native'
import Button from 'apsl-react-native-button'

export default class Page2 extends Component {
    constructor(props) {
        super(props);
        this.navigator = props.navigator;
    }
    render() {
        const { localValueState, onIncrementClick, onDecrementClick, onValueIncrementClick, onGetLocalValueClick } = this.props;

        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 50, paddingBottom: 50 }}>Page 2</Text>
                <Text style={{ fontSize: 50, paddingBottom: 50 }}>Value on localValue: {localValueState.today.toString()}</Text>

                <Button style={styles.buttonStyle}
                    textStyle={styles.textStyle}
                    onPress={this.gotoPage1.bind(this) }>
                    Go to page 1
                </Button>

                <Button style={styles.buttonStyle}
                    textStyle={styles.textStyle}
                    onPress={onIncrementClick }>
                    Increment
                </Button>

                <Button style={styles.buttonStyle}
                    textStyle={styles.textStyle}
                    onPress={onDecrementClick }>
                    Decrement
                </Button>

                <Button style={styles.buttonStyle}
                    textStyle={styles.textStyle}
                    onPress={this.valueIncrement.bind(this) }>
                    Increment 2
                </Button>

                <Button style={styles.buttonStyle}
                    textStyle={styles.textStyle}
                    onPress={onGetLocalValueClick }>
                    Get local value (AsyncStorage)
                </Button>

            </View>
        )
    }

    valueIncrement() {
        this.props.onValueIncrementClick(2)
    }

    gotoPage1() {
        this.navigator.push({
            id: 'page1'
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