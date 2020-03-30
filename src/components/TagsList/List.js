import React from 'react';
import PropTypes from 'prop-types';
import { TagItem } from './Item';

const List = React.memo(({ tags, onCheckToggle }) => (
  tags.map((item) => (
    <TagItem key={item.id} name={item.name} id={item.id} onCheckToggle={onCheckToggle} />
  ))
));

List.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  })).isRequired,
  onCheckToggle: PropTypes.func.isRequired,
};

export { List as TagList };
