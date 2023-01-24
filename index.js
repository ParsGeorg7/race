import { AppRegistry, Text } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { LOCALE } from './components/screens/locale'

import { setupStore, persistor } from './store/store'
import App from './App'
import { name as appName } from './app.json'

const store = setupStore()

const Root = () => (
    <Provider store={store}>
      <PersistGate loading={<Text>{LOCALE.loading}</Text>} persistor={persistor}></PersistGate>
      <App />
    </Provider>
  )

AppRegistry.registerComponent(appName, () => Root)
