import React from 'react';
import PropTypes from 'prop-types';
import { CheckboxItem } from './Item';

const List = React.memo(({ list, onCheckToggle, disabledList }) => (
  <div style={{ height: '260px', overflow: 'auto', border: '1px solid #e5e5e5', padding: '10px' }}>
    {
      list.map((item) => (
        <CheckboxItem
          key={item.id}
          name={item.name}
          id={item.id}
          disabledList={disabledList}
          checked={item.checked}
          onCheckToggle={onCheckToggle}
        />
      ))
    }
  </div>
));

List.propTypes = {
  list: PropTypes.array.isRequired,
  onCheckToggle: PropTypes.func.isRequired,
  disabledList: PropTypes.bool.isRequired,
};

export { List as CheckboxList };
