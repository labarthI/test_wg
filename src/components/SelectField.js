import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

export const SelectField = React.memo(({ onChange, list, defaultValue = list[0].value }) => (
  <Select onChange={onChange} defaultValue={defaultValue} style={{ width: 150 }}>
    {list.map((option) => <Select.Option key={option.value} value={option.value}>{option.label}</Select.Option>)}
  </Select>
));


SelectField.PropTypes = {
  onChange: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number ]),
}
