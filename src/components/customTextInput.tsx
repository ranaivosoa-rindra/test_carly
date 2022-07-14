import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Globalstyles } from '../styles/globalStyles'

const CustomTextInput = (props: any) => {

    const {placeholder,value,  onChangeText, secureTextEntry} = props

  return (
    <TextInput
        placeholder={placeholder}
        placeholderTextColor={"grey"}
        style={Globalstyles.textInputBox}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
    />
  )
}

export default CustomTextInput