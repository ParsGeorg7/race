import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native'

import { ROUTE } from '../../constants'

import { IDriver } from './interfaces'
import { styles } from './styles'
import { LOCALE } from './locale'

interface IProps {
  item: IDriver
  navigation: NavigationProp<ParamListBase> | any
}

export function DriverItem({ item, navigation }: IProps) {
    return (
        <TouchableOpacity style={styles.listWrapper}>
          <Text style={styles.row} onPress={() => navigation?.navigate(ROUTE.Driver, item)}>{item.driverId}</Text>
          <Text style={styles.row} onPress={() => navigation?.navigate(ROUTE.RaceTable, item)}>
            {LOCALE.driverInfoColText + item.driverId}
          </Text>
        </TouchableOpacity>
    )
}

