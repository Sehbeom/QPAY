import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

import SetItems from '../../default/setitems';
import ChangePage from './change/changepage';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default class AcptNumPage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SetItems
                    setitem="거래승인번호 변경"
                    onPress={()=>this.props.navigation.navigate('EnterAcpt')} />
                <SetItems
                    setitem="거래승인번호 재설정" 
                    onPress={()=>this.props.navigation.navigate('ResetPage')}/>
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
