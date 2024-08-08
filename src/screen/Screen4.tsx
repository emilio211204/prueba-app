import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { styles } from '../../theme/appTheme';

export const Screen4 = () => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const handleButtonPress = () => {
    const numeroMayorOIgual = Math.max(parseInt(numero1), parseInt(numero2));
    setResultado(numeroMayorOIgual.toString());
  };

  return (
    <View>
      <TextInput
        style={styles.containerInput}
        onChangeText={setNumero1}
        value={numero1}
        keyboardType="numeric"
        placeholder="Coloca el primer número"
      />
      <TextInput
        style={styles.containerInput}
        onChangeText={setNumero2}
        value={numero2}
        keyboardType="numeric"
        placeholder="Coloca el segundo número"
      />
      <Button  title=">= " onPress={handleButtonPress} /> 
      <Text style={styles.textImg}>El numero mayor es:</Text>
      <Text style={styles.textResultado}>{resultado}</Text>
    </View>
  );
};