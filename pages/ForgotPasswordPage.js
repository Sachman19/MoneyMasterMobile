import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState} from "react"

import {styles} from '../components/Styles.js'

function ForgotPasswordPage( {navigation} ) { 
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Forgot Password</Text>

        <Button
          title="Email Verification"
          onPress={() => navigation.navigate('Email')}
        />
      </View>
  
    );
}

export default ForgotPasswordPage;