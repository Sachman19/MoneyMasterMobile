//import { StatusBar } from 'expo-status-bar';
import {StyleSheet} from 'react-native';

import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './pages/LoginPage.js'
import RegisterPage from './pages/RegisterPage.js'
import HomePage from './pages/HomePage.js'
import AccountPage from './pages/AccountPage.js'
import EmailVerification from './pages/EmailVerification.js'
import ForgotPasswordPage from './pages/ForgotPasswordPage.js'
import TransferPage from './pages/TransferPage.js'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Account" component={AccountPage} />
        <Stack.Screen name="Email" component={EmailVerification} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordPage} />
        <Stack.Screen name="Transfer" component={TransferPage} />
      </Stack.Navigator>


    </NavigationContainer>
    
  );
}