import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Main from './components/navigation/main';
import Notice from './components/navigation/notice';
import Mypage from './components/navigation/mypage';
import Settings from './components/navigation/settings';

import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

export default class App extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon:({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Main') {
                  return <Entypo name='home' size={size} color={color} />;
                }
                else if (route.name === 'Notice') {
                  return <Ionicons name='notifications' size={size} color={color} />;
                }
                else if (route.name === 'MyPage') {
                  return <Ionicons name='person' size={size} color={color} />;
                }
                else if (route.name === 'Settings') {
                  return <Ionicons name='settings' size={size} color={color} />;
                }
              }
            })}

            tabBarOptions={{
              activeBackgroundColor : 'white',
              inactiveBackgroundColor : '#7cb1f7',
              activeTintColor : '#7cb1f7',
              inactiveTintColor : 'white',
              showLabel : false,    
              tabStyle : { borderLeftWidth : 0.5, borderLeftColor : 'white' },
              style : {height : wheight*0.11},
              //safeAreaInsets : {bottom : 0}
            }}
            >
            <Tab.Screen name="Main" component={Main}/>
            <Tab.Screen name="Notice" component={Notice}/>
            <Tab.Screen name="MyPage" component={Mypage}/>
            <Tab.Screen name="Settings" component={Settings}/>
          </Tab.Navigator> 
        </NavigationContainer>
        <StatusBar style="auto" />
      </View>
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    
  },
  tabstyle:{
    backgroundColor:'#7cb1f7',
  }
});
