import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native'

import userImg from '../assets/gabriel_github.jpeg'

export function Header(){
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>Gabriel!</Text>
            </View>

            <Image  style={styles.image}source={userImg}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        marginTop: '15%'
    },

    greeting: {
        fontSize: 32,
        fontFamily: 'Roboto',
        color: 'grey'

    },

    userName: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: 'black'
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 40
    }
})