import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../../theme/appTheme'

export const Screen3 = () => {
  return (
    <View>
        <Text style={styles.textImg}>Mas rapido Imposible Ferrari</Text>
        <Image source={require('../../assets/img2.png')}  style={styles.img1}/>
    </View>
  )
}
