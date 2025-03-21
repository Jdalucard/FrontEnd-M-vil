import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPlanets, searchPlanets } from '../services/api';
import { Planeta } from '../types';
import { ApiResponse } from './types';

interface PlanetasState {
  results: Planeta[];
  loading: boolean;
  error: string | null;
  next: string | null;
  page: number;
}

const initialState: PlanetasState = {
  results: [],
  loading: false,
  error: null,
  next: null,
  page: 1,
};

export const fetchPlanetas = createAsyncThunk<ApiResponse<Planeta>, number>(
  'planetas/fetchPlanetas',
  async (page: number) => {
    const response = await getPlanets(page);
    return response;
  }
);

export const searchPlanetas = createAsyncThunk<ApiResponse<Planeta>, string>(
  'planetas/searchPlanetas',
  async (query: string) => {
    const response = await searchPlanets(query);
    return response;
  }
);

const planetasSlice = createSlice({
  name: 'planetas',
  initialState,
  reducers: {
    resetPage: (state) => {
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlanetas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlanetas.fulfilled, (state, action) => {
        state.loading = false;
        state.results = [...state.results, ...action.payload.results];
        state.next = action.payload.next;
        state.page += 1;
      })
      .addCase(fetchPlanetas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error al cargar los planetas';
      })
      .addCase(searchPlanetas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchPlanetas.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload.results;
        state.next = action.payload.next;
      })
      .addCase(searchPlanetas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error al buscar planetas';
      });
  },
});

export const { resetPage } = planetasSlice.actions;
export default planetasSlice.reducer;
