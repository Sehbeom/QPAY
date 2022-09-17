import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
// import QRCodeScanner from "react-native-qrcode-scanner";

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;


export default class ScannerScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>스캐너스크린</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
  },
  
});
