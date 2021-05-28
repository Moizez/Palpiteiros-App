import React from 'react'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'

const Input = ({ hasIcon, ...props }) => {

    const inputConfig = {
        ...props,
        mode: 'outlined',
        style: styles.style
    }

    return (
        <TextInput
            {...inputConfig}
            right={
                hasIcon &&
                <TextInput.Icon
                    color={props.error ? '#a00' : '#022c6f'}
                    name={props.icon}
                    onPress={props.onPress}
                />

            }
        />
    )
}

const styles = StyleSheet.create({
    style: {
        width: '100%',
        marginBottom: 10,
    }
})


export default Input

