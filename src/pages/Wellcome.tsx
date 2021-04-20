
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';

import wateringImg from '../assets/watering.png'
import Button from '../components/Button'

export default function Wellcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Cuide das suas plantas {'\n'}     
        de uma forma inteligente e fácil!
      </Text>

      <Image source={wateringImg} style={styles.image}/>

      <Text style={styles.subtitle}>Não esqueça mais de regar suas plantas.
          nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <Button title="Avançar" />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontsize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'green',
        marginTop: 38
    },

    subtitle: {
        textAlign: 'center',
        fontsize: 18,
        paddingHorizontal: 20,
        color: 'green'
    },

    image: {
        width: 292,
        height: 284
    },

})

