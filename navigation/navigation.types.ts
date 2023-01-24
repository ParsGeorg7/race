import { ComponentType } from 'react'

export type TypeRootStackParamsList = {
    Drivers: undefined,
    Driver: undefined,
    RaceTable: undefined,
    RaceTableItem: undefined
}

export interface IRoute {
    name: keyof TypeRootStackParamsList,
    component: ComponentType
}