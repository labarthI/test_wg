import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

class Item extends PureComponent {
  static propTypes = {
    onCheckToggle: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    disabledList: PropTypes.bool.isRequired,
  };

  handleCheckToggle = () => this.props.onCheckToggle(this.props.id);

  render() {
    const { name, checked, disabledList } = this.props;
    const disabled = !checked && disabledList;

    return (
      <div style={{ marginBottom: '5px'}}>
        <Checkbox
          disabled={disabled}
          checked={checked}
          onChange={this.handleCheckToggle}
        >
          {name}
        </Checkbox>
      </div>
    );
  }
}

export { Item as CheckboxItem };
