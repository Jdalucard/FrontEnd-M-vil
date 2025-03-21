import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { Text } from '../atoms/Text';

type BottomNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const BottomNavigation: React.FC = () => {
  const navigation = useNavigation<BottomNavigationProp>();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Personajes')}>
        <Text variant="body" style={styles.buttonText}>
          Personajes
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Peliculas')}>
        <Text variant="body" style={styles.buttonText}>
          Películas
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Planetas')}>
        <Text variant="body" style={styles.buttonText}>
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
    backgroundColor: '#f4511e',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  button: {
    padding: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
