import Dropdown from 'app/components/Dropdown'
import React from 'react'
import { View } from 'react-native'

const DropdownScreen: React.FC<any> = () => {
  return (
    <View style={{ flex: 1 }}>
      <Dropdown />
    </View>
  )
}

DropdownScreen.displayName = 'DropdownScreen'

export default DropdownScreen
