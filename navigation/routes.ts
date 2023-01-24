import { Drivers } from "../components/screens/Drivers";
import { Driver } from "../components/screens/Driver";
import { RaceTable } from "../components/screens/RaceTable";
import RaceTableItem  from "../components/screens/RaceTableItem";
import { IRoute } from "./navigation.types";

export const routes: IRoute[] | any = [
    {
        name: 'Drivers',
        component: Drivers
    },
    {
        name: 'Driver',
        component: Driver
    },
    {
        name: 'RaceTable',
        component: RaceTable
    },
    {
        name: 'RaceTableItem',
        component: RaceTableItem
    }
]