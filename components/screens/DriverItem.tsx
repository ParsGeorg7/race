import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { ROUTE } from '../../constants'

import { IDriver } from './interfaces'
import { styles } from '../styles'
import { LOCALE } from './locale'
import { MainNavigationProp } from './Drivers'

interface IProps {
  item: IDriver
}

export function DriverItem({ item }: IProps) {
  const navigation = useNavigation<MainNavigationProp>()

    return (
        <TouchableOpacity style={styles.listWrapper}>
          <Text style={styles.row} onPress={() => navigation?.navigate(ROUTE.Driver, item)}>{item.driverId}</Text>
          <Text style={styles.row} onPress={() => navigation?.navigate(ROUTE.RaceTable, item)}>
            {LOCALE.driverInfoColText + item.driverId}
          </Text>
        </TouchableOpacity>
    )
}

