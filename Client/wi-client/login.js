import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import APILogin from './api/APILogin.js';
import APIRegister from './api/APIRegister.js';

export default function Login(props) {
    const [username, setUsername] = useState("");
    const [username2, setUsername2] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [login, setLogin] = useState(props.status);
    
    //simple login

    function loginButton (event)
    {
      event.preventDefault();
        APILogin(username, password)
          .then(res => {
            if (res.status == 401) {
              Alert("Password or username incorrect");
            }
            if(res.data){
              localStorage.setItem("username", username);
              localStorage.setItem("tokenUser", res.data.token);
              (login) =>setLogin(username); 
        }
      })
      .catch(error => {
        console.log("could not log in");
        console.log(error);
      });
    }

    //sign up

    function registerButton ()
    {
        APIRegister(username2, password2)
        .then(function (res) {
          if (res.status == 200) {
          console.log(res.data);
         // alert("Registration successful");
          }

          else if (res.status == 500) {
            console.log("username already in use");
          };
        })
        .catch(function (error) {
          console.log(error.response);
          alert("Registration unsuccessful");
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
                <Text>Log in</Text>
                </TouchableOpacity>
        </View>
        <View style={styles.loginbox}>
          <Text>
        <Text>Register</Text>
        </Text>
            <TextInput style={styles.TextInput}
            defaultValue="username"
            onChangeText={(username2) => setUsername2(username2)}
            />
            <TextInput
            secureTextEntry={true}
            defaultValue="password"
            onChangeText={(password2) => setPassword2(password2)}
            />
            <TouchableOpacity 
            onPress={registerButton}><Text>Sign up</Text></TouchableOpacity>
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