import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import MainBox from '../default/mainbox';
import MainNewAcc from '../default/mainnewacc';
import AddAcc from './accmanage/addacc';
import ScannerScreen from './qrcode/scanner/scannerscreen';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

const MainStack = createStackNavigator();



export default class Main extends React.Component {
  MainScreen = ({navigation}) =>{
    return (
      <View style={styles.container}>
        <View style={styles.header}>

        </View>
        <View style={styles.body}>
          <View style={styles.boxcontainer}>
            <View style={styles.scanboxcontainer}>
              <MainBox 
              onpress={()=>navigation.navigate('ScannerScreen')}/>
            </View>
            <View style={styles.accboxcontainer}>
              <MainNewAcc 
              onpress={()=>navigation.navigate('AddAcc')}/>
            </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    )
  }
  
  render() {
    return (
      <MainStack.Navigator>
        <MainStack.Screen name="Main" component={this.MainScreen} options={{headerShown:false}}/>
        <MainStack.Screen name="AddAcc" component={AddAcc} options={{title:"계좌 추가"}}/>
        <MainStack.Screen name="ScannerScreen" component={ScannerScreen} options={{title:"스캐너"}}/>
      </MainStack.Navigator>

      // <View style={styles.container}>
      //   <View style={styles.header}>

      //   </View>
      //   <View style={styles.body}>
      //     <View style={styles.boxcontainer}>
      //       <View style={styles.scanboxcontainer}>
      //         <MainBox />
      //       </View>
      //       <View style={styles.accboxcontainer}>
      //         <MainNewAcc />
      //       </View>
      //     </View>
      //   </View>
      //   <StatusBar style="auto" />
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
  },
  body:{
    flex:3,
  },
  boxcontainer: {
    // marginTop: wwidth * 0.3,
  },
  scanboxcontainer: {
    marginBottom: wwidth * 0.15,
  },
  accboxcontainer: {

  }
});
