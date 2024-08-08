import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../../theme/appTheme'

export const Screen2 = () => {
  return (
    <View>
        <Text style={styles.textImg}>Artista de Pop Urbano </Text>
        <Text style={styles.textImg}>Tiago PZK</Text>
        <Image source={require('../../assets/imag1.png')}  style={styles.img1}/>
        
    </View>
  )
}
