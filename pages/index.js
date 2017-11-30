import { startClock, addCount, serverRenderClock, getEmotions } from 'actions';
import Page from 'containers/page';
import withRedux from 'next-redux-wrapper';
import { compose, setDisplayName, pure, lifecycle, withProps } from 'recompose';
import initStore from 'store';

const Counter = compose(
  setDisplayName('IndexPage'),
  withProps({
    title: 'Index page',
    linkTo: '/other',
  }),
  lifecycle({
    componentDidMount() {
      this.props.getEmotions();
    },
    componentWillUnmount() {
      clearInterval(this.timer);
    },
  }),
  pure,
)(Page);

Counter.getInitialProps = ({ store, isServer }) => {
  store.dispatch(serverRenderClock(isServer));
  store.dispatch(addCount());
  return { isServer };
};

export default withRedux(initStore, null, { startClock, getEmotions })(Counter);
