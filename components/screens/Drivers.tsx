import React, { useRef, useState, useEffect } from 'react'
import { TouchableOpacity, View, Text, FlatList } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import DropdownAlert from 'react-native-dropdownalert'

import { driverAPI } from '../../services/postService'
import { POSTS_LIMIT, OFFSET, ZERO, SCROLL_EVENT_THROTTLE, ROUTE } from '../../constants'
import { setDrivers } from '../../store/reducers/DriversSlice'
import { useAppSelector, useAppDispatch } from '../../hooks/useTypedSelectorAndDispatch'
import { Preloader } from '../ui/Preloader'
import { LOADER_POSITION } from '../../constants'
import { styles } from '../styles'

import { DriverItem } from './DriverItem'
import { IDriver } from './interfaces'
import { LOCALE } from './locale'

export type RootStackParamList = {
  [ROUTE.Driver]: object,
  [ROUTE.RaceTable]: object
}

export type MainNavigationProp<RouteName extends keyof RootStackParamList = ROUTE> 
  = StackNavigationProp<RootStackParamList, RouteName>

interface IQueryParams {
  limit: number
  offset: number 
}

export function Drivers() {
    const driverData = useAppSelector((state) => state.drivers)
    const dispatch = useAppDispatch()
    let dropDownAlertRef: any = useRef()
    const [query, setQuery] = useState<IQueryParams>({ limit: POSTS_LIMIT, offset: ZERO })
    const [isPreloaderShow, setIsPreloaderShow] = useState<boolean>(false)

    const drivers = driverAPI.useFetchDriversQuery(query)

    const driversResponseData = drivers.data?.MRData

    useEffect(() => {
      driversResponseData?.isLoading && dropDownAlertRef.alertWithType('info', 'Info', LOCALE.loading)
      driversResponseData?.isError && dropDownAlertRef.alertWithType('error', 'Error', LOCALE.error)

      return () => {
        dispatch(setDrivers([]))
      }
    }, [])

    useEffect(() => {
      setIsPreloaderShow(false)
    }, [driverData.length])

    useEffect(() => {
      if (drivers.isFetching) return
      dispatch(setDrivers([...driverData, ...(driversResponseData?.DriverTable.Drivers || [])]))
    }, [drivers.isFetching, driversResponseData])
    
    const loadMoreDrivers = (dRD: typeof driversResponseData | any = driversResponseData) => {
      if (dRD && query.offset + POSTS_LIMIT > +dRD.total) {
        console.warn(LOCALE.loadMoreDriversText)
        dropDownAlertRef?.alertWithType('info', 'Info', LOCALE.loadMoreDriversText)
        return
      }
      setIsPreloaderShow(true)
      setQuery({ offset: query.offset + OFFSET, limit: POSTS_LIMIT })
    } 

    const renderItem = <T extends {item: IDriver}>(driver: T) => <DriverItem key={driver.item.driverId} item={driver.item} />

    if (driversResponseData?.isLoading || driversResponseData?.isError) 
      return (
        <Text>
          <DropdownAlert ref={(ref) => { if (ref) dropDownAlertRef = ref }} />
        </Text>
      )
          
    return (
      <>
        <Text style={styles.tableHeader}>{LOCALE.driversTableHeader}</Text>
        <View style={styles.listWrapper}>
            <Text style={styles.colsHeader}>{LOCALE.nameCol}</Text>
            <Text style={styles.colsHeader}>{LOCALE.driverInfoCol}</Text>
        </View>
        <TouchableOpacity>
            <FlatList 
              data={driverData} 
              renderItem={renderItem} 
              keyExtractor={(item: IDriver) => item.driverId}
              onEndReached={loadMoreDrivers}
              onEndReachedThreshold={0.01}
              scrollEventThrottle={SCROLL_EVENT_THROTTLE}
              //ListFooterComponent={() => drivers.isFetching ? <Preloader /> : null } 
            />
            {isPreloaderShow ? <Preloader loaderPosition={LOADER_POSITION.Bottom} /> : <Text>{null}</Text>}
        </TouchableOpacity>
      </>
    )
}