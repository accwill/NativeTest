/**
 * 使用示例：
 * ```code
 *  try {
 *    await modal.show()
 *    // then  onOk
 *  } catch(e) {
 *    // then onCancel
 *  }
 *
 * ```
 * @Author: Aceh
 * @Date:   2022-11-25 07:45:11
 * @Last Modified by:   aceh
 * @Last Modified time: 2022-11-25 20:56:56
 */
import { linkColor } from 'app/constants'
import React from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'

import Button, { i_ButtonProps } from '../Button'
import Modal, { i_ModalProps } from './components/Modal'
import { i_ModalIns, useModal } from './hooks'

export type i_AsyncModalProps = {
  /** 点击取消时是否关闭, 默认为true */
  cancelClose?: boolean
  /** 点击确定时是否关闭，默认值为true */
  okClose?: boolean

  modal?: i_ModalIns

  title?: string

  describe?: string

  okText?: string

  cancelText?: string
} & i_ModalProps

const AsyncModal: React.FC<i_AsyncModalProps> = props => {
  const {
    okText = '确定',
    cancelText = '取消',
    title,
    describe,
    modal,
    cancelClose = true,
    okClose = true,
    ...rest
  } = props

  const md = useModal(modal)

  const scale = React.useRef<Animated.Value>(new Animated.Value(0)).current

  const handleCancel: i_ButtonProps['onPress'] = () => {
    if (cancelClose) {
      md.hide()
    }
    md.promise.reject('AsyncModal Cancel')
  }

  const handleOk: i_ButtonProps['onPress'] = () => {
    if (okClose) {
      md.hide()
    }
    md.promise.resolve()
  }

  React.useEffect(() => {
    return () => {
      console.log('unmount')
    }
  }, [])

  const handleVisibleChange = (visible: boolean) => {
    console.log('visible', visible)
    if (visible) {
      Animated.spring(scale, {
        toValue: 1,
        speed: 66,
        useNativeDriver: true,
      }).start()
    } else {
      scale.setValue(0)
    }
  }

  return (
    <Modal {...rest} modal={md} onVisibleChange={handleVisibleChange}>
      <View style={styles.container}>
        <Animated.View style={[styles.content, { transform: [{ scale }] }]}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.describe}>{describe}</Text>

          <View style={styles.actionContainer}>
            <Button
              style={[styles.action, styles.actionLeft]}
              titleStyle={styles.actionText}
              onPress={handleCancel}
            >
              {cancelText}
            </Button>
            <Button
              style={[styles.action]}
              titleStyle={styles.actionText}
              onPress={handleOk}
            >
              {okText}
            </Button>
          </View>
        </Animated.View>
      </View>
    </Modal>
  )
}

AsyncModal.displayName = 'AsyncModal'

export default AsyncModal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.06)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '15%',
    paddingRight: '15%',
    flexDirection: 'row',
  },
  content: {
    borderRadius: 10,
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: 15,
    fontWeight: 'bold',
  },
  describe: {
    marginTop: 10,
  },
  actionContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,.05)',
  },
  actionLeft: {
    borderRightWidth: 1,
    borderRightColor: 'rgba(0,0,0,.05)',
  },
  actionText: {
    color: linkColor,
  },
  action: {
    height: 41,
    paddingTop: 12,
    paddingBottom: 12,
    alignItems: 'center',
    flex: 1,
  },
})
