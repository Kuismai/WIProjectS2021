import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Login from './login';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {

  const [login, setLogin] = useState("false");
  const changeLogin = (props) => {
    setLogin(props);
  }

  return (
    <ScrollView>
      <Text>The very awesome store app</Text>
      <Text>Logged in: {login}</Text>
    <View style={styles.container}>
      
      <Login status={login} logIn={changeLogin}/>
      
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
