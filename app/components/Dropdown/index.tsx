import React from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Pressable,
  useWindowDimensions,
  View,
} from 'react-native'
import { Modal } from '../AsyncModal'
import { useModal } from '../AsyncModal/hooks'
import Item from './components/Item'

export type i_DropdownProps = {
  width?: number
  height?: number
  data: any[]
  /**
   * 默认值为code
   */
  codeKey?: string
  /**
   * 默认值为label
   */
  labelKey?: string
}

const Dropdown: React.FC<i_DropdownProps> = props => {
  const {
    width = 200,
    height = 100,
    codeKey = 'value',
    labelKey = 'label',
    data,
  } = props
  const btn = React.useRef<TouchableOpacity>(null)

  const modal = useModal()

  const { width: ScreenWidth, height: ScreenHeight } = useWindowDimensions()

  const [coor, setCoor] = React.useState<{ left: number; top: number }>({
    left: 0,
    top: 0,
  })

  const calcPosition = () => {
    /**
     * x: 表示一个固定位置，会将滚动距离计算在内
     * y: 表示一个固定位置，会将滚动距离计算在内
     * pageX: 表示当前元素到顶部的距离，不会把滚动距离计算在内
     * pageY: 表示当前元素到左侧的距离，不会把滚动距离计算在内
     */
    btn.current?.measure((x, y, _width, _height, pageX, pageY) => {
      const isBottom = ScreenHeight - (pageY + _height) > height
      const isLeft = ScreenWidth - pageX > width
      let top = pageY + _height
      let left = pageX

      if (!isBottom) {
        top = pageY - height
      }
      if (!isLeft) {
        left = pageX + _width - width
      }

      setCoor({
        left: left,
        top: top,
      })
    })
  }

  const handleShow = () => {
    modal.show()
  }

  const [state, setState] = React.useState()

  const handelSelect = (_data: any) => {
    setState(_data)
    modal.hide()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        ref={btn}
        onPress={handleShow}
        onPressIn={() => calcPosition()}
      >
        <Text>{state?.[labelKey] || '请选择'} &gt;</Text>
      </TouchableOpacity>
      <Modal transparent modal={modal} animationType="none">
        <Pressable style={styles.modalContainer} onPress={() => modal.hide()} />
        <FlatList
          data={data}
          style={[styles.list, coor, { width, height }]}
          renderItem={({ item }: any) => (
            <Item title={item[labelKey]} data={item} onPress={handelSelect} />
          )}
          keyExtractor={(item: any) => item[codeKey]}
        />
      </Modal>
    </View>
  )
}

Dropdown.displayName = 'Dropdown'

export default Dropdown

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  btn: {
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  list: {
    position: 'absolute',
    opacity: 0.8,
    borderWidth: 1,
    zIndex: 1000,
    borderColor: 'grey',
    borderRadius: 5,
  },
})
