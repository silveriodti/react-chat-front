import { combineReducers } from "redux";

import episodes from '../features/EpisodesList/redux';
import episode from "../features/Episode/redux";

const reducer = combineReducers({
  episodes,
  episode,
})

export default reducer