import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from '../atoms/Text';
import { Planeta } from '../types';

interface PlanetaCardProps {
  planeta: Planeta;
  onPress: (planeta: Planeta) => void;
}

export const PlanetaCard: React.FC<PlanetaCardProps> = ({ planeta, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(planeta)}>
      <Text variant="title">{planeta.nombre}</Text>
      <Text variant="body">Período de rotación: {planeta.periodoRotacion}</Text>
      <Text variant="body">Período orbital: {planeta.periodoOrbital}</Text>
      <Text variant="body">Diámetro: {planeta.diametro}</Text>
      <Text variant="body">Clima: {planeta.clima}</Text>
      <Text variant="body">Gravedad: {planeta.gravedad}</Text>
      <Text variant="body">Terreno: {planeta.terreno}</Text>
      <Text variant="body">Superficie de agua: {planeta.superficieAgua}</Text>
      <Text variant="body">Población: {planeta.poblacion}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});
