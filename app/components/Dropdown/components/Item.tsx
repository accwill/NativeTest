/**
 * @Author: Aceh
 * @Date:   2022-11-27 10:42:52
 * @Last Modified by:   aceh
 * @Last Modified time: 2022-11-27 10:47:55
 */
import React from 'react'
import { View, Text } from 'react-native'

const Item: React.FC<any> = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

Item.displayName = 'Item'

export default Item
