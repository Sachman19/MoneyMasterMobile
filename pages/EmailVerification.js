import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState} from "react"

import {styles} from '../components/Styles.js'

function EmailVerification( {navigation} ) {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Email Verification Page</Text>

        <Button
          title="Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
  
    );
}

export default EmailVerification;
