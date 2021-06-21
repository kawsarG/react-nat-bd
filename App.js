import React, { useState } from 'react';
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainTabScreen from './screens/MainTabScreen';

import {DarwerContent} from './screens/DrawerContent'

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
       <Drawer.Navigator drawerContent={props=><DarwerContent {...props}/>}>
        <Drawer.Screen name="Home" component={MainTabScreen} />
         {/* <Drawer.Screen name="About" component={AboutStackScreen} />  */}
      </Drawer.Navigator>

    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;