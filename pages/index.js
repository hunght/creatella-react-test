import {
  startClock,
  addCount,
  serverRenderClock,
  getEmotions,
  setSize,
} from 'actions';
import { Subject } from 'rxjs';
import Page from 'containers/page';
import withRedux from 'next-redux-wrapper';
import {
  compose,
  setDisplayName,
  pure,
  lifecycle,
  withProps,
  withHandlers,
} from 'recompose';
import initStore from 'store';

const Counter = compose(
  setDisplayName('IndexPage'),
  withProps({
    title: 'Index page',
    linkTo: '/other',
  }),

  withHandlers({
    handleScroll: ({ isLoading, getEmotions }) => () => {
      const windowHeight =
        'innerHeight' in window
          ? window.innerHeight
          : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight,
      );
      const windowBottom = windowHeight + window.pageYOffset;
      if (windowBottom >= docHeight && !isLoading) {
        console.log('bottom!!!');
        getEmotions({ loadmore: true });
      }
    },
  }),
  lifecycle({
    componentDidMount() {
      const { getEmotions, setSize } = this.props;
      //Call get emotions from API
      getEmotions();

      this.resize$ = new Subject();
      this.resize$
        .distinctUntilChanged()
        .debounceTime(500)
        .subscribe(() => {
          setSize({ width: window.innerWidth, height: window.innerHeight });
        });

      window.addEventListener('resize', () =>
        this.resize$.next({
          width: window.innerWidth,
          height: window.innerHeight,
        }),
      );
      window.addEventListener('scroll', this.props.handleScroll);
      setSize({ width: window.innerWidth, height: window.innerHeight });
    },
    componentWillUnmount() {
      clearInterval(this.timer);
      window.removeEventListener('scroll', this.props.handleScroll);
      window.removeEventListener('resize', this.props.setSize);
    },
  }),
  pure,
)(Page);

Counter.getInitialProps = ({ store, isServer }) => {
  store.dispatch(serverRenderClock(isServer));
  store.dispatch(addCount());
  return { isServer };
};

export default withRedux(
  initStore,
  state => ({
    emotions: state.data.response,
    size: state.count.size,
    isLoading: state.data.isLoading,
    isNoMoreEmotion: state.data.isNoMoreEmotion,
  }),
  { startClock, getEmotions, setSize },
)(Counter);
