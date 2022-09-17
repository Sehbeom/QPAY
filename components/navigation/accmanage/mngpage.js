import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import AccItem from './accitem';
import AddAcc from './addacc';

import { Foundation } from '@expo/vector-icons'; 

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

const Stack = createStackNavigator();

export default class MngPage extends React.Component {
  render() {
    return (
      <View style={styles.mngcontainer}>
        <View style={styles.mngbody}>
          <View style={styles.mngacclistbox}>
              <AccItem
                bankname="우리은행"
                accnum="1002-000-00000"
                itemboxstyle={styles.mainaccstyle}
                acctextstyle={styles.mainacctextstyle}    
                onpress={()=>this.props.navigation.navigate('AccHistory')}            
              />
            <AccItem
              bankname="땡땡은행"
              accnum="0000-000-00000"
              itemboxstyle={styles.accitemstyle}
              acctextstyle={styles.acctextstyle}
              onpress={()=>this.props.navigation.navigate('AccHistory')}
            />
            <TouchableOpacity activeOpacity={0.6} style={styles.mngaddacc} onPress={() => this.props.navigation.navigate('AddAcc')}>
              <Foundation name="plus" size={wwidth * 0.05} color="#999999" />
            </TouchableOpacity>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mngcontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  mngbody:{
  },
  mngacclistbox: {
    width: wwidth,
    alignItems: 'center',
    marginTop:wheight*0.05,
  },
  mngaddacc:{
    backgroundColor: '#d2d2d2',
    alignItems: 'center',
    justifyContent: 'center',
    height : wheight * 0.07,
    width : wwidth * 0.9,
    borderRadius : 15,

    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
  },


  mainaccstyle:{
    backgroundColor: 'white',
    borderColor:'#4f94ef',
    borderWidth:wwidth*0.015,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: wheight * 0.12,
    width: wwidth * 0.91,
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
  mainacctextstyle: {
    color: 'black',
    fontSize: wwidth * 0.04,
  },

  accitemstyle: {
    backgroundColor: '#4f94ef',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: wheight * 0.11,
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
  acctextstyle: {
    color: 'white',
    fontSize: wwidth * 0.04,
  }
});
