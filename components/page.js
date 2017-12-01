import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { compose, setDisplayName, pure, setPropTypes } from 'recompose';
import Emotion from './emotion';
import AddCount from './addCount';
import { getImageSourceAdd } from 'services/restAPI';

const Page = ({
  title,
  linkTo,
  setFilter,
  emotions,
  isLoading,
  isNoMoreEmotion,
}) => (
  <div>
    <h1>{title}</h1>
    <AddCount setFilter={setFilter} />
    {emotions &&
      emotions.map(
        (item, index) =>
          index === 0 || index % 20 !== 0 ? (
            <Emotion key={item.id} item={item} />
          ) : (
            <div key={item.id}>
              <img className="ad" src={getImageSourceAdd()} />
              <Emotion key={item.id} item={item} />
            </div>
          ),
      )}
    {isLoading && <p>loading...</p>}
    {isNoMoreEmotion && <p>~ end of catalogue ~</p>}
    <nav>
      <Link href={linkTo}>
        <a>Navigate</a>
      </Link>
    </nav>
  </div>
);

export default compose(
  setDisplayName('Page'),
  setPropTypes({
    title: PropTypes.string,
    linkTo: PropTypes.string,
    light: PropTypes.bool,
    lastUpdate: PropTypes.number,
    count: PropTypes.number,
    addCount: PropTypes.func,
  }),
  pure,
)(Page);
