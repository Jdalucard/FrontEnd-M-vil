import { configureStore } from '@reduxjs/toolkit';
import personajesReducer from './personajesSlice';
import peliculasReducer from './peliculasSlice';
import planetasReducer from './planetasSlice';

export const store = configureStore({
  reducer: {
    personajes: personajesReducer,
    peliculas: peliculasReducer,
    planetas: planetasReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
