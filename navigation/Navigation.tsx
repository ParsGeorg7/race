import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import  { FC, useEffect, useState } from 'react'
import { PrivateNavigation } from './PrivateNavigation'

export const Navigation: FC = () => {
    const [_, setCurrRoute] = useState<string | undefined>(undefined)

    const navRef = useNavigationContainerRef()

    useEffect(() => {
        const currentRouteName = navRef.getCurrentRoute()?.name
        setCurrRoute(currentRouteName)

        const listener = navRef.addListener('state', () => setCurrRoute(currentRouteName))

        return () => {
            navRef.removeListener('state', listener)
        }
    }, [])

    return (
        <>
            <NavigationContainer ref={navRef}>
                <PrivateNavigation />
            </NavigationContainer>
        </>
    )
}