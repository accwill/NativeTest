import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Pressable,
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
]

export type i_DropdownProps = {
  width: number
  height: number
}
const Dropdown: React.FC<i_DropdownProps> = props => {
  const { width = 100, height = 100 } = props
  const btn = React.useRef<TouchableOpacity>(null)

  const modal = useModal()

  const renderItem = ({ item }: any) => <Item title={item.label} />

  const [state, setState] = React.useState<{ left: number; top: number }>({
    left: 0,
    top: 0,
  })

  const calcPosition = () => {
    btn.current?.measure((x, y, _width, _height, pageX, pageY) => {
      setState({
        left: pageX,
        top: pageY + _height,
      })
    })
  }

  const handleShow = () => {
    modal.show()
  }

  return (
    <View style={styles.container}>
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
    </View>
  )
}

Dropdown.displayName = 'Dropdown'

export default Dropdown

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    // alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
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
