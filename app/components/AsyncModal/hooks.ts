import React from 'react'
import { i_AsyncModalIns } from './index'

export const useModal = () => {
  const ref = React.useRef<i_AsyncModalIns>({
    hide() {},
    show() {},
    setVisible() {},
  }).current
  return [ref]
}
