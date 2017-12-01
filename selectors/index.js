import { createSelector } from 'reselect';
import { sortWith, prop, ascend } from 'ramda';

export const selectEmotionsWithFilter = createSelector(
  state => state.data.response,
  state => state.data.filter,
  (emotions, filter) => {
    return emotions
      ? filter ? sortWith([ascend(prop(filter))])(emotions) : emotions
      : null;
  },
);
