import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes'

export default function App() {
  return (  
      <Routes/>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
  },
})
