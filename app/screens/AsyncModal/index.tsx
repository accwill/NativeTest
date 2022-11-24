import React from 'react'
import { View } from 'react-native'

import AsyncModal from 'app/components/AsyncModal'

const AsyncModalScreen: React.FC<any> = () => {
  return (
    <View>
      <AsyncModal />
    </View>
  )
}

AsyncModalScreen.displayName = 'AsyncModalScreen'

export default AsyncModalScreen
