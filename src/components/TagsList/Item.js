import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'antd';

const Item = React.memo(({ id, name, onCheckToggle }) => {
  const onCheckToggleMemoized = useCallback(() => onCheckToggle(id),[id]);

  return (
    <Tag
      closable
      onClose={onCheckToggleMemoized}
      key={id}
    >
      {name}
    </Tag>
  )
});

Item.propTypes = {
  onCheckToggle: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export { Item as TagItem };
