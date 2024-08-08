import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { styles } from '../../theme/appTheme';

export const Screen4 = () => {
  const [n1, setNumero1] = useState('');
  const [n2, setNumero2] = useState('');
  const [res, setResultado] = useState('');

  const ButtonClick = () => {
    const numeroMayorOIgual = Math.max(parseInt(n1), parseInt(n2));
    setResultado(numeroMayorOIgual.toString());
  };

  return (
    <View>
      <TextInput
        style={styles.containerInput}
        onChangeText={setNumero1}
        value={n1}
        keyboardType="numeric"
        placeholder="Coloca el primer número"
      />
      <TextInput
        style={styles.containerInput}
        onChangeText={setNumero2}
        value={n2}
        keyboardType="numeric"
        placeholder="Coloca el segundo número"
      />
      <Button  title=">= " onPress={ButtonClick} /> 
      <Text style={styles.textImg}>El numero mayor es:</Text>
      <Text style={styles.textResultado}>{res}</Text>
    </View>
  );
};