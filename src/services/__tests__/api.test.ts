import axios from 'axios';
import { getPeople, searchPeople, getFilms, searchFilms, getPlanets, searchPlanets } from '../api';
import { translatePersona, translatePelicula, translatePlaneta } from '../../utils/translations';

jest.mock('axios');

jest.mock('../../utils/translations', () => ({
  translatePersona: jest.fn((person) => person),
  translatePelicula: jest.fn((film) => film),
  translatePlaneta: jest.fn((planet) => planet),
}));

describe('API Tests', () => {
  let mockInstance: { get: jest.Mock };

  beforeEach(() => {
    mockInstance = {
      get: jest.fn(),
    };
    (axios.create as jest.Mock).mockReturnValue(mockInstance);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('getPeople should fetch and translate people data', async () => {
    const mockResponse = { data: { results: [{ name: 'Luke Skywalker' }] } };
    mockInstance.get.mockResolvedValue(mockResponse);

    const result = await getPeople(1);

    expect(mockInstance.get).toHaveBeenCalledWith('/people/?page=1');
    expect(result.results).toEqual(mockResponse.data.results);
    expect(translatePersona).toHaveBeenCalledWith(mockResponse.data.results[0]);
    expect(translatePersona).toHaveBeenCalledTimes(1);
  });

  it('searchPeople should fetch and translate search results', async () => {
    const mockResponse = { data: { results: [{ name: 'Darth Vader' }] } };
    mockInstance.get.mockResolvedValue(mockResponse);

    const result = await searchPeople('Vader');

    expect(mockInstance.get).toHaveBeenCalledWith('/people/?search=Vader');
    expect(result.results).toEqual(mockResponse.data.results);
    expect(translatePersona).toHaveBeenCalledWith(mockResponse.data.results[0]);
    expect(translatePersona).toHaveBeenCalledTimes(1);
  });

  it('getFilms should fetch and translate films data', async () => {
    const mockResponse = { data: { results: [{ title: 'A New Hope' }] } };
    mockInstance.get.mockResolvedValue(mockResponse);

    const result = await getFilms(1);

    expect(mockInstance.get).toHaveBeenCalledWith('/films/?page=1');
    expect(result.results).toEqual(mockResponse.data.results);
    expect(translatePelicula).toHaveBeenCalledWith(mockResponse.data.results[0]);
    expect(translatePelicula).toHaveBeenCalledTimes(1);
  });

  it('searchFilms should fetch and translate film search results', async () => {
    const mockResponse = { data: { results: [{ title: 'Empire Strikes Back' }] } };
    mockInstance.get.mockResolvedValue(mockResponse);

    const result = await searchFilms('Empire');

    expect(mockInstance.get).toHaveBeenCalledWith('/films/?search=Empire');
    expect(result.results).toEqual(mockResponse.data.results);
    expect(translatePelicula).toHaveBeenCalledWith(mockResponse.data.results[0]);
    expect(translatePelicula).toHaveBeenCalledTimes(1);
  });

  it('getPlanets should fetch and translate planets data', async () => {
    const mockResponse = { data: { results: [{ name: 'Tatooine' }] } };
    mockInstance.get.mockResolvedValue(mockResponse);

    const result = await getPlanets(1);

    expect(mockInstance.get).toHaveBeenCalledWith('/planets/?page=1');
    expect(result.results).toEqual(mockResponse.data.results);
    expect(translatePlaneta).toHaveBeenCalledWith(mockResponse.data.results[0]);
    expect(translatePlaneta).toHaveBeenCalledTimes(1);
  });

  it('searchPlanets should fetch and translate planet search results', async () => {
    const mockResponse = { data: { results: [{ name: 'Endor' }] } };
    mockInstance.get.mockResolvedValue(mockResponse);

    const result = await searchPlanets('Endor');

    expect(mockInstance.get).toHaveBeenCalledWith('/planets/?search=Endor');
    expect(result.results).toEqual(mockResponse.data.results);
    expect(translatePlaneta).toHaveBeenCalledWith(mockResponse.data.results[0]);
    expect(translatePlaneta).toHaveBeenCalledTimes(1);
  });
});
