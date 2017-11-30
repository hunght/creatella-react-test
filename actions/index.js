import { TICK, ADD } from 'constants/actionTypes';
import { getEmotionsAPI } from 'services/restAPI';
import { Observable } from 'rxjs';

export const addCount = () => ({ type: ADD });

export const setClock = (light, ts) => ({ type: TICK, light, ts });

export const serverRenderClock = isServer => dispatch =>
  dispatch(setClock(!isServer, Date.now()));

export const startClock = () => dispatch =>
  setInterval(() => dispatch(setClock(true, Date.now())), 800);

const handleError = error => {
  alert(error.toString());
};

export const getEmotions = () => dispatch => {
  Observable.from(getEmotionsAPI({ page: 0, limit: 15 })).subscribe(
    result => dispatch({ type: 'GET_EMOTIONS', data: result }),
    error => {
      handleError(error);
    },
    () => {
      console.log('finished getEmotions');
    },
  );
};
