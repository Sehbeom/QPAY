import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HistoryItem from './historyitem';
import AccDetailBox from './accdetailbox';

export default class AccHistory extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.accdetailbox}>
                    <AccDetailBox 
                    bnkinfo="땡땡은행"
                    accnum="1002-000-000000"
                    balance="350902930"/>
                </View>
                <View style={styles.listbox}>
                    <HistoryItem
                        dateinfo="04.22"
                        bnkinfo="땡땡은행"
                        payed="10000" />
                    <HistoryItem
                        dateinfo="04.22"
                        bnkinfo="땡땡은행"
                        payed="10000" />
                    <HistoryItem
                        dateinfo="04.22"
                        bnkinfo="땡땡은행"
                        payed="10000" />
                </View>
                <StatusBar style="auto" />
            </View>
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
  accdetailbox:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
  },

  listbox:{
    flex:3,
    borderTopWidth:0.5,
  }
});
