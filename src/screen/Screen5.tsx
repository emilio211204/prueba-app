import React, { useState } from 'react'
import { Button, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../../theme/appTheme';

export const Screen5 = () => {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [resultado, setResultado] = useState('');
  
    const handleButtonPress = () => {
      const numeroMenorOIgual = Math.min(parseInt(numero1), parseInt(numero2));
      setResultado(numeroMenorOIgual.toString());
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
        <Button  title="<= " onPress={handleButtonPress}  />
        <Text style={styles.textImg}>El numero menor es:</Text>
        <Text style={styles.textResultado}>{resultado}</Text>
      </View>
    );
};
