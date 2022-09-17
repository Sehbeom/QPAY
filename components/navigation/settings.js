import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import SetItems from '../default/setitems';
import AcptNumPage from './settings/acptnumpage';
import EnterAcpt from'./settings/change/enteracpt';
import ChangePage from './settings/change/changepage';
import CheckAcpt from './settings/change/checkacpt';
import ResetPage from './settings/resetpage/resetpage';
import CompletePage from './settings/change/completepage';
import NtcSetPage from './settings/noticeset/ntcsetpage';
import ExitPage from './settings/exit/exitpage';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

const Stack = createStackNavigator();

export default class Settings extends React.Component {

  SettingsScreen = ({navigation}) =>{
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>헤더자리</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.setlist}>
            <SetItems 
            setitem="거래승인번호"
            onPress={() => navigation.navigate('acptnumset')} />
            <SetItems 
            setitem="알림설정"
            onPress={() => navigation.navigate('NtcSetPage')} />
            <SetItems 
            setitem="이용해지"
            onPress={() => navigation.navigate('ExitPage')} />
          </View>
          <TouchableOpacity activeOpacity={0.6} style={styles.logoutbtn}>
            <View style={styles.textbox}>
              <Text style={styles.logouttext}>로그아웃</Text>
            </View>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>

      </View>
    )
  }

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown:false, title:"설정" }} name="settings" component={this.SettingsScreen} />
        <Stack.Screen options={{ title:"거래승인번호 설정" }} name="acptnumset" component={AcptNumPage} />
        <Stack.Screen options={{ title:"거래승인번호 입력" }} name="EnterAcpt" component={EnterAcpt} />
        <Stack.Screen options={{ title:"거래승인번호 변경" }} name="ChangePage" component={ChangePage} />
        <Stack.Screen options={{ title:"거래승인번호 확인" }} name="CheckAcpt" component={CheckAcpt} />
        <Stack.Screen options={{ title:"거래승인번호 재설정" }} name="ResetPage" component={ResetPage} />
        <Stack.Screen options={{ title:"거래승인번호 변경완료" }} name="CompletePage" component={CompletePage} />
        <Stack.Screen options={{ title:"알림설정" }} name="NtcSetPage" component={NtcSetPage} />            
        <Stack.Screen options={{ title:"이용해지" }} name="ExitPage" component={ExitPage} />      
      </Stack.Navigator>

      // <View style={styles.container}>
      //   <View style={styles.header}>
      //     <Text>헤더자리</Text>
      //   </View>
      //   <View style={styles.body}>
      //     <View style={styles.setlist}>
      //       <SetItems setitem="거래승인번호" />
      //       <SetItems setitem="알림설정" />
      //       <SetItems setitem="이용해지" />
      //     </View>
      //     <TouchableOpacity activeOpacity={0.6} style={styles.logoutbtn}>
      //       <View style={styles.textbox}>
      //         <Text style={styles.logouttext}>로그아웃</Text>
      //       </View>
      //     </TouchableOpacity>
      //     <StatusBar style="auto" />
      //   </View>

      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  body:{
    flex:3,
    alignItems:'center',
    justifyContent:'space-between',
  },
  setlist:{
    borderTopWidth:0.5,
  },

  logoutbtn:{
    backgroundColor: '#2860a2',
    alignItems: 'center',
    justifyContent:'center',
    height: wheight * 0.06,
    width: wwidth * 0.9,
    borderRadius: 20,
    marginBottom: wheight * 0.03,

    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
  },
  logouttext: {
    color: 'white',
    fontSize: wwidth * 0.04,
  }
});
