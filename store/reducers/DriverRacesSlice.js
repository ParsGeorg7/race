
    import { createSlice } from "@reduxjs/toolkit";
    import { fetchDriverRaces } from "./ActionCreators";
    
    const initialState = {
        races: [],
        isLoading: false,
        error: '',
    }
    
    export const raceSlice = createSlice({
        name: 'race',
        initialState,
        reducers: {},
        extraReducers: {
            [fetchDriverRaces.fulfilled.type]: (state, action) => {
                state.isLoading = false;
                state.error = ''
                state.races = action.payload;
            },
            [fetchDriverRaces.pending.type]: (state) => {
                state.isLoading = true;
            },
            [fetchDriverRaces.rejected.type]: (state,  action) => {
                state.isLoading = false;
                state.error = action.payload
            },
        }
    })
    
    export default raceSlice.reducer;