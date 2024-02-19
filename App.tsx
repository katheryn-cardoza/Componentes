import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pantalla1 from '../tarea2/pantallas/Pantalla1';
import Pantalla2 from '../tarea2/pantallas/Pantalla2';
import Pantalla3 from '../tarea2/pantallas/Pantalla3';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bienvenida">
        <Stack.Screen name="Bienvenida" component={Pantalla1} />
        <Stack.Screen name="Perfil" component={Pantalla2} />
        <Stack.Screen name="Admiro" component={Pantalla3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
