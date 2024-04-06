import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import React, {useState } from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function LoginPage( {navigation} ) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  
  const doLogin = async (event) => {
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
        onPress={() => navigation.navigate('Home')}
      />

      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />

    </View>

  );
}

function HomePage( navigation ) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Page</Text>
    </View>

  );
}

function RegisterPage( navigation ) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const doRegister = async (event) => {
    event.preventDefault();

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
    });

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
        onPress={() => {doRegister}}
      />
    </View>

  );
}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});
