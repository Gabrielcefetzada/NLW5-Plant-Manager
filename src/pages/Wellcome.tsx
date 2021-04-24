
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
        Mantenha se informado {'\n'}     
        nesse bonito mundo {'\n'}
        botânico!
        {'\n'}
      </Text>

      <Image 
        source={wateringImg} 
        style={styles.image}
        resizeMode="contain"

      />

      <Text style={styles.subtitle}>
          {'\n'}
          Informações interessantes sobre as plantinhas 
          serão passadas à você.
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

