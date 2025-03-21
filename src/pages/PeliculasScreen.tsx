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
import { useTheme } from '../theme/ThemeContext';

type PeliculasScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Peliculas'>;

export const PeliculasScreen: React.FC = () => {
  const navigation = useNavigation<PeliculasScreenNavigationProp>();
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const { results, loading, error, next } = useAppSelector((state) => state.peliculas);
  const { theme } = useTheme();

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
        <View style={[styles.container, { backgroundColor: theme.background }]}>
          <Text variant="body" style={{ color: theme.text }}>Cargando...</Text>
        </View>
      </MainScreenContainer>
    );
  }

  if (error) {
    return (
      <MainScreenContainer>
        <View style={[styles.container, { backgroundColor: theme.background }]}>
          <Text variant="body" style={{ color: theme.text }}>Error al cargar las películas</Text>
        </View>
      </MainScreenContainer>
    );
  }

  return (
    <MainScreenContainer>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <TextInput
          style={[styles.searchInput, { 
            backgroundColor: theme.cardBackground,
            borderColor: theme.border,
            color: theme.text,
          }]}
          placeholder="Buscar película..."
          placeholderTextColor={theme.textSecondary}
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <FlatList
          data={results}
          renderItem={({ item, index }) => (
            <View style={[styles.peliculaCard, { 
              backgroundColor: theme.cardBackground,
              borderColor: theme.border,
            }]}>
              <Text variant="title" style={{ color: theme.text, fontWeight: 'bold' }} onPress={() => handlePeliculaPress(item)}>
                {item.titulo}
              </Text>
              <Text variant="body" style={{ color: theme.text }}>Episodio {item.episodioId}</Text>
              <Text variant="body" style={{ color: theme.textSecondary }}>Director: {item.director}</Text>
              <Text variant="body" style={{ color: theme.textSecondary }}>Fecha de lanzamiento: {item.fechaLanzamiento}</Text>
            </View>
          )}
          keyExtractor={(_, index) => `pelicula-${index + 1}`}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListEmptyComponent={
            <Text variant="body" style={[styles.emptyText, { color: theme.text }]}>
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
  },
  searchInput: {
    padding: 12,
    margin: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  peliculaCard: {
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
