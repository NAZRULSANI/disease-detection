// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome'; 
import Icon from 'react-native-vector-icons/AntDesign'
import { createStackNavigator } from '@react-navigation/stack';
import DiseaseList from './DiseaseList';
 import help from './Help';
import ContactUs from './ContactDoctor';
import About from './About-us';
const   Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
export default class app extends React.Component {

  render(){
  return (
    
    <Tab.Navigator
    initialRouteName="DiseaseList"
    activeColor="#f0edf6"
    inactiveColor="grey"
    barStyle={{ backgroundColor: '#3655A7' }}
  >
    <Tab.Screen
      name="DiseaseList"
      component={DiseaseList}
      options={{
        tabBarLabel: 'DiseaseList',
        tabBarIcon: ({ color }) => (
          <Icons name="plus" color={color} size={23} />
        ),
      }}
    />
    
    
    <Tab.Screen
      name="Help"
      component={help}
      options={{
        tabBarLabel: 'Help',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="help" color={color} size={26} />
        ),
      }}
    />
    
     <Tab.Screen
      name="Contact"
      component={ContactUs}
      options={{
        tabBarLabel: 'Contact',
        tabBarIcon: ({ color }) => (
          <Icon name="contacts" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="About"
      component={About}
      options={{
        tabBarLabel: 'About',
        tabBarIcon: ({ color }) => (
          <Icon name="user" color={color} size={23} />
        ),
      }}
    />
  </Tab.Navigator>
  );
}
}