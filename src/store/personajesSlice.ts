import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPeople, searchPeople } from '../services/api';
import { Persona } from '../types';
import { ApiResponse } from './types';

interface PersonajesState {
  results: Persona[];
  loading: boolean;
  error: string | null;
  next: string | null;
  page: number;
}

const initialState: PersonajesState = {
  results: [],
  loading: false,
  error: null,
  next: null,
  page: 1,
};

export const fetchPersonajes = createAsyncThunk<ApiResponse<Persona>, number>(
  'personajes/fetchPersonajes',
  async (page: number) => {
    const response = await getPeople(page);
    return response;
  }
);

export const searchPersonajes = createAsyncThunk<ApiResponse<Persona>, string>(
  'personajes/searchPersonajes',
  async (query: string) => {
    const response = await searchPeople(query);
    return response;
  }
);

const personajesSlice = createSlice({
  name: 'personajes',
  initialState,
  reducers: {
    resetPage: (state) => {
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPersonajes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPersonajes.fulfilled, (state, action) => {
        state.loading = false;
        state.results = [...state.results, ...action.payload.results];
        state.next = action.payload.next;
        state.page += 1;
      })
      .addCase(fetchPersonajes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error al cargar los personajes';
      })
      .addCase(searchPersonajes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchPersonajes.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload.results;
        state.next = action.payload.next;
      })
      .addCase(searchPersonajes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error al buscar personajes';
      });
  },
});

export const { resetPage } = personajesSlice.actions;
export default personajesSlice.reducer;
