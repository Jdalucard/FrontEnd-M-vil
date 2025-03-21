import axios from 'axios';
import { translatePersona, translatePelicula, translatePlaneta } from '../utils/translations';
import { ApiResponse, Persona, Pelicula, Planeta } from '../types';

const BASE_URL = 'https://swapi.dev/api';

const api = axios.create({
  baseURL: BASE_URL,
});

export const getPeople = async (page: number = 1): Promise<ApiResponse<Persona>> => {
  const response = await api.get(`/people/?page=${page}`);
  return {
    ...response.data,
    results: response.data.results.map(translatePersona),
  };
};

export const searchPeople = async (query: string): Promise<ApiResponse<Persona>> => {
  const response = await api.get(`/people/?search=${query}`);
  return {
    ...response.data,
    results: response.data.results.map(translatePersona),
  };
};

export const getFilms = async (page: number = 1): Promise<ApiResponse<Pelicula>> => {
  const response = await api.get(`/films/?page=${page}`);
  return {
    ...response.data,
    results: response.data.results.map(translatePelicula),
  };
};

export const searchFilms = async (query: string): Promise<ApiResponse<Pelicula>> => {
  const response = await api.get(`/films/?search=${query}`);
  return {
    ...response.data,
    results: response.data.results.map(translatePelicula),
  };
};

export const getPlanets = async (page: number = 1): Promise<ApiResponse<Planeta>> => {
  const response = await api.get(`/planets/?page=${page}`);
  return {
    ...response.data,
    results: response.data.results.map(translatePlaneta),
  };
};

export const searchPlanets = async (query: string): Promise<ApiResponse<Planeta>> => {
  const response = await api.get(`/planets/?search=${query}`);
  return {
    ...response.data,
    results: response.data.results.map(translatePlaneta),
  };
};
