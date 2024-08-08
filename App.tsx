import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';
import React from 'react'
import { StartNavigator } from './src/navigator/StartNavigator';

 const App = () => {
  return (
    <NavigationContainer>
      <StartNavigator />
    </NavigationContainer>
  )
}


export default App