import { merge } from 'ramda';

const initValue = {
  response: null,
};

const reducer = (state = initValue, action) => {
  switch (action.type) {
    case 'GET_EMOTIONS':
      return merge(state, { response: action.data });
    case 'START_REQUEST':
      return merge(state, action.data);
    case 'NO_MORE_EMOTION':
      return merge(state, action.data);
    case 'END_REQUEST':
      return merge(state, action.data);
    case 'SET_FILTER':
      return merge(state, action.data);
    default:
      return state;
  }
};

export default reducer;
