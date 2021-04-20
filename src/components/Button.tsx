
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity , SafeAreaView, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export default function Button({ title, ...rest } : ButtonProps) {

  return (
    <SafeAreaView style={styles.container}>      
      <TouchableOpacity 
      activeOpacity={0.7}
      style={styles.button}
      {...rest}
      >
          <Text style={styles.textBtn}>
            { title } 
          </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: {
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        width: 56
    },

    textBtn: {
        color: 'white',
        fontSize: 24
    }
})

