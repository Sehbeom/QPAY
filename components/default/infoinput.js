import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput } from 'react-native';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default class InfoInput extends React.Component {

    render() {
        return (
            <View style={styles.inputcontainer}>
                <View style={styles.inputbox}>
                    <Text style={styles.textstyle}>{this.props.inputitem}</Text>
                    <TextInput 
                    style={styles.inputstyle}
                    onChangeText={this.props.changevalue}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputcontainer:{
        alignItems:'center',

        width:wwidth,
        height:wheight*0.09,
    },
    inputbox:{
        height:wheight*0.08,
        justifyContent:'space-around',
    },
    textstyle:{
        marginLeft:wwidth*0.02,
        fontSize:wwidth*0.04,
    },
    inputstyle:{
        fontSize:wwidth*0.04,
        borderBottomWidth:1,
        borderColor:'#4f94ef',
        width:wwidth*0.85,
    }
});
