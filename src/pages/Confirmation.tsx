import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

import { ButtonMoreUsed } from '../components/ButtonMoreUsed'
import { useNavigation } from '@react-navigation/core'
import { useRoute } from '@react-navigation/core'

interface Params {
    title: string;
    subtitle: string;
    buttonTitle: string;
    icon: 'smile' | 'hug',
    nextScreen: string;
}

const emojis = {
    hug: '🤗',
    smile: '😀'
}

export function Confirmation() {
    const routes = useRoute() 

    const { 
        title,
        subtitle,
        buttonTitle,
        icon,
        nextScreen,
    } = routes.params as Params

    const navigation = useNavigation()

    const handleMoveOn = () => {
        navigation.navigate(nextScreen)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.emoji}>
               {emojis[icon]}
                </Text>

                <Text style={styles.title}>
                   {title}
                </Text>

                <Text style={styles.subtitle}>
                    {subtitle}
                </Text>
            </View>

            <View style={styles.footer}>
                <ButtonMoreUsed title="Vamos lá!" onPress={handleMoveOn}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontSize: 22,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'green',
        marginTop: 15
    },

    subtitle: {
        fontSize: 17,
        lineHeight: 30,
        fontFamily: 'Roboto',
        textAlign: 'center',
        color: '#076310',
        marginTop: 15
    },

    emoji: {
        fontSize: 32
    }, 

    footer: {
        width: '100%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }

})