import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from '../Screen/BottomTabNavigation'
import DrawerSetting from '../Screen/DrawerSeeting'

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () =>
 {
  return (

      <Drawer.Navigator 
        openByDefault={false}
      drawerContent={(props) => <DrawerSetting {...props} />}>
        <Drawer.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
        
      </Drawer.Navigator>
    
  );
}