import React from 'react';
import { Text, View } from 'react-native';
import { ButtonComponent } from '../components/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../theme/appTheme';

export const Screnn1 = () => {
  const navigation = useNavigation() as any;

  const handleImage1Press = () => {
    navigation.navigate('Imagen1');
  };

  const handleImage2Press = () => {
    navigation.navigate('Imagen2');
  };

  const handleButtonPress = () => {
    navigation.navigate('Mayor Igual');
  };

  const handleButton2Press = () => {    
    navigation.navigate('Menor Igual');
  };

  return (
    <View >
      <Text style={styles.textImg}>Bienvenido</Text>
      <ButtonComponent title="Imagen 1" onPress={handleImage1Press} />
      <ButtonComponent title="Imagen 2" onPress={handleImage2Press} />
      <ButtonComponent title=">=" onPress={handleButtonPress} />
      <ButtonComponent title="<=" onPress={handleButton2Press} />
    </View>
  );
};

 
