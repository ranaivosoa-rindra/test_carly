import { View, ActivityIndicator, Text } from 'react-native'
import React from 'react'
import { LoadingStyles } from '../styles/globalStyles'
import { Colors } from '../constants/theme'

const Loading = (props: any) => {
    return (
        // <View style={LoadingStyles.container}>
        //     <ActivityIndicator
        //         size="large" color={Colors.loadingColor}
        //     />
        // </View
        <>
            <Text>
                {props.isLoading}
            </Text>
        </>
    )
}

export default Loading