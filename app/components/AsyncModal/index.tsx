import React from 'react'
import {
  View,
  Text,
  Modal,
  StyleSheet,
  ButtonProps,
  Button,
} from 'react-native'

export type i_AsyncModalProps = {
  /** 默认是否显示， 默认值为false */
  defaultVisible?: boolean
  onOk?: ButtonProps['onPress']
  onCancel?: ButtonProps['onPress']

  modal?: i_AsyncModalIns

  title?: string

  content?: string

  okText?: string

  cancelText?: string
}

export type i_AsyncModalIns = {
  show(): void
  hide(): void
  setVisible: (
    nextVisible: boolean | ((prevVisible: boolean) => boolean),
  ) => void
}

const AsyncModal: React.FC<i_AsyncModalProps> = props => {
  const [visible, setVisible] = React.useState<boolean>(true)
  const show = () => {
    setVisible(true)
  }
  const hide = () => {
    setVisible(false)
  }

  if (props.modal) {
    props.modal.show = show
    props.modal.hide = hide
    props.modal.setVisible = setVisible
  }

  return (
    <Modal
      onRequestClose={() => {
        setVisible(false)
      }}
      visible={visible}
      animationType="fade"
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>我是标题</Text>
          <Text style={styles.describe}>我是内容</Text>

          <View style={styles.actionContainer}>
            <View style={[styles.action, styles.actionLeft]}>
              <Button title="取消" onPress={props.onCancel} />
            </View>
            <View style={styles.action}>
              <Button title="确定" onPress={props.onOk} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}

AsyncModal.displayName = 'AsyncModal'

export default AsyncModal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '10%',
    paddingRight: '10%',
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
  action: {
    paddingTop: 3,
    paddingBottom: 3,
    alignItems: 'center',
    flex: 1,
  },
})
