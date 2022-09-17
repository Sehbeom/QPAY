import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

import NtcSetItem from './ntcsetitem';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default class NtcSetPage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <NtcSetItem
                    setitem="알림설정페이지" />
                <NtcSetItem
                    setitem="마케팅(광고) 수신알림" />
                <NtcSetItem
                    setitem="결제 시 알림" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    }
});
