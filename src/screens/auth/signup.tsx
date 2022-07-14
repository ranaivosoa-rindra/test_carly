import { View, Text, Switch } from 'react-native'
import React from 'react'
import { Globalstyles } from '../../styles/globalStyles'
import CustomTextInput from '../../components/customTextInput'

const Signup = () => {
    const [checked, setChecked] = React.useState('first');
    return (
        <View style={Globalstyles.basicContainer} >
            <Text style={Globalstyles.basicText}>Sign up</Text>
            <CustomTextInput
                placeholder="username"
                value={0}
                onChangeText={null}
                secureTextEntry={false}
            />
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

export default Signup