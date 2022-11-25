import React from 'react'

export type i_ModalIns = {
  /** resolve时表示OK， reject表示cancel */
  show(): Promise<void>
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
