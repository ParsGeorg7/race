import { IDiversData } from "@/screens/interfaces"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

import { 
    DRIVER_API_REDUCER_PATH, 
    BASE_URL, TAG_TYPE_DRIVER, 
    TAG_TYPE_DRIVER_RACE, 
    DRIVERS_FILE, 
    POSTS_LIMIT,
    DRIVERS,
    RESULTS_FILE 
} from '../constants'

interface FetchDriversParams {
    limit: number,
    offset: number
}

export const driverAPI = createApi({
    reducerPath: DRIVER_API_REDUCER_PATH,
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: [TAG_TYPE_DRIVER, TAG_TYPE_DRIVER_RACE],
    endpoints: (build) => ({
        fetchDrivers: build.query<IDiversData, FetchDriversParams>({
            query: params => {
                return ({
                    url: DRIVERS_FILE,
                    params
                })
            },
            providesTags: (_) => [TAG_TYPE_DRIVER]
        }),
        fetchDriverRaces: build.query({
            query: (driverId, limit = POSTS_LIMIT) => ({
                url: `${DRIVERS}/${driverId}/${RESULTS_FILE}`,
                params: { limit }
            }),
            providesTags: (_) => [TAG_TYPE_DRIVER_RACE]
        })
    })
})