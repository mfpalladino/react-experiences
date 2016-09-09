import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';


export default class Root extends Component {

    constructor(props) {
        super(props);
        this.state = { modalVisible: false };
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={{ marginTop: 22 }}>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { alert("Modal has been closed.") } }
                    >
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <Text>Hello World no formulário MODAL!</Text>

                            <TouchableHighlight onPress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                            } }>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>

                        </View>
                    </View>
                </Modal>

                <TouchableHighlight onPress={() => {
                    this.setModalVisible(true)
                } }>
                    <Text>Show Modal</Text>
                </TouchableHighlight>

            </View>)
    }
}

// const styles = StyleSheet.create({

//     container: {
//         paddingTop: 64,
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: Colors.white
//     },
//     searchBox: {
//         width: Consts.windowWidth * 0.8
//     }
// })