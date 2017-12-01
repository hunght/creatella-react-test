import { merge } from 'ramda';
export const initialState = {};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case 'SET_SIZE': {
      return merge(state, { size: action.data });
    }

    default: {
      return state;
    }
  }
};
