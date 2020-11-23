import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import recuder from './reducer';

const middlewares = applyMiddleware(thunk);

const store = createStore(recuder, composeWithDevTools(middlewares));

export default store;
