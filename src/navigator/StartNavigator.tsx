import { createStackNavigator } from '@react-navigation/stack';
import { Screnn1 } from '../screen/Screnn1';
import { Screen2 } from '../screen/Screen2';
import { Screen3 } from '../screen/Screen3';
import { Screen5 } from '../screen/Screen5';
import { Screen4 } from '../screen/Screen4';
const Stack = createStackNavigator();

export const StartNavigator = ()  => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Screnn1} />
      <Stack.Screen name="Imagen1" component={Screen2} /> 
      <Stack.Screen name="Imagen2" component={Screen3} />
      <Stack.Screen name="Mayor Igual" component={Screen4} />
      <Stack.Screen name="Menor Igual" component={Screen5} />
      
    </Stack.Navigator>
  );
}