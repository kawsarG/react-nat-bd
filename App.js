import React, { useState } from 'react';
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainTabScreen from './screens/MainTabScreen';

import {DarwerContent} from './screens/DrawerContent'


import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import ContactScreen from './screens/ContactScreen';
import MovieScreen from './screens/MovieScreen';
import MoviDetailScreen from './screens/MoviDetailScreen';
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
       <Drawer.Navigator drawerContent={props=><DarwerContent {...props}/>}>
        <Drawer.Screen name="Home" component={MainTabScreen} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
        <Drawer.Screen name="Movie" component={MovieScreen} />
        <Drawer.Screen name="Detail" component={MoviDetailScreen} />
         {/* <Drawer.Screen name="About" component={AboutStackScreen} />  */}
      </Drawer.Navigator>
     
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;