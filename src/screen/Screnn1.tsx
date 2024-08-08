import React from 'react';
import { Text, View } from 'react-native';
import { ButtonComponent } from '../components/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../theme/appTheme';

export const Screnn1 = () => {
  const navigation = useNavigation() as any;

  const Image1 = () => {
    navigation.navigate('Imagen1');
  };

  const Image2 = () => {
    navigation.navigate('Imagen2');
  };

  const Button = () => {
    navigation.navigate('Mayor Igual');
  };

  const Button2 = () => {    
    navigation.navigate('Menor Igual');
  };

  return (
    <View >
      <Text style={styles.textImg}>Bienvenido</Text>
      <ButtonComponent title="Imagen 1" onPress={Image1} />
      <ButtonComponent title="Imagen 2" onPress={Image2} />
      <ButtonComponent title=">=" onPress={Button} />
      <ButtonComponent title="<=" onPress={Button2} />
    </View>
  );
};

 
