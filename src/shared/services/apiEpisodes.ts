import axios from 'axios'

// const allOrigins = ' https://api.allorigins.win/raw?url='

const episodesApi = 'https://react-challenge-api.herokuapp.com/first-challenge/episodes'

const url = episodesApi;

const apiEpisodes = axios.create({
  baseURL: url,
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Credentials': true,
  //   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Content-Encoding, Accept',
  //   'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PATCH, PUT, DELETE'
  // }
})

export default apiEpisodes