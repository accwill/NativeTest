import React from 'react'
import {
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

export type i_ButtonProps = {
  titleStyle?: TextStyle
  title?: string
} & TouchableOpacityProps

const Button: React.FC<i_ButtonProps> = ({
  children,
  title,
  titleStyle,
  ...rest
}) => {
  return (
    <TouchableOpacity {...rest}>
      <Text style={titleStyle}>{title || children}</Text>
    </TouchableOpacity>
  )
}
Button.displayName = 'Button'

export default Button
