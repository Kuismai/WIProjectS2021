import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import APILogin from './api/APILogin.js';
import APIRegister from './api/APIRegister.js';

export default function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    
    //simple login

    function loginButton (event)
    {
        APILogin(username, password)
          .then(res => {
            if(res.data){
              alert("Logged in successfully!")
              localStorage.setItem("username", username);
              localStorage.setItem("tokenUser", res.data.token);
              props.loginSuccess(); //set state to logged in 
        }
      })
      .catch(error => {
        console.log(error.response);
      });
    }

    //sign up

    function registerButton ()
    {
        APIRegister(username, password)
        .then(function (res) {
          console.log(res.data);
          })
        .catch(function (error) {
          console.log(error);
        });
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