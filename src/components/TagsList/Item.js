import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'antd';

class Item extends PureComponent {
  static propTypes = {
    onCheckToggle: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  };

  handleCheckToggle = () => this.props.onCheckToggle(this.props.id);

  render() {
    const { id, name } = this.props;

    return (
      <Tag
        closable
        onClose={this.handleCheckToggle}
        key={id}
      >
        {name}
      </Tag>
    );
  }
}

export { Item as TagItem };
