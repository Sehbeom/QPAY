import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default class SetItems extends React.Component {
    render() {
        return (
            <View style={styles.setcontainer}>
                <TouchableOpacity activeOpacity={0.6} onPress={this.props.onPress}>
                    <View style={styles.itembox}>
                        <Text style={styles.itemstyle}>{this.props.setitem}</Text>
                        <AntDesign name="right" size={wwidth * 0.045} color="black" />
                    </View>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    setcontainer: {
        alignItems: 'center',
        justifyContent: 'center',

        height: wheight * 0.1,
        width: wwidth,

        paddingLeft: wwidth * 0.07,
        paddingRight: wwidth * 0.07,

        borderBottomWidth: 0.5,

    },
    itembox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        height: wheight * 0.1,
        width: wwidth * 0.9,
    },
    itemstyle: {
        fontSize: wwidth * 0.045,
    }

});
