import Toast from 'app/components/Toast'
import Button from 'app/components/Button'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useModal } from 'app/components/AsyncModal/hooks'

const ToastScreen: React.FC<any> = () => {
  const modal = useModal()

  const handleShow = () => {
    modal.show({ content: '心怀感恩，负重前行', duration: 2000 })
  }

  return (
    <View style={styles.container}>
      <Toast modal={modal} />
      <Button title="显示toast" onPress={handleShow} />
    </View>
  )
}

ToastScreen.displayName = 'ToastScreen'

export default ToastScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
