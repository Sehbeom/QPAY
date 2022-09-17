import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput } from 'react-native';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default class CompletePage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                </View>

                <View style={styles.body}>
                    <View style={styles.inputcontainer}>
                        <Text style={styles.textstyle}>거래승인번호가 변경되었습니다!</Text>
                    </View>
                    <TouchableOpacity 
                    activeOpacity={0.6} 
                    style={styles.completebtn} 
                    onPress={()=>this.props.navigation.reset({
                            index:0,
                            routes:[{name:'Settings'}]
                        })}>
                        <View style={styles.textbox}>
                            <Text style={styles.logouttext}>완료</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
    },
    header:{
        flex:1,
    },
    body:{
        flex:5,
        alignItems:'center',
        justifyContent:'space-between',
    },
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
    completebtn:{
        backgroundColor: '#7cb1f7',
        alignItems: 'center',
        justifyContent:'center',
        height: wheight * 0.06,
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
      logouttext: {
        color: 'white',
        fontSize: wwidth * 0.04,
      }
});
