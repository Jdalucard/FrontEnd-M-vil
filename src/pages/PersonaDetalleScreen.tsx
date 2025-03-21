import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Text } from '../atoms/Text';
import { Persona } from '../types';
import { MainScreenContainer } from '../components/MainScreenContainer';
import { useTheme } from '../theme/ThemeContext';

type RootStackParamList = {
  PersonaDetalle: { persona: Persona };
};

type PersonaDetalleScreenRouteProp = RouteProp<RootStackParamList, 'PersonaDetalle'>;

export const PersonaDetalleScreen: React.FC = () => {
  const route = useRoute<PersonaDetalleScreenRouteProp>();
  const { persona } = route.params;
  const { theme } = useTheme();

  return (
    <MainScreenContainer>
      <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
        <Text variant="title" style={[styles.title, { color: theme.text }]}>
          {persona.nombre}
        </Text>
        <View style={[styles.details, { 
          backgroundColor: theme.cardBackground,
          borderColor: theme.border,
        }]}>
          <Text variant="body" style={{ color: theme.text }}>Altura: {persona.altura}</Text>
          <Text variant="body" style={{ color: theme.text }}>Peso: {persona.peso}</Text>
          <Text variant="body" style={{ color: theme.textSecondary }}>Color de cabello: {persona.colorCabello}</Text>
          <Text variant="body" style={{ color: theme.textSecondary }}>Color de piel: {persona.colorPiel}</Text>
          <Text variant="body" style={{ color: theme.textSecondary }}>Color de ojos: {persona.colorOjos}</Text>
          <Text variant="body" style={{ color: theme.textSecondary }}>Fecha de nacimiento: {persona.fechaNacimiento}</Text>
          <Text variant="body" style={{ color: theme.textSecondary }}>Género: {persona.genero}</Text>
          <Text variant="body" style={{ color: theme.textSecondary }}>Mundo natal: {persona.mundoNatal}</Text>
        </View>

        <View style={[styles.section, { 
          backgroundColor: theme.cardBackground,
          borderColor: theme.border,
        }]}>
          <Text variant="subtitle" style={[styles.sectionTitle, { color: theme.text }]}>
            Películas
          </Text>
          {persona.peliculas.map((pelicula, index) => (
            <Text key={`pelicula-${index}-${pelicula}`} variant="body" style={{ color: theme.textSecondary }}>
              • {pelicula}
            </Text>
          ))}
        </View>

        <View style={[styles.section, { 
          backgroundColor: theme.cardBackground,
          borderColor: theme.border,
        }]}>
          <Text variant="subtitle" style={[styles.sectionTitle, { color: theme.text }]}>
            Especies
          </Text>
          {persona.especies.map((especie, index) => (
            <Text key={`especie-${index}-${especie}`} variant="body" style={{ color: theme.textSecondary }}>
              • {especie}
            </Text>
          ))}
        </View>

        <View style={[styles.section, { 
          backgroundColor: theme.cardBackground,
          borderColor: theme.border,
        }]}>
          <Text variant="subtitle" style={[styles.sectionTitle, { color: theme.text }]}>
            Vehículos
          </Text>
          {persona.vehiculos.map((vehiculo, index) => (
            <Text key={`vehiculo-${index}-${vehiculo}`} variant="body" style={{ color: theme.textSecondary }}>
              • {vehiculo}
            </Text>
          ))}
        </View>

        <View style={[styles.section, { 
          backgroundColor: theme.cardBackground,
          borderColor: theme.border,
        }]}>
          <Text variant="subtitle" style={[styles.sectionTitle, { color: theme.text }]}>
            Naves Estelares
          </Text>
          {persona.navesEstelares.map((nave: string, index: number) => (
            <Text key={`nave-${index}-${nave}`} variant="body" style={{ color: theme.textSecondary }}>
              • {nave}
            </Text>
          ))}
        </View>
      </ScrollView>
    </MainScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
    textAlign: 'center',
  },
  details: {
    padding: 16,
    margin: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
  },
  section: {
    padding: 16,
    margin: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
