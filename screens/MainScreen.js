import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View , Image } from 'react-native';

export default class FlatListBasics extends Component {
    _listener = () => {
        alert(item);
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{width: 300, height: 100}}
                    source={{uri: 'https://uploads-ssl.webflow.com/5dfd4ee6e5da77246a73b49f/5e3746127c077b4063ec6c52_pic.png'}}
                />
                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Dan'},
                        {key: 'Dominic'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}
                    renderItem={({item}) => <Text onPress={()=> alert(item.key)} style={styles.item}>{item.key}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
