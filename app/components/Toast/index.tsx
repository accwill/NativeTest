import React from 'react'
import { Text, StyleSheet, Dimensions, Animated } from 'react-native'
import { Modal } from '../AsyncModal'
import { i_ModalIns, i_ToastShowParams, useModal } from '../AsyncModal/hooks'

const height = Dimensions.get('window').height

type i_ToastProps = {
  modal: i_ModalIns
}

const Toast: React.FC<i_ToastProps> = ({ modal: propsModal }) => {
  const modal = useModal(propsModal)
  const opacity = React.useRef<Animated.Value>(new Animated.Value(1)).current
  const [state, setState] = React.useState<string>('')

  const durationRef = React.useRef<any>()

  const handleShowAnimation = () => {
    Animated.timing(opacity, {
      toValue: 1,
      useNativeDriver: true,
      duration: 300,
    }).start(() => {
      Animated.timing(opacity, {
        toValue: 0,
        useNativeDriver: true,
        duration: 200,
        delay: durationRef.current,
      }).start(() => {
        modal.hide()
      })
    })
  }

  const handleChange = (visible: boolean) => {
    if (visible) {
      handleShowAnimation()
      return
    }
    // opacity.setValue(0)
    // TODO: hide
  }

  const handleShow = (data: i_ToastShowParams) => {
    durationRef.current = data.duration
    setState(data.content as string)
  }

  return (
    <Modal
      modal={modal}
      transparent={true}
      onVisibleChange={handleChange}
      showMiddle={handleShow}
    >
      <Animated.View style={[styles.container, { opacity }]}>
        <Text style={styles.content}>{state}</Text>
      </Animated.View>
    </Modal>
  )
}

Toast.displayName = 'Toast'

export default Toast

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,.7)',
    position: 'absolute',
    height: 35,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    paddingLeft: 20,
    paddingRight: 20,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.3,
    shadowOffset: { width: 5, height: 5 },
    top: height * 0.4,
  },
  content: {
    color: 'white',
  },
})
