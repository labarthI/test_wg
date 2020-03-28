import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TagItem } from './Item'

class List extends PureComponent {
  static propTypes = {
    tags: PropTypes.array.isRequired,
    onCheckToggle: PropTypes.func.isRequired,
  };

  render() {
    const { tags, onCheckToggle } = this.props;

    return (
      tags.map((item) => <TagItem key={item.id} name={item.name} id={item.id} onCheckToggle={onCheckToggle} /> )
    );
  }
}

export { List as TagList };
