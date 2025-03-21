import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PersonaCard } from '../molecules/PersonaCard';
import { Text } from '../atoms/Text';
import { Persona } from '../types/index';
import { RootStackParamList } from '../../App';
import { fetchPersonajes, searchPersonajes, resetPagePersonajes } from '../store/index';
import { useAppDispatch, useAppSelector } from '../store/index';
import { MainScreenContainer } from '../components/MainScreenContainer';
import { useTheme } from '../theme/ThemeContext';

type PersonajesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Personajes'>;

export const PersonajesScreen: React.FC = () => {
  const navigation = useNavigation<PersonajesScreenNavigationProp>();
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const { results, loading, error, next } = useAppSelector((state) => state.personajes);
  const { theme } = useTheme();

  useEffect(() => {
    if (searchQuery) {
      dispatch(resetPagePersonajes());
      dispatch(searchPersonajes(searchQuery));
    } else {
      dispatch(resetPagePersonajes());
      dispatch(fetchPersonajes(1));
    }
  }, [searchQuery, dispatch]);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  const handleLoadMore = () => {
    if (next && !searchQuery) {
      dispatch(fetchPersonajes(results.length / 10 + 1));
    }
  };

  const handlePersonaPress = (persona: Persona) => {
    navigation.navigate('PersonaDetalle', { persona });
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
          <Text variant="body" style={{ color: theme.text }}>Error al cargar los personajes</Text>
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
          placeholder="Buscar personaje..."
          placeholderTextColor={theme.textSecondary}
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <FlatList
          data={results}
          renderItem={({ item, index }) => (
            <PersonaCard persona={item} onPress={handlePersonaPress} />
          )}
          keyExtractor={(_, index) => `persona-${index + 1}`}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListEmptyComponent={
            <Text variant="body" style={[styles.emptyText, { color: theme.text }]}>
              No se encontraron personajes
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
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
  },
});
