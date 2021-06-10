import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import LottieView from 'lottie-react-native'

export default function LoadScreen({ loadMessage }) {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/logo.png')}
                style={styles.image}
            />
            <Text style={styles.text}>{loadMessage}</Text>
            <LottieView style={{ height: 100,  }} source={require('../../assets/lotties/loading.json')} autoPlay loop />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', position: 'absolute' },
    image: { height: 225, width: 225, marginBottom: 20 },
    text: {
        fontSize: 12,
        letterSpacing: 0.5,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#022c6f'
    }
})