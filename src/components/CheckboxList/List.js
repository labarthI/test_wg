import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CheckboxItem } from './Item';

class List extends PureComponent {
  static propTypes = {
    list: PropTypes.array.isRequired,
    onCheckToggle: PropTypes.func.isRequired,
    disabledList: PropTypes.bool.isRequired
  };

  render() {
    const { list, onCheckToggle, disabledList } = this.props;

    return (
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
    );
  }
}

export { List as CheckboxList };
