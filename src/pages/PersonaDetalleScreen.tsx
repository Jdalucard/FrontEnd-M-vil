import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Text } from '../atoms/Text';
import { Persona } from '../types';
import { MainScreenContainer } from '../components/MainScreenContainer';

type RootStackParamList = {
  PersonaDetalle: { persona: Persona };
};

type PersonaDetalleScreenRouteProp = RouteProp<RootStackParamList, 'PersonaDetalle'>;

export const PersonaDetalleScreen: React.FC = () => {
  const route = useRoute<PersonaDetalleScreenRouteProp>();
  const { persona } = route.params;

  return (
    <MainScreenContainer>
      <ScrollView style={styles.container}>
        <Text variant="title" style={styles.title}>
          {persona.nombre}
        </Text>
        <View style={styles.details}>
          <Text variant="body">Altura: {persona.altura}</Text>
          <Text variant="body">Peso: {persona.peso}</Text>
          <Text variant="body">Color de cabello: {persona.colorCabello}</Text>
          <Text variant="body">Color de piel: {persona.colorPiel}</Text>
          <Text variant="body">Color de ojos: {persona.colorOjos}</Text>
          <Text variant="body">Fecha de nacimiento: {persona.fechaNacimiento}</Text>
          <Text variant="body">Género: {persona.genero}</Text>
          <Text variant="body">Mundo natal: {persona.mundoNatal}</Text>
        </View>

        <View style={styles.section}>
          <Text variant="subtitle" style={styles.sectionTitle}>
            Películas
          </Text>
          {persona.peliculas.map((pelicula, index) => (
            <Text key={`pelicula-${index}-${pelicula}`} variant="body">
              • {pelicula}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text variant="subtitle" style={styles.sectionTitle}>
            Especies
          </Text>
          {persona.especies.map((especie, index) => (
            <Text key={`especie-${index}-${especie}`} variant="body">
              • {especie}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text variant="subtitle" style={styles.sectionTitle}>
            Vehículos
          </Text>
          {persona.vehiculos.map((vehiculo, index) => (
            <Text key={`vehiculo-${index}-${vehiculo}`} variant="body">
              • {vehiculo}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text variant="subtitle" style={styles.sectionTitle}>
            Naves Estelares
          </Text>
          {persona.navesEstelares.map((nave: string, index: number) => (
            <Text key={`nave-${index}-${nave}`} variant="body">
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
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
    textAlign: 'center',
  },
  details: {
    backgroundColor: '#fff',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  section: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    marginBottom: 12,
  },
});
