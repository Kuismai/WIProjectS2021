import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Login from './login';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Text>The very awesome store app</Text>
    <View style={styles.container}>
      
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
