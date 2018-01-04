import React from 'react';
import PropTypes from 'prop-types';
import { compose, setDisplayName, pure, setPropTypes } from 'recompose';
import { getImageSourceAdd } from 'services/restAPI';
import Emotion from './emotion';
import ShortSelect from './shortSelect';

const Page = ({ title, setFilter, emotions, isLoading, isNoMoreEmotion }) => (
  <div>
    <h1>{title}</h1>
    <ShortSelect setFilter={setFilter} />
    {emotions &&
      emotions.map(
        (item, index) =>
          index === 0 || index % 20 !== 0 ? (
            <Emotion key={item.id} item={item} />
          ) : (
            [
              <img
                key={item.id + 'ad'}
                className="ad"
                src={getImageSourceAdd()}
              />,
              <Emotion key={item.id} item={item} />
            ]
          )
      )}
    {isLoading && <p>loading...</p>}
    {isNoMoreEmotion && <p>~ end of catalogue ~</p>}
  </div>
);

export default compose(
  setDisplayName('Page'),
  setPropTypes({
    title: PropTypes.string,
    linkTo: PropTypes.string,
    light: PropTypes.bool,
    lastUpdate: PropTypes.number,
    home: PropTypes.number,
    addCount: PropTypes.func
  }),
  pure
)(Page);
