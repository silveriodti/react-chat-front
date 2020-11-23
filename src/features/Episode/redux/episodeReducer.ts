import { episodeActions } from './index'

interface Action {
  type: string
  payload: {}
}

const initialState = {};

export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case episodeActions.Types.FETCHEPISODE:
      return action.payload;
    default:
      return state;
  }
}