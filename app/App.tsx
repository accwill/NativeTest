// In App.js in a new project

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { routerConfig } from './router.config'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import ErrorBoundary from './components/ErrorBoundary'
import { LogBox } from 'react-native'

const Stack = createNativeStackNavigator()
LogBox.ignoreLogs(['AsyncModal Cancel'])

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
