export { store } from './store';
export {
  fetchPersonajes,
  searchPersonajes,
  resetPage as resetPagePersonajes,
} from './personajesSlice';
export { fetchPeliculas, searchPeliculas, resetPage as resetPagePeliculas } from './peliculasSlice';
export { fetchPlanetas, searchPlanetas, resetPage as resetPagePlanetas } from './planetasSlice';
export { default as personajesReducer } from './personajesSlice';
export { default as peliculasReducer } from './peliculasSlice';
export { default as planetasReducer } from './planetasSlice';
export * from './types';
export * from './hooks';
