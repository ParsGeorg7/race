import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TypeRootStackParamsList, IRoute } from './navigation.types'
import { routes } from './routes'

const Stack = createNativeStackNavigator<TypeRootStackParamsList>()

export const PrivateNavigation: FC = () => {
    return (
        <Stack.Navigator initialRouteName='Drivers' screenOptions={{ headerShown: false}}>
            {routes?.map((route: IRoute) => (
                <Stack.Screen key={route.name} {...route} />
            ))}
         </Stack.Navigator>
    )
}