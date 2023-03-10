import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { driverAPI } from '../services/postService'
import driversReducer from './reducers/DriversSlice'
//import driverRacesReducer from './reducers/DriverRacesSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const rootReducer = combineReducers({
  drivers: driversReducer,
  [driverAPI.reducerPath]: driverAPI.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
      }).concat(driverAPI.middleware)
  })
}

const store = setupStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)
