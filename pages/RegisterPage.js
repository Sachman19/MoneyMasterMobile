import { Button, Text, TextInput, View } from 'react-native';
import React, {useState} from "react"

import {styles} from '../components/Styles.js'

function RegisterPage( {navigation} ) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    //This would be separate on the web app but im keeping it here for now to reuse the consts
    function doRegister () { //This whole thing doesnt work, i just needed some bs to show the ta temporarily
      /*event.preventDefault();
  
      const lowerCaseUsername = username.toLowerCase();
  
      fetch('', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          FirstName: firstName,
          LastName: lastName,
          Username: lowerCaseUsername,
          PhoneNumber: phoneNumber,
          Email: email,
          Password: password
        }),
      });*/

      navigation.navigate('Email');
  
    }

    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Register User</Text>
  
        <TextInput
          style={styles.input}
          placeholder="First Name"
          onSubmitEditing = {(value) => setFirstName(value.nativeEvent.text)}
        />
  
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          onSubmitEditing = {(value) => setLastName(value.nativeEvent.text)}
        />
  
        <TextInput
          style={styles.input}
          placeholder="User Name"
          onSubmitEditing = {(value) => setUserName(value.nativeEvent.text)}
        />
  
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onSubmitEditing = {(value) => setPhoneNumber(value.nativeEvent.text)}
        />
  
        <TextInput
          style={styles.input}
          placeholder="Email"
          onSubmitEditing = {(value) => setEmail(value.nativeEvent.text)}
        />
  
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onSubmitEditing = {(value) => setPassword(value.nativeEvent.text)}
        />
  
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          onSubmitEditing = {(value) => setConfirmPassword(value.nativeEvent.text)}
        />
  
        <Button
          title="Submit"
          onPress={() => doRegister()} //Redirects to register function
        />
      </View>
  
    );
}

export default RegisterPage;

