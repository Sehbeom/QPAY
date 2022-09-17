import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default class AccDetailBox extends React.Component {
  render() {
    return (
        <View style={styles.accmanagecontainer}>
          <View style={styles.bnknaccnum}>
            <Text style={styles.bnktext}>{this.props.bnkinfo}</Text>
            <Text style={styles.accnumtext}>{this.props.accnum}</Text>
          </View>
          <View style={styles.money}>
            <Text style={styles.moneytext}>{this.props.balance}원</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  accmanagecontainer: {
    backgroundColor: '#4f94ef',
    alignItems: 'center',
    height: wheight * 0.11,
    width: wwidth * 0.9,
    borderRadius: 20,

    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
  },
  bnknaccnum:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    width: wwidth*0.8,
  },
  money:{
      flex:2,
      alignItems:'center',
    //   justifyContent:'center',
      width: wwidth*0.8,
  },

  bnktext: {
    color: 'white',
    fontSize: wwidth * 0.035,
  },
  accnumtext: {
    color: 'white',
    fontSize: wwidth * 0.035,
    marginLeft:wwidth*0.02,
  },
  moneytext: {
    color: 'white',
    fontSize: wwidth * 0.06,
    fontWeight:'bold',
    marginTop:wheight*0.01,
  }

});
