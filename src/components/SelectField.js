import React from 'react';
import { Select } from 'antd';

export const SelectField = ({ onChange, list, defaultValue }) => (
  <Select onChange={onChange} defaultValue={defaultValue} style={{ width: 150 }}>
    {list.map((option) => <Select.Option key={option.value} value={option.value}>{option.label}</Select.Option>)}
  </Select>
);
