import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { Text } from '../atoms/Text';
import { MainScreenContainer } from '../components/MainScreenContainer';

type PeliculaDetalleScreenRouteProp = RouteProp<RootStackParamList, 'PeliculaDetalle'>;

export const PeliculaDetalleScreen: React.FC = () => {
  const route = useRoute<PeliculaDetalleScreenRouteProp>();
  const { pelicula } = route.params;

  return (
    <MainScreenContainer>
      <ScrollView style={styles.container}>
        <Text variant="title" style={styles.title}>
          {pelicula.titulo}
        </Text>
        <View style={styles.details}>
          <Text variant="body">Episodio {pelicula.episodioId}</Text>
          <Text variant="body">Director: {pelicula.director}</Text>
          <Text variant="body">Productor: {pelicula.productor}</Text>
          <Text variant="body">Fecha de lanzamiento: {pelicula.fechaLanzamiento}</Text>
          <Text variant="body" style={styles.apertura}>
            {pelicula.apertura}
          </Text>
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
  apertura: {
    fontStyle: 'italic',
    marginTop: 16,
  },
});
