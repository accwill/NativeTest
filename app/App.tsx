// In App.js in a new project

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { routerConfig } from './router.config'
import ErrorBoundary from './components/ErrorBoundary'
import { LogBox } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Stack = createNativeStackNavigator()
LogBox.ignoreLogs(['ModalConfirm Cancel'])

function App() {
  return (
    <SafeAreaProvider>
      <ErrorBoundary>
        <NavigationContainer>
          <Stack.Navigator>
            {routerConfig.map(item => (
              <Stack.Screen {...item} key={item.name} />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </ErrorBoundary>
    </SafeAreaProvider>
  )
}

export default App
