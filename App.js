//import { StatusBar } from 'expo-status-bar';
import {StyleSheet} from 'react-native';

import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './pages/LoginPage.js'
import RegisterPage from './pages/RegisterPage.js'
import HomePage from './pages/HomePage.js'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Register" component={RegisterPage} />
      </Stack.Navigator>


    </NavigationContainer>
    
  );
}