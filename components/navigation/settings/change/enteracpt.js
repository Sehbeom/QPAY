import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

import AcptInput from '../acptinput';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;


export default class EnterAcpt extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                </View>
                <View style={styles.body}>
                    <View style={styles.inputbox}>
                        <AcptInput 
                        inputitem="거래승인번호 6자리를 입력하세요"
                        endediting={()=>this.props.navigation.navigate('ChangePage')}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header:{
    flex:1,
  },
  body:{
    flex:5,
    alignItems:'center',
  },
  
});
