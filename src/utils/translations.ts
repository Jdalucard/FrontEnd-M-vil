import { Persona, Pelicula, Planeta } from '../types';

export const translatePersona = (persona: any): Persona => ({
  nombre: persona.name,
  altura: persona.height,
  peso: persona.mass,
  colorCabello: persona.hair_color,
  colorPiel: persona.skin_color,
  colorOjos: persona.eye_color,
  fechaNacimiento: persona.birth_year,
  genero: persona.gender,
  mundoNatal: persona.homeworld,
  peliculas: persona.films,
  especies: persona.species,
  vehiculos: persona.vehicles,
  navesEstelares: persona.starships,
  creado: persona.created,
  editado: persona.edited,
  url: persona.url,
});

export const translatePelicula = (pelicula: any): Pelicula => ({
  titulo: pelicula.title,
  episodioId: pelicula.episode_id,
  apertura: pelicula.opening_crawl,
  director: pelicula.director,
  productor: pelicula.producer,
  fechaLanzamiento: pelicula.release_date,
  personajes: pelicula.characters,
  planetas: pelicula.planets,
  navesEstelares: pelicula.starships,
  vehiculos: pelicula.vehicles,
  especies: pelicula.species,
  creado: pelicula.created,
  editado: pelicula.edited,
  url: pelicula.url,
});

export const translatePlaneta = (planeta: any): Planeta => ({
  nombre: planeta.name,
  periodoRotacion: planeta.rotation_period,
  periodoOrbital: planeta.orbital_period,
  diametro: planeta.diameter,
  clima: planeta.climate,
  gravedad: planeta.gravity,
  terreno: planeta.terrain,
  superficieAgua: planeta.surface_water,
  poblacion: planeta.population,
  residentes: planeta.residents,
  peliculas: planeta.films,
  creado: planeta.created,
  editado: planeta.edited,
  url: planeta.url,
});
