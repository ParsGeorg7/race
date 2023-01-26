import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Button } from 'react-native'

import { driverAPI } from '../../services/postService'
import { Preloader } from '../ui/Preloader'
import { styles } from '../styles'

import { IRace } from './interfaces'
import { LOCALE } from './locale'
import RaceTableItem from './RaceTableItem'

export function RaceTable({ navigation: { goBack }, route: { params } }: any) {
    const { data, isLoading, isError } = driverAPI.useFetchDriverRacesQuery(params.driverId)
    const [_, setRaces] = useState<IRace[]>([])

    useEffect(() => {
        setRaces(data?.MRData.RaceTable.Races)
    }, [])

    const renderItem = <T extends {item: IRace}>(elem: T) => <RaceTableItem race={elem.item} />

    if (isLoading) return <Preloader />
    if (isError) return <Text style={styles.flex}>{LOCALE.error}</Text> 

    return (
      <View>
        <Button onPress={() => goBack()} title={LOCALE.omMainLink} />
        <Text style={styles.tableHeader}>{LOCALE.raceTableHeader}</Text>
        <FlatList data={data?.MRData.RaceTable.Races} renderItem={renderItem} keyExtractor={(item) => item.url} />
      </View>
    );
  }