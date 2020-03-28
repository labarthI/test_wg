import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

const Item = React.memo(({ id, name, checked, disabledList, onCheckToggle }) => {
  const disabled = !checked && disabledList;
  const onCheckToggleMemoized = useCallback(() => { onCheckToggle(id) }, [id]);

  return (
    <div style={{ paddingBottom: '5px' }}>
      <Checkbox
        disabled={disabled}
        checked={checked}
        onChange={onCheckToggleMemoized}
        style={{ width: '100%'}}
      >
        {name}
      </Checkbox>
    </div>
  )
});

Item.propTypes = {
  onCheckToggle: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  disabledList: PropTypes.bool.isRequired,
};

export { Item as CheckboxItem };
