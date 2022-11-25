/**
 * @Author: Aceh
 * @Date:   2022-11-25 07:28:21
 * @Last Modified by:   aceh
 * @Last Modified time: 2022-11-25 20:01:50
 */
import React from 'react'
import { View } from 'react-native'

import AsyncModal from 'app/components/AsyncModal'
import Button from 'app/components/Button'
import { useModal } from 'app/components/AsyncModal/hooks'

const AsyncModalScreen: React.FC<any> = () => {
  const modal = useModal()

  return (
    <View>
      <AsyncModal modal={modal} title="我是标题" describe="我是内容" />
      <Button
        onPress={async () => {
          await modal.show()
          console.log('success')
        }}
      >
        Show Modal
      </Button>
    </View>
  )
}

AsyncModalScreen.displayName = 'AsyncModalScreen'

export default AsyncModalScreen
