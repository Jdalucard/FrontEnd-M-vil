import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text } from '../atoms/Text';
import { Planeta } from '../types/index';
import { RootStackParamList } from '../../App';
import { fetchPlanetas, searchPlanetas, resetPagePlanetas } from '../store/index';
import { useAppDispatch, useAppSelector } from '../store/index';
import { MainScreenContainer } from '../components/MainScreenContainer';

type PlanetasScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Planetas'>;

export const PlanetasScreen: React.FC = () => {
  const navigation = useNavigation<PlanetasScreenNavigationProp>();
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const { results, loading, error, next } = useAppSelector((state) => state.planetas);

  useEffect(() => {
    if (searchQuery) {
      console.log('Buscando planetas con query:', searchQuery);
      dispatch(resetPagePlanetas());
      dispatch(searchPlanetas(searchQuery));
    } else {
      console.log('Cargando página inicial de planetas');
      dispatch(resetPagePlanetas());
      dispatch(fetchPlanetas(1));
    }
  }, [searchQuery, dispatch]);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  const handleLoadMore = () => {
    if (next && !searchQuery) {
      dispatch(fetchPlanetas(results.length / 10 + 1));
    }
  };

  const handlePlanetaPress = (planeta: Planeta) => {
    navigation.navigate('PlanetaDetalle', { planeta });
  };

  if (loading && results.length === 0) {
    return (
      <MainScreenContainer>
        <View style={styles.container}>
          <Text variant="body">Cargando...</Text>
        </View>
      </MainScreenContainer>
    );
  }

  if (error) {
    return (
      <MainScreenContainer>
        <View style={styles.container}>
          <Text variant="body">Error al cargar los planetas</Text>
        </View>
      </MainScreenContainer>
    );
  }

  return (
    <MainScreenContainer>
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar planeta..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <FlatList
          data={results}
          renderItem={({ item }) => (
            <View style={styles.planetaCard}>
              <Text variant="title" onPress={() => handlePlanetaPress(item)}>
                {item.nombre}
              </Text>
              <Text variant="body">Clima: {item.clima}</Text>
              <Text variant="body">Terreno: {item.terreno}</Text>
              <Text variant="body">Población: {item.poblacion}</Text>
            </View>
          )}
          keyExtractor={(item) => item.url}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListEmptyComponent={
            <Text variant="body" style={styles.emptyText}>
              No se encontraron planetas
            </Text>
          }
        />
      </View>
    </MainScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 12,
    margin: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  planetaCard: {
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
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
  },
});
