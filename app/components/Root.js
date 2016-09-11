import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';

export default class Root extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {dataSource: ds.cloneWithRows(['Teste1', 'Teste2', 'Teste3', 'Teste4'])}
    }

    render() { 
        return (
            <View style={{paddingTop: 22}}>
                <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text>{rowData}</Text>}
                />
            </View>
        )
    }
}