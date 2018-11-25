import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducer';

const initializeStore = (initialState, name) => {
  const composeEnhancers = composeWithDevTools({ name });
  return createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware)),
  );
};

export default initializeStore;
