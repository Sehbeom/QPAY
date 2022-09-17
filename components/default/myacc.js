import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default class MyAcc extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.bodyitem}>
                    <Text style={styles.accbodylefttext}>{this.props.bankname}</Text>
                    <Text style={styles.accbodyrighttext}>{this.props.accnumber}</Text>
                </View>
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bodyitem: {
        height: wheight * 0.035,

        flexDirection: 'row',
        alignItems: 'center',
    },


    accbodylefttext: {
        fontSize: wwidth * 0.037,
        color:'#666666',
        flex: 1,
    },
    accbodyrighttext: {
        fontSize: wwidth * 0.037,
        color:'#666666',
        flex: 2,
    }


});
