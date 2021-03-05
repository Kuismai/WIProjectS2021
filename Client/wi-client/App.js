import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Login from './login';
import Header from './header';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text>The very awesome store app</Text>
      <Login />
      
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
