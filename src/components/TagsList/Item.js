import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'antd';

const Item = React.memo(({ id, name, onCheckToggle }) => (
  <Tag
    closable
    onClose={useCallback(() => onCheckToggle(id), [onCheckToggle, id])}
    key={id}
  >
    {name}
  </Tag>
));

Item.propTypes = {
  onCheckToggle: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export { Item as TagItem };
