import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native'

import { styles } from './styles'
import { IDriver } from './interfaces'

interface IProps {
  navigation: NavigationProp<ParamListBase>
  route: {
    params: IDriver
  }
}

export function Driver ({ navigation, route }: IProps) {
   const { driverId, url, givenName, familyName, dateOfBirth, nationality } = route.params
 
    return (
      <View>
        <Button onPress={() => navigation.goBack()} title="На главную" />
        <Text style={styles.tableHeader}>{'Данные гонщика: ' + driverId}</Text>
        <Text>{'URL: ' + url}</Text>
        <Text>{'Имя: ' + givenName}</Text>
        <Text>{'Фамилия: ' + familyName}</Text>
        <Text>{'Дата рождения: ' + dateOfBirth}</Text>
        <Text>{'Национальность: ' + nationality}</Text>
      </View>
    )
  }