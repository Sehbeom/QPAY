import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default class NoticeItem extends React.Component {
  render(){
    return (
      <View activeOpacity={0.6} style={styles.itemcontainer}>
          <View style={styles.itembox}>
            <View style={styles.compndate}>  
                <Text style={styles.compstyle}>{this.props.comp}</Text>
                <Text style={styles.datestyle}>{this.props.dateinfo}</Text>
            </View>
            <View style={styles.payedinfo}>
                <Text style={styles.paytextstyle}>{this.props.payinfo}</Text>
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
  compndate: {
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems:'center',

  },
  payedinfo:{
      marginTop:wwidth*0.03,
  },
  compstyle: {
      fontSize:wwidth*0.04,
      color:'black',
      fontWeight:'bold',
  },
  datestyle:{
      fontSize:wwidth*0.03,
      color:'#666666',
  },
  paytextstyle:{
      fontSize:wwidth*0.033,
      color:'#666666',
  }

});
