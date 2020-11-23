import apiEpisodes from '../../../shared/services/apiEpisodes';
import { episodesListActions } from './index'

interface Data {
  type: string
  payload: any
}

type Dispatch = (arg: Data) => Function

export const fetchEpisodes = () => (dispatch: Dispatch) =>
  apiEpisodes
    .get('/')
    .then(({ data }) => (
      dispatch(episodesListActions.episodesFetched(data))
    ))


