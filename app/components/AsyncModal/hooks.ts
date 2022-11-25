import React from 'react'

type i_ShowParams = {
  /** 标题 */
  title?: string

  /** 描述 */
  describe?: string

  /** 确定按钮文本 */
  okText?: string

  /** 取消按钮文本 */
  cancelText?: string
}

export type i_ModalIns = {
  /** resolve时表示OK， reject表示cancel */
  show(data?: i_ShowParams): Promise<void>
  hide(): void
  promise: {
    reject: any
    resolve: any
  }
  setVisible: (
    nextVisible: boolean | ((prevVisible: boolean) => boolean),
  ) => void
}

export const useModal = (modal?: i_ModalIns) => {
  const ref = React.useRef<i_ModalIns>({
    hide() {},
    show() {
      return Promise.resolve()
    },
    promise: {
      reject() {},
      resolve() {},
    },
    setVisible() {},
  }).current

  return modal || ref
}
