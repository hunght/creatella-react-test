import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { compose, setDisplayName, pure, setPropTypes } from 'recompose';
import Emotion from './emotion';
import AddCount from './addCount';

const Page = ({
  title,
  linkTo,
  count,
  addCount,
  emotions,
  isLoading,
  isNoMoreEmotion,
}) => (
  <div>
    <h1>{title}</h1>
    <AddCount count={count} addCount={addCount} />
    {emotions && emotions.map(item => <Emotion key={item.id} item={item} />)}
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
