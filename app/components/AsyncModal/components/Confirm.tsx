/**
 * @Author: Aceh
 * @Date:   2022-11-25 21:01:18
 * @Last Modified by:   aceh
 * @Last Modified time: 2022-11-27 09:02:52
 */
import { linkColor } from 'app/constants'
import React from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'

import Button, { i_ButtonProps } from 'app/components/Button'
import Modal, { i_ModalProps } from './Modal'
import { i_ModalIns, useModal } from '../hooks'

export type i_ModalConfirmProps = {
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

const ModalConfirm: React.FC<i_ModalConfirmProps> = props => {
  const {
    okText = '确定',
    cancelText = '取消',
    title,
    describe,
    modal,
    cancelClose = true,
    okClose = true,
    onVisibleChange,
    ...rest
  } = props

  const md = useModal(modal)

  const scale = React.useRef<Animated.Value>(new Animated.Value(0)).current

  const handleCancel: i_ButtonProps['onPress'] = () => {
    if (cancelClose) {
      md.hide()
    }
    md.promise.reject('ModalConfirm Cancel')
  }

  const handleOk: i_ButtonProps['onPress'] = () => {
    if (okClose) {
      md.hide()
    }
    md.promise.resolve()
  }

  /**
   * 变更显示集合隐藏时，执行动画
   */
  const handleVisibleChange = (visible: boolean) => {
    onVisibleChange?.(visible)
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

  const [state, setState] = React.useState<i_ModalConfirmProps>({})
  const handleShow = (data: i_ModalConfirmProps) => {
    setState(data || {})
  }

  return (
    <Modal
      transparent
      {...rest}
      modal={md}
      onVisibleChange={handleVisibleChange}
      showMiddle={handleShow}
    >
      <View style={styles.container}>
        <Animated.View style={[styles.content, { transform: [{ scale }] }]}>
          <Text style={styles.title}>{state.title || title}</Text>
          <Text style={styles.describe}>{state.describe || describe}</Text>

          <View style={styles.actionContainer}>
            <Button
              style={[styles.action, styles.actionLeft]}
              titleStyle={styles.actionText}
              onPress={handleCancel}
            >
              {state.cancelText || cancelText}
            </Button>
            <Button
              style={[styles.action]}
              titleStyle={styles.actionText}
              onPress={handleOk}
            >
              {state.okText || okText}
            </Button>
          </View>
        </Animated.View>
      </View>
    </Modal>
  )
}

ModalConfirm.displayName = 'ModalConfirm'

export default ModalConfirm

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
    fontSize: 18,
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
