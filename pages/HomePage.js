import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState} from "react"

import {styles} from '../components/Styles.js'

function HomePage( {navigation} ) { //This is going to become our dashboard
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Page</Text>

        <Button
          title="Accounts"
          onPress={() => navigation.navigate('Account')}
        />

        <Button
          title="Transfer Money"
          onPress={() => navigation.navigate('Transfer')}
        /> 

      </View>
  
    );
}

export default HomePage;