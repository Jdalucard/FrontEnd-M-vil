export interface Persona {
  nombre: string;
  altura: string;
  peso: string;
  colorCabello: string;
  colorPiel: string;
  colorOjos: string;
  fechaNacimiento: string;
  genero: string;
  mundoNatal: string;
  peliculas: string[];
  especies: string[];
  vehiculos: string[];
  navesEstelares: string[];
  creado: string;
  editado: string;
  url: string;
}

export interface Pelicula {
  titulo: string;
  episodioId: number;
  apertura: string;
  director: string;
  productor: string;
  fechaLanzamiento: string;
  personajes: string[];
  planetas: string[];
  navesEstelares: string[];
  vehiculos: string[];
  especies: string[];
  creado: string;
  editado: string;
  url: string;
}

export interface Planeta {
  nombre: string;
  periodoRotacion: string;
  periodoOrbital: string;
  diametro: string;
  clima: string;
  gravedad: string;
  terreno: string;
  superficieAgua: string;
  poblacion: string;
  residentes: string[];
  peliculas: string[];
  creado: string;
  editado: string;
  url: string;
}

export interface ApiResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
