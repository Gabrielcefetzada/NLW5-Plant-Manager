import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Confirmation } from './src/pages/Confirmation'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Confirmation/>
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
