import { getEmotionsAPI } from 'services/restAPI';
import { concat } from 'ramda';
import { Observable } from 'rxjs';

const PAGE_LIMIT = 20;

export const setSize = ({ width, height }) => ({
  type: 'SET_SIZE',
  data: {
    width,
    height,
  },
});

export const setFilter = filter => ({
  type: 'SET_FILTER',
  data: {
    filter,
  },
});

const handleError = error => {
  alert(error.toString());
};

export const getEmotions = props => (dispatch, getState) => {
  const loadmore = props ? props.loadmore : false;
  if (loadmore && getState().data.isNoMoreEmotion) {
    return;
  }
  const page = loadmore ? getState().data.page + 1 : 1;
  dispatch({
    type: 'START_REQUEST',
    data: loadmore
      ? { isLoading: true }
      : { isLoading: true, isNoMoreEmotion: false },
  });

  Observable.from(
    getEmotionsAPI({
      page,
      limit: PAGE_LIMIT,
    }),
  ).subscribe(
    result => {
      if (result.length < PAGE_LIMIT) {
        dispatch({ type: 'NO_MORE_EMOTION', data: { isNoMoreEmotion: true } });
      }
      dispatch({
        type: 'GET_EMOTIONS',
        data: loadmore ? concat(getState().data.response, result) : result,
      });
    },
    error => {
      handleError(error);
    },
    () => {
      getEmotionsAPI({
        page: page + 1,
        limit: PAGE_LIMIT,
      });
      dispatch({ type: 'END_REQUEST', data: { isLoading: false, page } });
    },
  );
};
