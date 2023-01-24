import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import { driverAPI } from '../../services/postService'

import { LOCALE } from './locale'
import RaceTableItem from './RaceTableItem'
import { styles } from './styles'

export function RaceTable({ navigation: { goBack }, route: { params } }: any) {
    const { data } = driverAPI.useFetchDriverRacesQuery(params.driverId)
    const [_, setRaces] = useState<any>()

    useEffect(() => {
        setRaces(data?.MRData.RaceTable.Races)
    }, [])

    // races--> [
    //     {"Circuit": {"Location": [Object], "circuitId": "essarts", "circuitName": "Rouen-Les-Essarts", "url": "http://en.wikipedia.org/wiki/Rouen-Les-Essarts"}, 
    //     "Results": [[Object]], 
    //     "date": "1962-07-08", 
    //     "raceName": "French Grand Prix", 
    //     "round": "4", 
    //     "season": "1962", 
    //     "url": "http://en.wikipedia.org/wiki/1962_French_Grand_Prix"}]

    const renderItem = (item: any) => <RaceTableItem race={item} />

    return (
      <View>
        <Button onPress={() => goBack()} title={LOCALE.omMainLink} />
        <Text style={styles.tableHeader}>Таблица заезда:</Text>
        <FlatList data={data?.MRData.RaceTable.Races} renderItem={renderItem} keyExtractor={(item) => item.url} />
      </View>
    );
  }