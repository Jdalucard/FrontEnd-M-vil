import { Persona, Pelicula, Planeta } from '../types';

export const translatePersona = (persona: unknown): Persona => {
  if (typeof persona !== 'object' || persona === null) {
    throw new Error('Invalid persona data');
  }
  const p = persona as Record<string, any>;

  return {
    nombre: p.name ?? '',
    altura: p.height ?? '',
    peso: p.mass ?? '',
    colorCabello: p.hair_color ?? '',
    colorPiel: p.skin_color ?? '',
    colorOjos: p.eye_color ?? '',
    fechaNacimiento: p.birth_year ?? '',
    genero: p.gender ?? '',
    mundoNatal: p.homeworld ?? '',
    peliculas: p.films ?? [],
    especies: p.species ?? [],
    vehiculos: p.vehicles ?? [],
    navesEstelares: p.starships ?? [],
    creado: p.created ?? '',
    editado: p.edited ?? '',
    url: p.url ?? '',
  };
};

export const translatePelicula = (pelicula: unknown): Pelicula => {
  if (typeof pelicula !== 'object' || pelicula === null) {
    throw new Error('Invalid pelicula data');
  }
  const p = pelicula as Record<string, any>;

  return {
    titulo: p.title ?? '',
    episodioId: p.episode_id ?? 0,
    apertura: p.opening_crawl ?? '',
    director: p.director ?? '',
    productor: p.producer ?? '',
    fechaLanzamiento: p.release_date ?? '',
    personajes: p.characters ?? [],
    planetas: p.planets ?? [],
    navesEstelares: p.starships ?? [],
    vehiculos: p.vehicles ?? [],
    especies: p.species ?? [],
    creado: p.created ?? '',
    editado: p.edited ?? '',
    url: p.url ?? '',
  };
};

export const translatePlaneta = (planeta: unknown): Planeta => {
  if (typeof planeta !== 'object' || planeta === null) {
    throw new Error('Invalid planeta data');
  }
  const p = planeta as Record<string, any>;

  return {
    nombre: p.name ?? '',
    periodoRotacion: p.rotation_period ?? '',
    periodoOrbital: p.orbital_period ?? '',
    diametro: p.diameter ?? '',
    clima: p.climate ?? '',
    gravedad: p.gravity ?? '',
    terreno: p.terrain ?? '',
    superficieAgua: p.surface_water ?? '',
    poblacion: p.population ?? '',
    residentes: p.residents ?? [],
    peliculas: p.films ?? [],
    creado: p.created ?? '',
    editado: p.edited ?? '',
    url: p.url ?? '',
  };
};
