import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity } from 'react-native';

import { Foundation } from '@expo/vector-icons'; 

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default class MainNewAcc extends React.Component {
  render(){
    return (
      <TouchableOpacity activeOpacity={0.6} style={styles.mainboxcontainer} onPress={this.props.onpress}>
          <Foundation name="plus" size={wwidth*0.15} color="white" />
          <Text style={styles.textstyle}>계좌 등록하기</Text>
        <StatusBar style="auto" />
      </TouchableOpacity>
    );
}
}

const styles = StyleSheet.create({
  mainboxcontainer: {
    backgroundColor: '#4f94ef',
    alignItems: 'center',
    justifyContent: 'center',
    height : wheight * 0.23,
    width : wwidth * 0.85,
    borderRadius : 30,

    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
  },
  textstyle:{
      fontSize:wwidth*0.07,
      color:'white',
      marginTop : wheight*0.01,
      fontWeight:'bold',
  }
});
