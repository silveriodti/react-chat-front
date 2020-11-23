import { episodesListActions } from './index'

interface Action {
  type: string
  payload: {}
}

const initialState = {};

export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case episodesListActions.Types.FETCHEPISODES:
      return action.payload
    default:
      return state;
  }
}