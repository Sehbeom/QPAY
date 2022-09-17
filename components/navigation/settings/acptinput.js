import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput } from 'react-native';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default class AcptInput extends React.Component {
    autopass = (Value) =>{
        var TextLength = Value.length.toString();

        if(TextLength == 6){
            this.props.endediting()
        }
    }

    render() {
        return (
            <View style={styles.inputcontainer}>
                <Text style={styles.textstyle}>{this.props.inputitem}</Text>
                <TextInput 
                style={styles.inputstyle} 
                maxLength={6} 
                textAlign={'center'} 
                keyboardType={'number-pad'}
                autoFocus={true}
                onChangeText={Value => this.autopass(Value)}
                // onEndEditing={this.props.endediting}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputcontainer:{
        alignItems:'center',
        justifyContent:'space-between',
        width:wwidth,
        height:wheight*0.1,
    },
    textstyle:{
        fontSize:wwidth*0.04,
        fontWeight:'bold',
    },
    inputstyle:{
        fontSize:wwidth*0.05,
        borderBottomWidth:1,
        borderColor:'#4f94ef',
        width:wwidth*0.6,
    }
});
