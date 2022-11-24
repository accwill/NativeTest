// In App.js in a new project

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { routerConfig } from './router.config'

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {routerConfig.map(item => (
          <Stack.Screen {...item} key={item.name} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
