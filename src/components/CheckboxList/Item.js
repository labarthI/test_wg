import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

const Item = React.memo(({
  id, name, checked, disabledList, onCheckToggle,
}) => (
  <div style={{ paddingBottom: '5px' }}>
    <Checkbox
      disabled={!checked && disabledList}
      checked={checked}
      onChange={useCallback(() => onCheckToggle(id), [onCheckToggle, id])}
      style={{ width: '100%' }}
    >
      {name}
    </Checkbox>
  </div>
));

Item.propTypes = {
  onCheckToggle: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  disabledList: PropTypes.bool.isRequired,
};

export { Item as CheckboxItem };
