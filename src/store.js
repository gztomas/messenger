import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import conversation from './conversation/reducer';

const initializeStore = initialState =>
  createStore(
    combineReducers({ conversation }),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );

export default initializeStore;
