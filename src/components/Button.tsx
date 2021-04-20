
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
        justifyContent: 'space-around',
        marginTop: 75,
    },

    button: {
        backgroundColor: '#11ba51',
        justifyContent: 'center',
        alignItems: 'center',
        height: 66,
        width: 66,
        padding: 10,
        borderRadius: 15
    },

    textBtn: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'sans-serif-condensed'
    }
})

