import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchDrivers = createAsyncThunk(
    'driver/fetchAll',
    async (_, thunkAPI) => {
        try {
            //console.log('try')
            const response = await axios.get(`http://ergast.com/api/f1/drivers.json`)
            //console.log('after_return')
            return response.data;
        } catch (e) {
            //console.log('catch')
            return thunkAPI.rejectWithValue("Не удалось загрузить гонщиков")
        }
    }
)

export const fetchDriverRaces = createAsyncThunk(
    'driver/fetchRaces',
    async (_, thunkAPI) => {
        try {
            const driverId = 'alonso'
            const response = await axios.get(`http://ergast.com/api/f1/drivers/${driverId}/results.json`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить гонщиков")
        }
    }
)