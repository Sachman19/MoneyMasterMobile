import { Button, Text, TextInput, View } from 'react-native';
import React, {useState} from "react"

import {styles} from '../components/Styles.js'

function LoginPage( {navigation} ) { //Needs forgot password and email verification
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    
    const doLogin = async (event) => { //This would be separate on the web app but im keeping it here for now to reuse the consts
      const lowerCaseUsername = name.toLowerCase();
  
      const response = fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Username: lowerCaseUsername,
          Password: password,
        }),
      });
  
      if(response.ok){
        navigation.navigate('Home');
      }
      
    }
  
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Log In</Text>
  
        <TextInput
          style={styles.input}
          placeholder="Username"
          onSubmitEditing = {(value) => setName(value.nativeEvent.text)}
        />
  
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onSubmitEditing = {(value) => setPassword(value.nativeEvent.text)}
        />
  
        <Button
          title="Login"
          //onPress={() => { this.doLogin }}
          onPress={() => navigation.navigate('Home')} //This should send you to a login function that redirects IF valid
        
        />
  
        <Button
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
  
      </View>
  
    );
}

export default LoginPage;