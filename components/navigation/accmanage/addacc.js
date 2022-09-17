import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import InfoInput from '../../default/infoinput';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;


export default class AddAcc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      bank: "",
      accnum: "",
      certifinum: "",
      identifynum: "",

    }
  }


  _changeValue = ({ info, value }) => {
    this.setState({
      [info]: value
    })
  }

  _log = () => {
    console.log(this.state)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.inputbox}>
            <KeyboardAwareScrollView>
              <InfoInput
                inputitem="이름"
                changevalue={(value) => {
                  const info = "name"
                  this._changeValue({ info, value })
                }} />
              <InfoInput
                inputitem="은행"
                changevalue={(value) => {
                  const info = "bank"
                  this._changeValue({ info, value })
                }} />
              <InfoInput
                inputitem="계좌번호"
                changevalue={(value) => {
                  const info = "accnum"
                  this._changeValue({ info, value })
                }} />
              <InfoInput
                inputitem="인증번호"
                changevalue={(value) => {
                  const info = "certifinum"
                  this._changeValue({ info, value })
                }} />
              <InfoInput
                inputitem="주민번호"
                changevalue={(value) => {
                  const info = "identifynum"
                  this._changeValue({ info, value })
                }} />
            </KeyboardAwareScrollView>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={this._log}
              style={styles.accmanagecontainer}>
              <Text style={styles.btntext}>계좌 추가</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.btnbox}>
                        <TouchableOpacity activeOpacity={0.6}
                            style={styles.accmanagecontainer}>
                                <Text style={styles.btntext}>계좌 추가</Text>
                        </TouchableOpacity>
                    </View> */}
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  //   header:{
  //     flex:1,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  body: {
    // flex:4,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  inputbox: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: wheight * 0.05,
  },

  accmanagecontainer: {
    backgroundColor: '#7cb1f7',
    alignItems: 'center',
    justifyContent: 'center',
    height: wheight * 0.06,
    width: wwidth * 0.9,
    borderRadius: 10,
    marginBottom: wheight * 0.05,

    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
  },

  btntext: {
    color: 'white',
    fontSize: wwidth * 0.04,
  }

});
