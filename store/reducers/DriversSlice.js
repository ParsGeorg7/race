// reducers: {
    //     countriesFetching(state) {
    //         state.isLoading = true
    //     },
    //     countriesFetchingSuccess(state, action) {
    //         state.isLoading = false
    //         state.error = ''
    //         state.countries = action.payload
    //     },
    //     countriesFetchingError(state, action) {
    //         state.isLoading = false
    //         state.error = action.payload
    //     }
    // },

    import { createSlice } from "@reduxjs/toolkit";
    import { fetchDrivers } from "./ActionCreators";
    
    const initialState = {
        drivers: [],
        isLoading: false,
        error: '',
    }
    
    export const driverSlice = createSlice({
        name: 'driver',
        initialState,
        reducers: {},
        extraReducers: {
            [fetchDrivers.fulfilled.type]: (state, action) => {
                state.isLoading = false;
                state.error = ''
                state.drivers = action.payload;
            },
            [fetchDrivers.pending.type]: (state) => {
                state.isLoading = true;
            },
            [fetchDrivers.rejected.type]: (state,  action) => {
                state.isLoading = false;
                state.error = action.payload
            },
        }
    })
    
    export default driverSlice.reducer;