import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

const ButtonWrapper = ({ ...props }) => {

    const buttonConfig = {
        ...props,
        style: styles.style,
        contentStyle: { height: '100%' },
        mode: 'contained'
    }

    return (
        <Button {...buttonConfig} />
    )
}

const styles = StyleSheet.create({
    style: {
        width: '100%',
        marginTop: 10,
        height: 45,
        justifyContent: 'center'
    }
})

export default ButtonWrapper

