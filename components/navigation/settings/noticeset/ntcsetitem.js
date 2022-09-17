import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity,Switch } from 'react-native';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default class NtcSetItem extends React.Component {

    render() {
        return (
            <View style={styles.setcontainer}>
                <View style={styles.itembox}>
                    <Text style={styles.itemstyle}>{this.props.setitem}</Text>
                </View>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={"#f5dd4b"} />
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    setcontainer: {
        alignItems: 'center',
        justifyContent: 'space-around',

        height: wheight * 0.1,
        width: wwidth,

        paddingLeft: wwidth * 0.13,
        paddingRight: wwidth * 0.13,

        borderBottomWidth: 0.5,

        flexDirection:'row',

    },
    itembox: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',

        height: wheight * 0.1,
        width: wwidth * 0.9,
    },
    itemstyle: {
        fontSize: wwidth * 0.045,
    }

});
