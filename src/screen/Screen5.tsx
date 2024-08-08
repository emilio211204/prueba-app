import React, { useState } from 'react'
import { Button, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../../theme/appTheme';

export const Screen5 = () => {
    const [n1, setNumero1] = useState('');
    const [n2, setNumero2] = useState('');
    const [res, setResultado] = useState('');
  
    const ButtonClick  = () => {
      const numeroMenorOIgual = Math.min(parseInt(n1), parseInt(n2));
      setResultado(numeroMenorOIgual.toString());
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
        <Button  title="<= " onPress={ButtonClick}  />
        <Text style={styles.textImg}>El numero menor es:</Text>
        <Text style={styles.textResultado}>{res}</Text>
      </View>
    );
};
