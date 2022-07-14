import { View, Text, TextInput, Dimensions, Switch } from 'react-native'
import React from 'react'
import { Globalstyles } from '../../styles/globalStyles'
import CustomTextInput from '../../components/customTextInput'

const Login = () => {
    return (
        <View style={Globalstyles.basicContainer} >
            <Text style={Globalstyles.basicText}>login</Text>
            <CustomTextInput
                placeholder="email"
                value={0}
                onChangeText={null}
                secureTextEntry={false}
            />
            <CustomTextInput
                placeholder="password"
                value={0}
                onChangeText={null}
                secureTextEntry={true}
            />
        </View>
    )
}

export default Login