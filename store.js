import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer, { initialState } from 'reducers';
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
export default (state = initialState) => {
  const middlewares = [thunkMiddleware];
  return createStore(
    reducer,
    state,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
};
