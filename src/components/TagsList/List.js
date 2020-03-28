import React from 'react';
import PropTypes from 'prop-types';
import { TagItem } from './Item'

const List = React.memo(({ tags, onCheckToggle }) => (
  tags.map((item) => <TagItem key={item.id} name={item.name} id={item.id} onCheckToggle={onCheckToggle} />)
));

List.propTypes = {
  tags: PropTypes.array.isRequired,
  onCheckToggle: PropTypes.func.isRequired,
};

export { List as TagList };
