import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { Text } from '../atoms/Text';
import { MainScreenContainer } from '../components/MainScreenContainer';

type PlanetaDetalleScreenRouteProp = RouteProp<RootStackParamList, 'PlanetaDetalle'>;

export const PlanetaDetalleScreen: React.FC = () => {
  const route = useRoute<PlanetaDetalleScreenRouteProp>();
  const { planeta } = route.params;

  return (
    <MainScreenContainer>
      <ScrollView style={styles.container}>
        <Text variant="title" style={styles.title}>
          {planeta.nombre}
        </Text>
        <View style={styles.details}>
          <Text variant="body">Período de rotación: {planeta.periodoRotacion}</Text>
          <Text variant="body">Período orbital: {planeta.periodoOrbital}</Text>
          <Text variant="body">Diámetro: {planeta.diametro}</Text>
          <Text variant="body">Clima: {planeta.clima}</Text>
          <Text variant="body">Gravedad: {planeta.gravedad}</Text>
          <Text variant="body">Terreno: {planeta.terreno}</Text>
          <Text variant="body">Superficie de agua: {planeta.superficieAgua}</Text>
          <Text variant="body">Población: {planeta.poblacion}</Text>
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
});
