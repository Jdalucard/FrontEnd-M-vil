import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from '../atoms/Text';
import { Persona } from '../types';
import { useTheme } from '../theme/ThemeContext';

interface PersonaCardProps {
  persona: Persona;
  onPress: (persona: Persona) => void;
}

export const PersonaCard: React.FC<PersonaCardProps> = ({ persona, onPress }) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity 
      style={[styles.card, { 
        backgroundColor: theme.cardBackground,
        borderColor: theme.border,
      }]} 
      onPress={() => onPress(persona)}
    >
      <Text variant="title" style={{ color: theme.text, fontWeight: 'bold' }}>{persona.nombre}</Text>
      <Text variant="body" style={{ color: theme.text }}>Altura: {persona.altura}</Text>
      <Text variant="body" style={{ color: theme.text }}>Peso: {persona.peso}</Text>
      <Text variant="body" style={{ color: theme.textSecondary }}>Color de cabello: {persona.colorCabello}</Text>
      <Text variant="body" style={{ color: theme.textSecondary }}>Color de piel: {persona.colorPiel}</Text>
      <Text variant="body" style={{ color: theme.textSecondary }}>Color de ojos: {persona.colorOjos}</Text>
      <Text variant="body" style={{ color: theme.textSecondary }}>Fecha de nacimiento: {persona.fechaNacimiento}</Text>
      <Text variant="body" style={{ color: theme.textSecondary }}>Género: {persona.genero}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 8,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
  },
});
