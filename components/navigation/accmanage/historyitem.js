import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default class HistoryItem extends React.Component {
  render(){
    return (
      <View activeOpacity={0.6} style={styles.itemcontainer}>
          <View style={styles.itembox}>
            <View style={styles.bnkndate}>  
                <Text style={styles.datestyle}>{this.props.dateinfo}</Text>
                <Text style={styles.bnkstyle}>{this.props.bnkinfo}</Text>
            </View>
            <View style={styles.payedinfo}>
                <Text style={styles.paytextstyle}>{this.props.payed}원</Text>
            </View>
          </View>
        <StatusBar style="auto" />
      </View>
    );
}
}

const styles = StyleSheet.create({
  itemcontainer: {
      alignItems:'center',
      justifyContent:'center',
  },
  itembox:{
    justifyContent: 'center',
    width:wwidth,
    height:wheight*0.1,
    borderBottomWidth:0.5,
    paddingLeft:wwidth*0.05,
    paddingRight:wwidth*0.05,
  },
  bnkndate: {
      flexDirection:'row',
      alignItems:'center',

      marginTop:wheight*0.01,
  },
  payedinfo:{
      marginTop:wwidth*0.03,
      alignItems:'flex-end',
  },

  datestyle: {
    fontSize:wwidth*0.035,
    color:'#666666',
},
  bnkstyle: {
      fontSize:wwidth*0.04,
      fontWeight:'bold',
      marginLeft:wwidth*0.06,
  },
  paytextstyle:{
      fontSize:wwidth*0.05,
      fontWeight:'bold',
  }

});
