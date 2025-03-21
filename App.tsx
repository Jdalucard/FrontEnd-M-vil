import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { PersonajesScreen } from './src/pages/PersonajesScreen';
import { PeliculasScreen } from './src/pages/PeliculasScreen';
import { PlanetasScreen } from './src/pages/PlanetasScreen';
import { PersonaDetalleScreen } from './src/pages/PersonaDetalleScreen';
import { PeliculaDetalleScreen } from './src/pages/PeliculaDetalleScreen';
import { PlanetaDetalleScreen } from './src/pages/PlanetaDetalleScreen';
import { ThemeProvider, useTheme } from './src/theme/ThemeContext';
import { ThemeToggle } from './src/components/ThemeToggle';

export type RootStackParamList = {
  Personajes: undefined;
  Peliculas: undefined;
  Planetas: undefined;
  PersonaDetalle: { persona: any };
  PeliculaDetalle: { pelicula: any };
  PlanetaDetalle: { planeta: any };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppContent = () => {
  const { theme } = useTheme();

  const screenOptions = {
    headerStyle: {
      backgroundColor: theme.primary,
    },
    headerTintColor: theme.text,
    headerRight: () => <ThemeToggle />,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen 
          name="Personajes" 
          component={PersonajesScreen}
          options={{
            title: 'Star Wars Personajes',
          }}
        />
        <Stack.Screen 
          name="Peliculas" 
          component={PeliculasScreen}
          options={{
            title: 'Star Wars Películas',
          }}
        />
        <Stack.Screen 
          name="Planetas" 
          component={PlanetasScreen}
          options={{
            title: 'Star Wars Planetas',
          }}
        />
        <Stack.Screen 
          name="PersonaDetalle" 
          component={PersonaDetalleScreen}
          options={{
            title: 'Detalle del Personaje',
          }}
        />
        <Stack.Screen 
          name="PeliculaDetalle" 
          component={PeliculaDetalleScreen}
          options={{
            title: 'Detalle de la Película',
          }}
        />
        <Stack.Screen 
          name="PlanetaDetalle" 
          component={PlanetaDetalleScreen}
          options={{
            title: 'Detalle del Planeta',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Provider>
  );
} 