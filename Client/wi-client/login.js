import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';

export default function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    
    //simple login

    function loginButton (event)
    {
            alert("It happened!");
    }

    //sign up

    function registerButton (event)
    {
        alert("signing up...");
    }

  return (
      <View style={styles.container}>
      <View style={styles.loginbox}>
          <Text>Log In</Text>
            <TextInput style={styles.TextInput}
            defaultValue="username"
            onChangeText={(username) => setUsername(username)}
            />
            <TextInput
            secureTextEntry={true}
            defaultValue="password"
            onChangeText={(password) => setPassword(password)}
            />
            <TouchableOpacity 
            onPress={loginButton}>
                Log in</TouchableOpacity>
        </View>
        <View style={styles.loginbox}>
        <Text>Register</Text>
            <TextInput style={styles.TextInput}
            defaultValue="username"
            onChangeText={(username) => setUsername(username)}
            />
            <TextInput
            secureTextEntry={true}
            defaultValue="password"
            onChangeText={(password) => setPassword(password)}
            />
            <TouchableOpacity 
            onPress={registerButton}>Sign up</TouchableOpacity>
        </View>
        
      </View>
  );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    loginbox: {
        flex: 1,
        padding: 20,
        margin: 15,
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
});