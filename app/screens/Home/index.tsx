import React from 'react'
import { View, Button } from 'react-native'
import { routerConfig } from '../../router.config'
import { i_RouterParams } from '../../type'

const Home: React.FC<i_RouterParams> = ({ navigation }) => {
  return (
    <View>
      {routerConfig.map(item => (
        <Button
          key={item.name}
          testID={item.name}
          onPress={() => navigation.navigate(item.name)}
          title={(item.options as any).title || item.name}
        />
      ))}
    </View>
  )
}

Home.displayName = 'Home'

export default Home
