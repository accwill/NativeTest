import Toast from 'app/components/Toast'
import Button from 'app/components/Button'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useModal } from 'app/components/AsyncModal/hooks'
import { ToastDuration } from 'app/components/Toast/constants'

const ToastScreen: React.FC<any> = () => {
  const modal = useModal()

  const handleShow = () => {
    modal.show({ content: '心怀感恩，负重前行', duration: ToastDuration.LONG })
  }

  return (
    <View style={styles.container}>
      <Toast modal={modal} />
      <Button title="显示toast" onPress={handleShow} testID="showToast" />
    </View>
  )
}

ToastScreen.displayName = 'ToastScreen'

export default ToastScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
