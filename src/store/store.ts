import { configureStore } from '@reduxjs/toolkit';
import {
  personajesReducer,
  peliculasReducer,
  planetasReducer,
  PersonajesState,
  PeliculasState,
  PlanetasState,
} from './index';

export const store = configureStore({
  reducer: {
    personajes: personajesReducer,
    peliculas: peliculasReducer,
    planetas: planetasReducer,
  },
});

export type RootState = {
  personajes: PersonajesState;
  peliculas: PeliculasState;
  planetas: PlanetasState;
};
export type AppDispatch = typeof store.dispatch;
