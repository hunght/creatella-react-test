import { combineReducers } from 'redux';
import count, { initialState as countState } from './count';
import data from './data';

export const intitialState = {
  count: countState,
};

export default combineReducers({
  count,
  data,
});
