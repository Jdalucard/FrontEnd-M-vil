import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { PersonajesScreen } from './src/pages/PersonajesScreen';
import { PeliculasScreen } from './src/pages/PeliculasScreen';
import { PlanetasScreen } from './src/pages/PlanetasScreen';
import { PersonaDetalleScreen } from './src/pages/PersonaDetalleScreen';
import { PeliculaDetalleScreen } from './src/pages/PeliculaDetalleScreen';
import { PlanetaDetalleScreen } from './src/pages/PlanetaDetalleScreen';
import { Persona, Pelicula, Planeta } from './src/types';

export type RootStackParamList = {
  Personajes: undefined;
  Peliculas: undefined;
  Planetas: undefined;
  PersonaDetalle: { persona: Persona };
  PeliculaDetalle: { pelicula: Pelicula };
  PlanetaDetalle: { planeta: Planeta };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Personajes" 
            component={PersonajesScreen}
            options={{
              title: 'Star Wars Personajes',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen 
            name="Peliculas" 
            component={PeliculasScreen}
            options={{
              title: 'Star Wars Películas',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen 
            name="Planetas" 
            component={PlanetasScreen}
            options={{
              title: 'Star Wars Planetas',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen 
            name="PersonaDetalle" 
            component={PersonaDetalleScreen}
            options={{
              title: 'Detalle del Personaje',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen 
            name="PeliculaDetalle" 
            component={PeliculaDetalleScreen}
            options={{
              title: 'Detalle de la Película',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen 
            name="PlanetaDetalle" 
            component={PlanetaDetalleScreen}
            options={{
              title: 'Detalle del Planeta',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
} 