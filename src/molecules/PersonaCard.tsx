import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from '../atoms/Text';
import { Persona } from '../types';

interface PersonaCardProps {
  persona: Persona;
  onPress: (persona: Persona) => void;
}

export const PersonaCard: React.FC<PersonaCardProps> = ({ persona, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(persona)}>
      <Text variant="title">{persona.nombre}</Text>
      <Text variant="body">Altura: {persona.altura}</Text>
      <Text variant="body">Peso: {persona.peso}</Text>
      <Text variant="body">Color de cabello: {persona.colorCabello}</Text>
      <Text variant="body">Color de piel: {persona.colorPiel}</Text>
      <Text variant="body">Color de ojos: {persona.colorOjos}</Text>
      <Text variant="body">Fecha de nacimiento: {persona.fechaNacimiento}</Text>
      <Text variant="body">Género: {persona.genero}</Text>
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
