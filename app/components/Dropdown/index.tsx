import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Pressable,
  useWindowDimensions,
  ScrollView,
} from 'react-native'
import { Modal } from '../AsyncModal'
import { useModal } from '../AsyncModal/hooks'
import Item from './components/Item'

const DATA = [
  {
    value: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    label: 'First Item',
  },
  {
    value: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    label: 'Second Item',
  },
  {
    value: '58694a0f-3da1-471f-bd96-145571e29d72',
    label: 'Third Item',
  },
  {
    value: '58694a0f-3da1-471f-bd96-145571e29d721',
    label: 'Third Item1',
  },
  {
    value: '58694a0f-3da1-471f-bd96-145571e29d722',
    label: 'Third Item2',
  },
  {
    value: '58694a0f-3da1-471f-bd96-145571e29d723',
    label: 'Third Item3',
  },
]

export type i_DropdownProps = {
  width: number
  height: number
}
const Dropdown: React.FC<i_DropdownProps> = props => {
  const { width = 200, height = 100 } = props
  const btn = React.useRef<TouchableOpacity>(null)

  const modal = useModal()

  const { width: ScreenWidth, height: ScreenHeight } = useWindowDimensions()

  const renderItem = ({ item }: any) => <Item title={item.label} />

  const [state, setState] = React.useState<{ left: number; top: number }>({
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

      setState({
        left: left,
        top: top,
      })
    })
  }

  const handleShow = () => {
    modal.show()
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        ref={btn}
        onPress={handleShow}
        onPressIn={() => calcPosition()}
      >
        <Text style={styles.text}>Dropdown &gt;</Text>
      </TouchableOpacity>
      <Modal defaultVisible transparent modal={modal} animationType="none">
        <Pressable style={styles.modalContainer} onPress={() => modal.hide()} />
        <FlatList
          data={DATA}
          onStartShouldSetResponderCapture={() => true}
          onStartShouldSetResponder={() => true}
          style={[styles.list, state, { width, height }]}
          renderItem={renderItem}
          keyExtractor={item => item.value}
        />
      </Modal>
    </ScrollView>
  )
}

Dropdown.displayName = 'Dropdown'

export default Dropdown

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // alignSelf: 'flex-start',
  },
  btn: {
    backgroundColor: 'pink',
    padding: 10,
  },
  text: {
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  list: {
    position: 'absolute',
    backgroundColor: 'green',
    opacity: 0.8,
    borderWidth: 1,
    zIndex: 1000,
    borderColor: 'grey',
  },
})
