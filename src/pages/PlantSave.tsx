import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View, Image, Text, ScrollView, Platform } from 'react-native'
import { SvgFromUri } from 'react-native-svg'

import waterdrop from '../assets/waterdrop.png'
import { ButtonMoreUsed } from '../components/ButtonMoreUsed'
import { useRoute } from '@react-navigation/core'
import DateTimePicker, { Event} from '@react-native-community/datetimepicker'
import { PlantProps} from '../libs/storage'
import { useNavigation } from '@react-navigation/native'

interface Params {
    plant: PlantProps
}


export function PlantSave(){

    const route = useRoute()
    const { plant } = route.params as Params;
    const [selectedDateTime, setSelectedDateTime] = useState(new Date())
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios')

    const navigation = useNavigation()

    const back = () => {
        navigation.navigate('PlantSelect')
    }

    return (
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.plantInfo}>
            <SvgFromUri 
                uri={plant.photo}
                width={150}
                height={150}
            />

            <Text style={styles.plantName}>
                {plant.name}
            </Text>

            <Text style={styles.plantAbout}>
                {plant.about}
            </Text>
        </View>

        <View style={styles.controller}>
            <View style={styles.tipContainer}>
                <Image source={waterdrop} style={styles.tipImage}/>
                <Text style={styles.tipText}>
                 {plant.water_tips}
            </Text>
            </View>

            <ButtonMoreUsed title="Voltar" onPress={back}/>
        </View>
    </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 100
    },

    plantInfo: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },

    controller: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 30,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },

    plantName: {
        fontSize: 24,
        color: 'grey',
        marginTop: 15,
        textAlign: 'center',
        fontWeight: 'bold'

    },

    plantAbout: { 
        fontSize: 17,
        color: 'grey',
        marginTop: 15,
        textAlign: 'center',
        lineHeight: 25
    },

    tipContainer: {
        flexDirection: 'row',
        backgroundColor: 'azure',
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        borderRadius: 15,
        position: 'relative',
        bottom: 40
    },

    tipImage: {
        width: 56,
        height: 56
    },

    tipText: {
        flex: 1,
        marginLeft: 20,
        fontWeight: 'bold',
        color: '#078cb5'

    },
    
})