/**
 * @Author: Aceh
 * @Date:   2022-11-27 10:42:52
 * @Last Modified by:   aceh
 * @Last Modified time: 2022-11-29 12:29:22
 */
import Button from 'app/components/Button'
import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Item: React.FC<any> = ({ title }) => {
  return (
    <Button style={styles.container}>
      <Text>{title}</Text>
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
    justifyContent: 'center',
    borderColor: '#aaa',
    borderBottomWidth: 0.2,
  },
})
