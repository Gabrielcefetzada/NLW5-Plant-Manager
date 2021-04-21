import React from 'react';
import {Text, View, StyleSheet, FlatList } from 'react-native'

import { Header } from '../components/Header'
import { EnviromentBtn } from '../components/EnviromentBtn'

export function PlantSelect(){
    return (
        <View style={styles.container}> 
            <Header />
            <Text style={styles.title}>Em qual ambiente {'\n'}você quer colocar sua planta?</Text>
            <View>
                <FlatList                    // esse FlatList é equivalente ao map do JavaScript puro 
                    data={[1, 2, 3, 4, 5]}
                    renderItem={({item}) => (
                        <EnviromentBtn title="Cozinha" active/>
                    )}

                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.environmentList}
                />
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

    }
})