import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';


const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default class AccItem extends React.Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={()=>this.props.onpress()}>
        <View style={this.props.itemboxstyle}>
          <View style={styles.textbox}>
            <Text style={this.props.acctextstyle}>{this.props.bankname}</Text>
            <Text style={this.props.acctextstyle}>삭제</Text>
          </View>
          <View style={styles.textbox}>
            <Text style={this.props.acctextstyle}>{this.props.accnum}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  accmanagecontainer: {
    backgroundColor: '#4f94ef',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: wheight * 0.11,
    width: wwidth * 0.9,
    borderRadius: 20,
    marginBottom: wheight * 0.03,
  },
  textbox:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      width: wwidth*0.8,
  },
  acctext: {
    color: 'white',
    fontSize: wwidth * 0.04,
  }

});
