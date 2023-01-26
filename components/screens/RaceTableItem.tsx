import React from 'react'
import { ScrollView, View, Text } from 'react-native'

import { IRace, IRaceResult } from '../screens/interfaces'
import { styles } from '../styles'

import { LOCALE } from './locale'

export interface IProps {
    race: IRace
}

export default function RaceTableItem({ race }: IProps) {
    const { Circuit, Results, date, raceName, round, season, url } = race
    const { circuitId, url: circuitUrl, circuitName, Location } = race?.Circuit && Circuit
    const { country, lat, locality, long } = Location

     const getResults = (res: IRaceResult) => {
        const { Constructor, Driver, grid, laps, number, points, position, positionText, status } = res
        const { constructorId, name, nationality: constructorNationality, url: ConstructorUrl } = Constructor
        const { dateOfBirth, driverId, familyName, givenName, nationality, url } = Driver

        return (
            <>
                <View>
                    <Text>{LOCALE.raceTableItemResultsStatus + status}</Text>
                    <Text>{LOCALE.raceTableItemResultsPositionText + positionText}</Text>
                    <Text>{LOCALE.raceTableItemResultsPosition + position}</Text>
                    <Text>{LOCALE.raceTableItemResultsPoints + points}</Text>
                    <Text>{LOCALE.raceTableItemResultsNumber + number}</Text>
                    <Text>{LOCALE.raceTableItemResultsLaps + laps}</Text>
                    <Text>{LOCALE.raceTableItemResultsGrid + grid}</Text>
                </View>

                <Text style={styles.colsHeader}>{LOCALE.raceTableItemResultsConstructorTitle}</Text>

                <View>
                    <Text>{LOCALE.raceTableItemResultsConstructorUrl + ConstructorUrl}</Text>
                    <Text>{LOCALE.raceTableItemResultsConstructorNationality + constructorNationality}</Text>
                    <Text>{LOCALE.raceTableItemResultsConstructorName + name}</Text>
                    <Text>{LOCALE.raceTableItemResultsConstructorId + constructorId}</Text>
                </View>

                <Text style={styles.colsHeader}>{LOCALE.raceTableItemResultsDriverTitle}</Text>

                <View>
                    <Text>{LOCALE.raceTableItemResultsDriverUrl + url}</Text>
                    <Text>{LOCALE.raceTableItemResultsDriverNationality + nationality}</Text>
                    <Text>{LOCALE.raceTableItemResultsDriverName + givenName}</Text>
                    <Text>{LOCALE.raceTableItemResultsDriverLastName + familyName}</Text>
                    <Text>{LOCALE.raceTableItemResultsDriverId + driverId}</Text>
                    <Text>{LOCALE.raceTableItemResultsDriverDob + dateOfBirth}</Text>
                </View>
            </>
        )
     }

    return (
        <ScrollView>
            <Text>{LOCALE.raceTableItemDate + date}</Text>
            <Text>{LOCALE.raceTableItemRaceName + raceName}</Text>
            <Text>{LOCALE.raceTableItemRound + round}</Text>
            <Text>{LOCALE.raceTableItemSeason + season}</Text>
            <Text>{LOCALE.raceTableItemUrl + url}</Text>

            <Text style={styles.colsHeader}>{LOCALE.raceTableItemCircuitTitle}</Text>

            <Text>{LOCALE.raceTableItemCircuitId + circuitId}</Text>
            <Text>{LOCALE.raceTableItemCircuitUrl + circuitUrl}</Text>
            <Text>{LOCALE.raceTableItemCircuitName + circuitName}</Text>

            <Text style={styles.colsHeader}>{LOCALE.raceTableItemLocationTitle}</Text>

            <Text>{LOCALE.raceTableItemLocationCountry + country}</Text>
            <Text>{LOCALE.raceTableItemLocationRegion + locality}</Text>
            <Text>{LOCALE.raceTableItemLocationLat + lat}</Text>
            <Text>{LOCALE.raceTableItemLocationLong + long}</Text>

            <Text style={styles.colsHeader}>{LOCALE.raceTableItemResultsTitle}</Text>

            {Results.forEach((res: IRaceResult, i: number) => <View key={i}>{getResults(res)}</View>)}
        </ScrollView>
    )
}
