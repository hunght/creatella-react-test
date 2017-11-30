import { merge } from 'ramda';

const initValue = {
  response: null,
};

const reducer = (state = initValue, action) => {
  switch (action.type) {
    case 'GET_EMOTIONS':
      return merge(state, { response: action.data });
    default:
      return state;
  }
};

export default reducer;
