import Dropdown from 'app/components/Dropdown'
import React from 'react'
import { View } from 'react-native'

const DATA = [
  {
    value: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    label: 'First Item',
  },
  {
    value: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    label: 'Second Item',
  },
  {
    value: '58694a0f-3da1-471f-bd96-145571e29d72',
    label: 'Third Item',
  },
  {
    value: '58694a0f-3da1-471f-bd96-145571e29d721',
    label: 'Third Item1',
  },
  {
    value: '58694a0f-3da1-471f-bd96-145571e29d722',
    label: 'Third Item2',
  },
  {
    value: '58694a0f-3da1-471f-bd96-145571e29d723',
    label: 'Third Item3',
  },
]

const DropdownScreen: React.FC<any> = () => {
  return (
    <View style={{ flex: 1 }}>
      <Dropdown data={DATA} />
    </View>
  )
}

DropdownScreen.displayName = 'DropdownScreen'

export default DropdownScreen
