import axios from 'axios';
import { DetailedEpisode, Episode } from '../models/episodes';

const apiClient = axios.create({
  baseURL: 'https://react-challenge-api.herokuapp.com/',
});

export const getAllEpisodes = async (): Promise<Episode[]> => {
  try {
    const response = await apiClient.get('/first-challenge/episodes');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getEpisode = async (id): Promise<DetailedEpisode> => {
  try {
    const response = await apiClient.get(`first-challenge/episodes/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
