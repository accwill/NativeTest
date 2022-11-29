/**
 * @Author: Aceh
 * @Date:   2022-11-27 10:42:52
 * @Last Modified by:   aceh
 * @Last Modified time: 2022-11-29 20:16:05
 */
import Button from 'app/components/Button'
import React from 'react'
import { StyleSheet } from 'react-native'

type i_ItemProps = {
  data: any
  onPress(data: any): void
  title: string
}

const Item: React.FC<i_ItemProps> = ({ title, data, onPress }) => {
  return (
    <Button style={styles.container} onPress={() => onPress(data)}>
      {title}
    </Button>
  )
}

Item.displayName = 'Item'

export default Item

const styles = StyleSheet.create({
  container: {
    height: 30,
    paddingLeft: 6,
    paddingRight: 6,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderColor: '#aaa',
    borderBottomWidth: 0.2,
  },
})
