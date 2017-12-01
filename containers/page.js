import { connect } from 'react-redux';
import { setFilter } from 'actions';
import { selectEmotionsWithFilter } from 'selectors';
import { compose, setDisplayName, pure } from 'recompose';
import Page from 'components/page';

export default compose(
  setDisplayName('PageContainer'),
  connect(
    state => ({
      emotions: selectEmotionsWithFilter(state),
    }),
    { setFilter },
  ),
  pure,
)(Page);
