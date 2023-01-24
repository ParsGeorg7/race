import React from 'react'
import { View, Text } from 'react-native'

export default function RaceTableItem({ race: { item } }: any) {

    return (
        <View>
            <Text>{'Дата: ' + item.date}</Text>
            <Text>{'Наименование: ' + item.raceName}</Text>
            <Text>{'Круг: ' + item.round}</Text>
            <Text>{'Сезон: ' + item.season}</Text>
            <Text>{'URL: ' + item.url}</Text>
            <Text>====================</Text>
        </View>
    )
}
