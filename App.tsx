import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Wellcome } from './src/pages/Wellcome'

export default function App() {
  return (
    <SafeAreaView>
      <Wellcome/>
    </SafeAreaView>
  );
}

