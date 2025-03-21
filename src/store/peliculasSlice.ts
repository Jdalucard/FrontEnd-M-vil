import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFilms, searchFilms } from '../services/api';
import { Pelicula } from '../types';
import { ApiResponse } from './types';

interface PeliculasState {
  results: Pelicula[];
  loading: boolean;
  error: string | null;
  next: string | null;
  page: number;
}

const initialState: PeliculasState = {
  results: [],
  loading: false,
  error: null,
  next: null,
  page: 1,
};

export const fetchPeliculas = createAsyncThunk<ApiResponse<Pelicula>, number>(
  'peliculas/fetchPeliculas',
  async (page: number) => {
    const response = await getFilms(page);
    return response;
  }
);

export const searchPeliculas = createAsyncThunk<ApiResponse<Pelicula>, string>(
  'peliculas/searchPeliculas',
  async (query: string) => {
    const response = await searchFilms(query);
    return response;
  }
);

const peliculasSlice = createSlice({
  name: 'peliculas',
  initialState,
  reducers: {
    resetPage: (state) => {
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeliculas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPeliculas.fulfilled, (state, action) => {
        state.loading = false;
        state.results = [...state.results, ...action.payload.results];
        state.next = action.payload.next;
        state.page += 1;
      })
      .addCase(fetchPeliculas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error al cargar las películas';
      })
      .addCase(searchPeliculas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchPeliculas.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload.results;
        state.next = action.payload.next;
      })
      .addCase(searchPeliculas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error al buscar películas';
      });
  },
});

export const { resetPage } = peliculasSlice.actions;
export default peliculasSlice.reducer;
