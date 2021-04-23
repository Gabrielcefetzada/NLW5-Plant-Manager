import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image, Text, ScrollView, Platform } from 'react-native'
import { SvgFromUri } from 'react-native-svg'

import waterdrop from '../assets/waterdrop.png'
import { ButtonMoreUsed } from '../components/ButtonMoreUsed'


export function PlantSave(){
    return (
    <View style={styles.PlantInfo}>
        <ScrollView style={styles.PlantInfo}>
            <SvgFromUri 
                uri=""
                width={150}
                height={150}
            />

            <Text style={styles.plantName}>
                Nome da planta
            </Text>

            <Text style={styles.plantAbout}>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quasi amet velit vel harum nulla aut ea quam nam! Architecto molestias debitis aliquam. Nostrum sunt sit ipsam blanditiis ad explicabo.
            </Text>
        </ScrollView>

        <View style={styles.controller}>
            <View style={styles.tipContainer}>
                <Image source={waterdrop} style={styles.tipImage}/>
            </View>

             <Text style={styles.tipText}>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quasi amet velit vel harum nulla aut ea quam nam! Architecto molestias debitis aliquam. Nostrum sunt sit ipsam blanditiis ad explicabo.
            </Text>

            <Text style={styles.alertLabel}>
                 Escolha o melhor horário para ser lembrado
            </Text>

            <ButtonMoreUsed title="Cadastrar planta" onPress={() => {}}/>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'grey'
    },

    
})