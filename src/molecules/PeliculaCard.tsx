import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from '../atoms/Text';
import { Pelicula } from '../types';

interface PeliculaCardProps {
  pelicula: Pelicula;
  onPress: (pelicula: Pelicula) => void;
}

export const PeliculaCard: React.FC<PeliculaCardProps> = ({ pelicula, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(pelicula)}>
      <Text variant="title">{pelicula.titulo}</Text>
      <Text variant="body">Episodio {pelicula.episodioId}</Text>
      <Text variant="body">Director: {pelicula.director}</Text>
      <Text variant="body">Productor: {pelicula.productor}</Text>
      <Text variant="body">Fecha de lanzamiento: {pelicula.fechaLanzamiento}</Text>
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
