import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { Text } from '../atoms/Text';
import { useTheme } from '../theme/ThemeContext';

type BottomNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const BottomNavigation: React.FC = () => {
  const navigation = useNavigation<BottomNavigationProp>();
  const route = useRoute();
  const { theme } = useTheme();

  const isActive = (routeName: keyof RootStackParamList) => {
    return route.name === routeName;
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.primary }]}>
      <TouchableOpacity 
        style={[styles.button, isActive('Personajes') && styles.activeButton]} 
        onPress={() => navigation.navigate('Personajes')}
      >
        <Text variant="body" style={[styles.buttonText, { color: theme.text }, isActive('Personajes') && styles.activeButtonText]}>
          Personajes
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.button, isActive('Peliculas') && styles.activeButton]} 
        onPress={() => navigation.navigate('Peliculas')}
      >
        <Text variant="body" style={[styles.buttonText, { color: theme.text }, isActive('Peliculas') && styles.activeButtonText]}>
          Películas
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.button, isActive('Planetas') && styles.activeButton]} 
        onPress={() => navigation.navigate('Planetas')}
      >
        <Text variant="body" style={[styles.buttonText, { color: theme.text }, isActive('Planetas') && styles.activeButtonText]}>
          Planetas
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  button: {
    padding: 8,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 16,
  },
  activeButtonText: {
    color: '#4A90E2',
    fontWeight: 'bold',
  },
});
