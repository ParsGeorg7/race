import { createSlice } from '@reduxjs/toolkit'
import { IDriver } from '@/screens/interfaces'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = [] as IDriver[]

const driversSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {
    setDrivers(_, action: PayloadAction<typeof initialState>) {
      return action.payload
    }
  }
})

export const { setDrivers } = driversSlice.actions
export default driversSlice.reducer