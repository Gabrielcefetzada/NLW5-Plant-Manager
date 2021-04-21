import React from 'react';
import { StyleSheet, Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

interface EnviromentButtonProps extends RectButtonProps {
    title: string;
    active?: boolean;
}

export function EnviromentBtn({ title, active = false, ...rest} : EnviromentButtonProps){
    return (
        <RectButton 
            style={[styles.container, active && styles.containerActive]}
            {...rest}
        >
            <Text style={[styles.text, active && styles.textActive]}>{title}</Text>
        </RectButton>

    )
}

const styles = StyleSheet.create({

    container: {
       backgroundColor: '#ebf2ed',
       height: 45,
       width: 85,
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 12,
       marginRight: 5
    },

    containerActive: {
        backgroundColor: '#c4ffd5',
    },

    text: {
        fontWeight: 'bold',
        color: 'grey'
    },

    textActive: {
        color: '#0b5921'
    }
})