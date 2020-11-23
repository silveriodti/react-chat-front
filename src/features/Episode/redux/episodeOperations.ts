import apiEpisodes from '../../../shared/services/apiEpisodes';
import { episodeActions } from './index'

interface Data {
  type: string
  payload: any
}

type Dispatch = (arg: Data) => Function

export const fetchEpisode = (id: string) => (dispatch: Dispatch) =>
  apiEpisodes
    .get(`/${id}`)
    .then(({ data }) => (
      dispatch(episodeActions.episodeFetched(data))
    ))
