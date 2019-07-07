import React from 'react'
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native'

export default function App() {
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    }

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>

            <Image source={pic} style={{ width: 193, height: 110 }} />
        </View>
    )
}

AppRegistry.registerComponent('AwesomeProject', () => App)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
