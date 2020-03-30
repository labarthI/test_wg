import React from 'react';
import PropTypes from 'prop-types';
import { getEndingTitle } from '../utils';

export const Title = React.memo(({ count }) => (
  <div style={{ margin: '10px 0' }}>
    {`На данный момент у вас выбрано ${count} элемент${getEndingTitle(count)}:`}
  </div>
));

Title.propTypes = {
  count: PropTypes.number.isRequired,
};
