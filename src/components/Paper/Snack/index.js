import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Snackbar } from 'react-native-paper'

const Snack = ({ visible, onDismiss, message }) => {

    return (
        <View style={styles.container}>
            <Snackbar
                visible={visible}
                onDismiss={onDismiss}
                duration={200000}
            >
                {message}
            </Snackbar>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
    },
})

export default Snack

