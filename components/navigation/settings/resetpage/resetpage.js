import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import InfoInput from '../../../default/infoinput';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;


export default class ResetPage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.inputbox}>
                        <KeyboardAwareScrollView>
                            <InfoInput inputitem="이름"/>
                            <InfoInput inputitem="생년월일"/>
                            <InfoInput inputitem="통신사"/>
                            <InfoInput inputitem="휴대폰번호"/>
                            <InfoInput inputitem="인증번호"/>
                        </KeyboardAwareScrollView>
                        <TouchableOpacity activeOpacity={0.6}
                            style={styles.btnbox}
                            onPress={()=>this.props.navigation.navigate('EnterAcpt')}>
                                <Text style={styles.btntext}>확인</Text>
                        </TouchableOpacity>
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
  body:{
    flex:5,
    alignItems:'center',
    justifyContent:'space-between',
  },
  inputbox:{
      alignItems:'center',
      marginTop:wheight*0.05,
  },
  btnbox: {
    backgroundColor: '#7cb1f7',
    alignItems: 'center',
    justifyContent: 'center',
    height: wheight * 0.06,
    width: wwidth * 0.9,
    borderRadius: 10,
    marginBottom:wheight*0.05,

    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
  },

  btntext:{
      color:'white',
      fontSize:wwidth*0.04,
  }
  
});
