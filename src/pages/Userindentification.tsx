import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

import { ButtonMoreUsed } from '../components/ButtonMoreUsed'
import { useNavigation } from '@react-navigation/core'

export function Userindentification() {

    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)
    const [name, setName] = useState<string>()

    const handleFocus = () => {
        setIsFocused(true)
        setIsFilled(!! name)
    }

    const handleBlur = () => {
        setIsFocused(false)
    }

    const handleInputChange = (value: string) => {
        setIsFilled(!! value)
        setName(value)
    }

    const navigation = useNavigation()

    const handleSubmit = () => {
      navigation.navigate('Confirmation')
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
             behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
             style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.form}>
                        <Text style={styles.emoji}>
                            🌱
                        </Text>
                        <Text style={styles.title}>
                            Como podemos {'\n'} chamar você?
                        </Text>
                        <TextInput
                            onBlur={handleBlur} 
                            onFocus={handleFocus}
                            onChangeText={handleInputChange}
                            placeholder="Digite o seu nome"
                            style={[styles.input, (isFocused || isFilled) && { borderBottomColor: 'green'} ]}
                        />
                       <ButtonMoreUsed title="Confirmar" onPress={handleSubmit}/> 
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
        marginTop: 20,
        fontWeight: 'bold'
    }


})