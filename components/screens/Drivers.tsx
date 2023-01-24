import React, { useState, useEffect, ReactNode } from 'react'
import { TouchableOpacity, View, Text, FlatList, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { driverAPI } from '../../services/postService'
import { POSTS_LIMIT, OFFSET, ZERO } from '../../constants'

import { DriverItem } from './DriverItem'
import { styles } from './styles'
import { IDriver } from './interfaces'
import { LOCALE } from './locale'

export function Drivers() {
    const [ driverData, setDriverData ] = useState<IDriver[]>([]) 
    const [query, setQuery] = useState({ limit: POSTS_LIMIT, offset: ZERO });
    
    const navigation = useNavigation() 
    const drivers = driverAPI.useFetchDriversQuery(query)

    const driversResponseData = drivers.data?.MRData

    //!drivers.isFetching && console.log(driversResponseData?.DriverTable.Drivers.length, driverData.length)

    useEffect(() => {
        if(drivers.isFetching) return;
        setDriverData((prevState => [...prevState, ...(driversResponseData?.DriverTable.Drivers || [])]))
    }, [drivers.isFetching, query.offset])

    useEffect(() => {
      window.document?.addEventListener('scroll', scrollHandler)
      return function() {
        window.document?.removeEventListener('scroll', scrollHandler)
      }
    }, [driverData.length, drivers.isFetching, driversResponseData?.total])

    const scrollHandler = (e: any) => {
      if(drivers.isFetching) return
      if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + Dimensions.get('window').height) 
      < 100 && driverData?.length !== driversResponseData?.total) {
        setQuery((prevState) => ({
          limit: POSTS_LIMIT,
          offset: prevState.offset + OFFSET
        }))
      }
    }

    const renderItem: ReactNode = (driver: { item: IDriver }) => <DriverItem 
                                                                    item={driver.item} 
                                                                    navigation={navigation} 
                                                                  />
    
    if(driversResponseData?.isLoading) return <Text style={styles.flex}>{LOCALE.loading}</Text>
    if(driversResponseData?.isError) return <Text>{LOCALE.error}</Text>

    return (
      <>
        <Text style={styles.tableHeader}>{LOCALE.driversTableHeader}</Text>
        <View style={styles.listWrapper}>
            <Text style={styles.colsHeader}>{LOCALE.nameCol}</Text>
            <Text style={styles.colsHeader}>{LOCALE.driverInfoCol}</Text>
        </View>
        <TouchableOpacity>
            <FlatList 
              data={driversResponseData?.DriverTable.Drivers || []} 
              renderItem={renderItem} 
              keyExtractor={(item) => item.driverId}
            />
        </TouchableOpacity>
      </>
    )
}