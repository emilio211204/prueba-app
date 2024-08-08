import React from 'react'
import { Text } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../../theme/appTheme';


interface Props {
    title: string;
    onPress: ( ) => void;
}

export const ButtonComponent = ({title,onPress}:Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}