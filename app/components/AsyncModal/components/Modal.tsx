/**
 * @Author: Aceh
 * @Date:   2022-11-25 08:19:33
 * @Last Modified by:   aceh
 * @Last Modified time: 2022-11-25 20:49:12
 */
import React from 'react'
import { Modal as MD, ModalProps } from 'react-native'

import { i_ModalIns } from '../hooks'

export type i_ModalProps = {
  /** 默认是否显示， 默认值为false */
  defaultVisible?: boolean
  modal?: i_ModalIns
  onVisibleChange?: (visible: boolean) => void
} & ModalProps

const Modal: React.FC<i_ModalProps> = props => {
  const { defaultVisible = false, children, onVisibleChange, ...rest } = props

  const promiseRef = React.useRef<{ resolve: any; reject: any }>({
    resolve() {},
    reject() {},
  }).current

  const [visible, oldSetVisible] = React.useState<boolean>(
    defaultVisible as boolean,
  )

  const setVisible = (next: boolean | Function) => {
    oldSetVisible(prev => {
      if (typeof next === 'boolean') {
        onVisibleChange?.(next)
        return next
      }
      const result = next(prev)
      onVisibleChange?.(result)
      return result
    })
  }

  const show = () => {
    setVisible(true)
    return new Promise<void>((resolve, reject) => {
      promiseRef.resolve = resolve
      promiseRef.reject = reject
    })
  }

  const hide = () => {
    setVisible(false)
  }

  if (props.modal) {
    props.modal.show = show
    props.modal.hide = hide
    props.modal.setVisible = setVisible
    props.modal.promise = promiseRef
  }

  return (
    <MD
      animationType="fade"
      {...rest}
      onRequestClose={() => {
        setVisible(false)
      }}
      visible={visible}
    >
      {children}
    </MD>
  )
}

Modal.displayName = 'Modal'

export default Modal
