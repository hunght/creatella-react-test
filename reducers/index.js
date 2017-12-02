import { combineReducers } from 'redux';
import home, { initialState as homeState } from './home';
import data from './data';

export const intitialState = {
  home: homeState,
};

export default combineReducers({
  home,
  data,
});
