import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default class MyInfo extends React.Component {
    render() {
        return (
            <View style={styles.infocontainer}>
                <View style={styles.infobox}>
                    <View style={styles.infoheader}>
                        <Text style={styles.infoheadertext}>내 정보</Text>
                    </View>
                    <View style={styles.infobody}>
                        <View style={styles.bodyitem}>
                            <Text style={styles.infobodylefttext}>이름</Text>
                            <Text style={styles.infobodyrighttext}>{this.props.username}</Text>
                        </View>
                        <View style={styles.bodyitem}>
                            <Text style={styles.infobodylefttext}>생년월일</Text>
                            <Text style={styles.infobodyrighttext}>{this.props.userbirth}</Text>
                        </View>
                        <View style={styles.bodyitem}>
                            <Text style={styles.infobodylefttext}>휴대폰번호</Text>
                            <Text style={styles.infobodyrighttext}>{this.props.userphone}</Text>
                        </View>
                    </View>
                </View>
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    infocontainer: {
        height: wheight * 0.2,
        width: wwidth,

        paddingLeft: wwidth * 0.07,

        borderTopWidth:0.5,
        borderBottomWidth:0.5,
    },
    infobox:{
        height:wheight*0.2,
        width: wwidth*0.9,

        marginTop:wheight*0.02,
    },
    infoheader: {
        marginBottom: wheight * 0.01,
    },
    infobody: {

    },
    bodyitem: {
        height: wheight * 0.035,

        flexDirection: 'row',
        alignItems: 'center',
    },


    infoheadertext: {
        fontSize: wwidth * 0.05,
        fontWeight: 'bold',
    },
    infobodylefttext: {
        fontSize: wwidth * 0.037,
        color:'#666666',
        flex: 1,
    },
    infobodyrighttext: {
        fontSize: wwidth * 0.037,
        color:'#666666',
        flex: 2,
    }


});
