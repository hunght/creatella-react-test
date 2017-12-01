import { combineReducers } from 'redux';
import count, { initialState as countState } from './home';
import data from './data';

export const intitialState = {
  home: countState,
};

export default combineReducers({
  home: count,
  data,
});
