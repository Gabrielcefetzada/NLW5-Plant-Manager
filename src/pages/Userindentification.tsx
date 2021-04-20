import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, KeyboardAvoidingView } from 'react-native';

import { ButtonMoreUsed } from '../components/ButtonMoreUsed'

export function Userindentification() {
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.form}>
                        <Text style={styles.emoji}>
                            🌱
                        </Text>
                        <Text style={styles.title}>
                            Como podemos {'\n'} chamar você?
                        </Text>
                        <TextInput 
                            placeholder="Digite o seu nome"
                            style={styles.input}
                            />
                        <ButtonMoreUsed title="Confirmar"/>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    content: {
        flex: 1,
        width: '100%',
    },

    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },

    emoji: {
        fontSize: 44
    },

    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#d3d8e0',
        width: '100%',
        color: 'black',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },

    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: 'green',
        fontFamily: 'Roboto',
        marginTop: 20
    }


})