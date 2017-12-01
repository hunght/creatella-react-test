import moment from 'moment';

export const humanize = (value, decimals = 0) =>
  Number(value).toFixed(decimals);

export const dateToString = str => {
  const date = moment(str);
  if (Math.abs(date.diff(new Date(), 'day')) <= 7) {
    return date.fromNow();
  } else {
    return date.format('L');
  }
};
