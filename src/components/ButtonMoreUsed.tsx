
import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity , SafeAreaView, TouchableOpacityProps, Dimensions } from 'react-native';

interface ButtonMoreUsedProps extends TouchableOpacityProps {
    title: string;
}

export function ButtonMoreUsed({ title, ...rest } : ButtonMoreUsedProps) {

  return (
         
      <TouchableOpacity 
      activeOpacity={0.7}
      style={styles.button}
      {...rest}
      >
          <Text style={styles.textBtn}>
            { title } 
          </Text>
      </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 5,
    },

    button: {
        backgroundColor: '#11ba51',
        justifyContent: 'space-around',
        textAlign: 'center',
        alignItems: 'center',
        height: 56,
        width: Dimensions.get('window').width * 0.7,
        padding: 10,
        borderRadius: 15,
        marginTop: 15,
    },

    textBtn: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'sans-serif-condensed'
    }
})

