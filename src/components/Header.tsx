import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native'


export function Header(){

    const [userName, setUserName] = useState<string>()

    useEffect(() => {
        const loadStoragedUser = async () => {
            const user = await AsyncStorage.getItem('@plantmanager:user')
            setUserName(user || '')
        }

        loadStoragedUser()

    }, [userName])

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.userName}>{userName},</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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