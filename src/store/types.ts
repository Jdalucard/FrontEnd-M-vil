import { Persona, Pelicula, Planeta } from '../types';

export interface ApiResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface PersonajesState {
  results: Persona[];
  loading: boolean;
  error: string | null;
  next: string | null;
  page: number;
}

export interface PeliculasState {
  results: Pelicula[];
  loading: boolean;
  error: string | null;
  next: string | null;
  page: number;
}

export interface PlanetasState {
  results: Planeta[];
  loading: boolean;
  error: string | null;
  next: string | null;
  page: number;
}
