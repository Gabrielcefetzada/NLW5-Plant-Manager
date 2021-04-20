import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Userindentification } from './src/pages/Userindentification'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Userindentification/>
    </SafeAreaView>
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
