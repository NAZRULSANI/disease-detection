// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screen/Home';
import DiseaseList from './Screen/DiseaseList';
import Influenza from './Screen/influenze';
// import AddSymtomps from './Screen/AddSymtomps';
import BottomTabNavigation from './Screen/BottomTabNavigation';
// import ContactUs from './Screen/ContactUs';
import Analysis from './Screen/Analysis';
import Doctor from './Screen/ContactDoctor';
import cold from './Screen/cold';
import Covid from './Screen/covid';
import Diet from './Screen/Diet';
import fever from './Screen/fever';
import About from './Screen/About-us';
import help from './Screen/Help';
import Medicien from './Screen/Medicien';
import setting from './Screen/seeting';
import sore from './Screen/sore';
import Biodata from './Screen/BIodata';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Drawer1 from './Screen/Drawer';
import {DrawerNavigator} from './Screen/Drawer';
import Email from './Screen/Email';
import Drawer_Seeting from './Screen/DrawerSeeting';
import signin from './Screen/SignIn'
import signIn2 from './Screen/SignIn2'
import CheckRecord from './Screen/checkRecord';
import Message from './Screen/Message';
import Chat from './Screen/Chat';
import AddGroupChat from './Screen/AddGroupChat';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signin">
        <Stack.Screen name="signIn2" component={signIn2} options={{ headerShown: false }} />
        <Stack.Screen name="AddGroupChat" component={AddGroupChat} options={{ headerShown: false }} />
        <Stack.Screen name="Message" component={Message} options={{ headerShown: false }} />
        <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
        <Stack.Screen name="signin" component={signin} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Biodata" component={Biodata} options={{ headerShown: false }} />
        <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="DiseaseList" component={DiseaseList} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
        <Stack.Screen name="Analysis" component={Analysis} options={{ headerShown: false }} />
        <Stack.Screen name="cold" component={cold} options={{ headerShown: false }} />
        <Stack.Screen name="Covid" component={Covid} options={{ headerShown: false }} />
        <Stack.Screen name="fever" component={fever} options={{ headerShown: false }} />
        <Stack.Screen name="help" component={help} options={{ headerShown: false }} />
        <Stack.Screen name="Medicien" component={Medicien} options={{ headerShown: false }} />
        <Stack.Screen name="setting" component={setting} options={{ headerShown: false }} />
        <Stack.Screen name="sore" component={sore} options={{ headerShown: false }} />
        <Stack.Screen name="Influenza" component={Influenza} options={{ headerShown: false }} />
        <Stack.Screen name="Diet" component={Diet} options={{ headerShown: false }} />
        <Stack.Screen name="Doctor" component={Doctor} options={{ headerShown: false }} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Email" component={Email} options={{ headerShown: false }} />
        <Stack.Screen name="Drawer_Seeting" component={Drawer_Seeting} options={{ headerShown: false }} />
        <Stack.Screen name="CheckRecord" component={CheckRecord} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


