import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, ScrollView, Image, Dimensions } from 'react-native'

import { Header } from '../components/Header'
import { EnviromentBtn } from '../components/EnviromentBtn'
import api from '../services/api'
import { PlantCardPrimary } from '../components/PlantCardPrimary';
import { useNavigation } from '@react-navigation/core'

interface EnviromentProps {
    key: string;
    title: string;
}

interface PlantProps {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
        times: number;
        repeat_every: string;
    }
    
}

export function PlantSelect(){

    const [enviroments, setEnviroments] = useState<EnviromentProps[]>([])
    const [plants, setPlants] = useState<PlantProps[]>([])
    const [plantsFiltered, setPlantsFiltered] = useState<PlantProps[]>([])
    const [environmentSelected, setEnviromentSelected] = useState('all')
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation()

    useEffect(() => {
        async function fetchEnviroment(){
            const { data } = await api.get('plants_environments')
            setEnviroments([{
                key: 'all',
                title: 'Todos'
            },
        ...data
            ])
        }

        fetchEnviroment()
    }, [])

    useEffect(() => {
        async function fetchPlants(){
            const { data } = await api.get('plants?_sort=name&_order=asc')
            setPlants(data)
            setPlantsFiltered(data)
            setLoading(false)
        }

        fetchPlants()
    }, [])

    const handleEnvironmentSelected = (environment: string) => {
       setEnviromentSelected(environment)

       if(environment === 'all')
       return setPlantsFiltered(plants)

       const filtered = plants.filter(plant => 
            plant.environments.includes(environment)
        )

        setPlantsFiltered(filtered)
    }

    const onNavigation = (plant: PlantProps) => {

         navigation.navigate('PlantSave', { plant })

    }

    return (
        <View style={styles.container}> 
            <Header />
            <Text style={styles.title}>Em qual ambiente {'\n'}você quer colocar sua planta?</Text>
            <View>
        
            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.containerEnviroments}>
                    {enviroments.map((elem, index) => {
                        return  <EnviromentBtn 
                                     active={elem.key === environmentSelected}
                                     onPress={() => handleEnvironmentSelected(elem.key)}
                                     key={index}
                                     title={elem.title} 
                                />
                    })}
            </ScrollView>
            </View>

            {loading && (
                 <Image style={styles.loading} source={{ uri: "https://www.valottery.com/images/spinner_green.gif"}}/>
            )}

            <View style={styles.plants}>
            <ScrollView style={styles.contentPlants}>
                    {plantsFiltered.map((elem, index) => {
                        return  <PlantCardPrimary key={index} data={elem} onPress={() => onNavigation(elem)}/>
                    })}
            </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    title: {
        fontSize: 17,
        color: 'grey',
        margin: 20
    },

    environmentList: {
        height: 45,
        justifyContent: 'center',
        margin: 20

    },

    containerEnviroments: {
        display: 'flex',
        flexDirection: 'row',
        overflow: 'scroll',
        padding: 20,
    },

    plants: {
        flex: 1, 
        display: 'flex',
        flexDirection: 'row',
    },

    contentPlants: {
        
    },

    loading: {
        marginLeft: Dimensions.get('window').width * 0.5 - 50,
        width: 90,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
    }
})