import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text } from '../atoms/Text';
import { Pelicula } from '../types/index';
import { RootStackParamList } from '../../App';
import { fetchPeliculas, searchPeliculas, resetPagePeliculas } from '../store/index';
import { useAppDispatch, useAppSelector } from '../store/index';
import { MainScreenContainer } from '../components/MainScreenContainer';

type PeliculasScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Peliculas'>;

export const PeliculasScreen: React.FC = () => {
  const navigation = useNavigation<PeliculasScreenNavigationProp>();
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const { results, loading, error, next } = useAppSelector((state) => state.peliculas);

  useEffect(() => {
    if (searchQuery) {
      dispatch(resetPagePeliculas());
      dispatch(searchPeliculas(searchQuery));
    } else {
      dispatch(resetPagePeliculas());
      dispatch(fetchPeliculas(1));
    }
  }, [searchQuery, dispatch]);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  const handleLoadMore = () => {
    if (next && !searchQuery) {
      dispatch(fetchPeliculas(results.length / 10 + 1));
    }
  };

  const handlePeliculaPress = (pelicula: Pelicula) => {
    navigation.navigate('PeliculaDetalle', { pelicula });
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
          <Text variant="body">Error al cargar las películas</Text>
        </View>
      </MainScreenContainer>
    );
  }

  return (
    <MainScreenContainer>
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar película..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <FlatList
          data={results}
          renderItem={({ item }) => (
            <View style={styles.peliculaCard}>
              <Text variant="title" onPress={() => handlePeliculaPress(item)}>
                {item.title}
              </Text>
              <Text variant="body">Episodio {item.episode_id}</Text>
              <Text variant="body">Director: {item.director}</Text>
              <Text variant="body">Fecha de lanzamiento: {item.release_date}</Text>
            </View>
          )}
          keyExtractor={(item) => item.url}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListEmptyComponent={
            <Text variant="body" style={styles.emptyText}>
              No se encontraron películas
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
  peliculaCard: {
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
