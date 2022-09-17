import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity,Switch } from 'react-native';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default class ExitPage extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.thnxbox}>
                    <Text style={styles.qpay}>Q-PAY</Text>
                    <Text style={styles.guidetext}>Q-PAY를 이용해 주셔서 감사합니다!</Text>
                </View>
                <View style={styles.guidebox}>
                    <View style={styles.guidetextbox}>
                        <Text style={styles.guidetitle}>**이용해지 안내**</Text>
                        <Text style={styles.guidetext}>Q-PAY 이용해지 후 재설치할 경우</Text>
                        <Text style={styles.guidetext}>기존의 데이터는 사용하실 수 없습니다.</Text>
                        <View style={styles.emphasize}>
                            <Text style={styles.guidetext}>Q-PAY 재가입은 </Text>
                            <Text style={styles.emphtext}>1일 후 </Text>
                            <Text style={styles.guidetext}>가능합니다.</Text>
                        </View>
                    </View>
                    <View style={styles.btnbox}>
                        <TouchableOpacity activeOpacity={0.6} style={styles.exitbtn}>
                            <View>
                                <Text style={styles.exittext}>이용해지</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    thnxbox: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',

    },
    guidebox: {
        flex: 2,
        alignItems: 'center',
        backgroundColor:'#e7e6e6',
    },
    guidetextbox:{
        flex:4,
        alignItems:'center',
        justifyContent:'center',
    },
    btnbox:{
        flex:1,
    },

    qpay: {
        fontSize: wwidth * 0.1,
        fontWeight:'bold',
        marginBottom: wheight * 0.02,
    },
    guidetext: {
        fontSize: wwidth * 0.04,
    },
    guidetitle: {
        fontSize: wwidth * 0.04,
        fontWeight: 'bold',
        marginBottom: wheight * 0.02,
    },

    emphasize: {
        flexDirection: 'row',
        marginTop: wheight * 0.06,
    },
    emphtext: {
        fontSize: wwidth * 0.04,
        fontWeight: 'bold',
    },

    exitbtn: {
        backgroundColor: '#4f94ef',
        alignItems: 'center',
        justifyContent: 'center',
        height: wheight * 0.07,
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
    exittext: {
        color: 'white',
        fontSize: wwidth * 0.04,
        fontWeight:'bold',
    }

});
