
import React, {useState} from 'react';
import { StyleSheet, Text, Dimensions, Image, SafeAreaView } from 'react-native';

import wateringImg from '../assets/watering.png'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/core'

export function Wellcome() {

 const navigation = useNavigation()

  const handleStart = () => {
    navigation.navigate('UserIdentificationner')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Cuide das suas plantas {'\n'}     
        de uma forma {'\n'}
        inteligente e fácil!
        {'\n'}
      </Text>

      <Image 
        source={wateringImg} 
        style={styles.image}
        resizeMode="contain"

      />

      <Text style={styles.subtitle}>
          {'\n'}
          Não se esqueça mais de regar suas plantas.
          nós cuidamos de lembrar você sempre que precisar.
      </Text> 

      <Button title=">" onPress={handleStart}/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'green',
        marginTop: 38,
        fontFamily: 'Roboto'
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: '#11ba51',
        fontFamily: 'Roboto',
        lineHeight: 30
    },

    image: {
        width: Dimensions.get('window').width * 0.7,
        height: 284
    },

})

