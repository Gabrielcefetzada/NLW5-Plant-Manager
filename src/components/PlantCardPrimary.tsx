import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { RectButton, RectButtonProps
 } from 'react-native-gesture-handler'
 import { SvgFromUri } from 'react-native-svg'

interface PlantProps extends RectButtonProps {
    data: {
        name: string;
        photo: string;
    }
}

export const PlantCardPrimary = ({data, ...rest} : PlantProps) => {
    return (
        <RectButton style={styles.container}
        {...rest}>
            <SvgFromUri 
            width={70}
            height={70}
            uri={data.photo}
            />
            <Text style={styles.text}>{data.name}</Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {

        borderRadius: 20,
        width: 170,
        height: 190,
        padding: 20,
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#f0f5f2',
        justifyContent: 'center'
    },

    text: {
        color: 'green',
        fontFamily: 'Roboto',
        marginVertical: 16
    }
})