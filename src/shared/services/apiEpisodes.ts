import axios from 'axios'

const episodesApi = 'https://react-challenge-api.herokuapp.com/first-challenge/episodes'

const url = episodesApi;

const apiEpisodes = axios.create({
  baseURL: url,
})

export default apiEpisodes