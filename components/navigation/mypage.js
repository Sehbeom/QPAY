import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView, KeyboardAvoidingView, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import MyInfo from '../default/myinfo';
import MyAcc from '../default/myacc';
import MngPage from './accmanage/mngpage';
import AddAcc from './accmanage/addacc';
import AccItem from './accmanage/accitem';
import AccHistory from './accmanage/acchistory';

import { Foundation } from '@expo/vector-icons';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

const MPRootStack = createStackNavigator();

export default class Mypage extends React.Component {

  MyPageScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>헤더자리</Text>
        </View>
        <View style={styles.body}>
          <MyInfo
            username="이땡땡"
            userbirth="90000"
            userphone="010-****-9999" />
          <StatusBar style="auto" />
          <View style={styles.acccontainer}>
            <View style={styles.accnmanage}>
              <View style={styles.accbox}>
                <View style={styles.accheader}>
                  <Text style={styles.accheadertext}>내 계좌</Text>
                </View>
                <View>
                  <MyAcc
                    bankname="우리은행"
                    accnumber="1002-000-000000" />
                  {/* <MyAcc
                    bankname="땡땡은행"
                    accnumber="0000-000-000000" /> */}
                </View>
              </View>
              <View style={styles.managebox}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={styles.accmanagecontainer}
                  onPress={() => navigation.navigate('MngPage')}>
                  <Text style={styles.accmanagetext}>계좌 관리</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </View>
      </View>
    )
  }

  ////방법2===============================
  // MngPageScreen = ({ navigation }) => {
  //   return (
  //     <View style={styles.mngcontainer}>
  //       <View style={styles.mngheader}>
  //         <Text>헤더자리</Text>
  //       </View>
  //       <View style={styles.mngbody}>
  //         <View style={styles.mngacclistbox}>
  //           <AccItem
  //             bankname="우리은행"
  //             accnum="1002-000-00000" />
  //           <AccItem
  //             bankname="땡땡은행"
  //             accnum="0000-000-00000" />
  //           <TouchableOpacity activeOpacity={0.6} style={styles.mngaddacc} onPress={() => navigation.navigate('AddAcc')}>
  //             <Foundation name="plus" size={wwidth * 0.05} color="#999999" />
  //           </TouchableOpacity>

  //         </View>
  //       </View>
  //     </View>
  //   )
  // }

  render() {
    return (
      <MPRootStack.Navigator>
        {/* 방법2 */}
        {/* <MPRootStack.Screen options={{ headerShown: false }} name="MyPage" component={this.MyPageScreen} />
        <MPRootStack.Screen options={{ title: "계좌 관리" }} name="AccManage" component={this.MngPageScreen} />
        <MPRootStack.Screen options={{ title: "계좌 추가" }} name="AddAcc" component={AddAcc} /> */}
        <MPRootStack.Screen options={{ headerShown: false }} name="MyPage" component={this.MyPageScreen} />
        <MPRootStack.Screen options={{ title: "계좌 관리" }} name="MngPage" component={MngPage} />
        <MPRootStack.Screen options={{ title: "계좌 추가" }} name="AddAcc" component={AddAcc} />
        <MPRootStack.Screen options={{ title: "계좌 내역" }} name="AccHistory" component={AccHistory} />
      </MPRootStack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 3,
  },
  acccontainer: {
    height: wheight * 0.25,

    borderBottomWidth: 0.5,
  },
  accnmanage: {
    height: wheight * 0.2,
    width: wwidth,

    marginTop:wheight*0.02,
  },
  accbox: {
    marginLeft: wwidth * 0.07,
  },
  accheader: {
    justifyContent: 'center',

    marginBottom: wheight * 0.01,
  },
  managebox: {
    width: wwidth,
    alignItems: 'center',
  },

  accheadertext: {
    fontSize: wwidth * 0.05,
    fontWeight: 'bold',
  },

  accmanagecontainer: {
    backgroundColor: '#7cb1f7',
    alignItems: 'center',
    justifyContent: 'center',
    height: wheight * 0.05,
    width: wwidth * 0.9,
    borderRadius: 10,
    marginTop: wheight * 0.03,

    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
  },
  accmanagetext: {
    color: 'white',
    fontSize: wwidth * 0.04,
  },

  // //방법222222222222222222222222
  // //MngPage Style
  // mngcontainer: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   // alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // mngheader: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // mngbody: {
  //   flex: 4,
  // },
  // mngacclistbox: {
  //   width: wwidth,
  //   alignItems: 'center',
  // },
  // mngaddacc: {
  //   backgroundColor: '#d2d2d2',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: wheight * 0.07,
  //   width: wwidth * 0.9,
  //   borderRadius: 15,
  // }

});
