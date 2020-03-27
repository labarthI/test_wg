import React from 'react';
import { Checkbox, Form, Input, Modal, Select, Tag } from 'antd';

export const ChooseDialog = ({ list, visible, onSave, onCancel, onCheck }) => (
  <Modal
    title="Диалог выбора элементов"
    visible={visible}
    onOk={onSave}
    onCancel={onCancel}
    okText="Сохранить"
    cancelText="Отмена"
  >
    <Form>
      <Input.Group compact>
        <Form.Item label="Поиск" style={{ marginRight: 10 }}>
          <Input />
        </Form.Item>

        <Form.Item label="Фильтр">
          <Select defaultValue="never" style={{ width: 150 }}>
            <Select.Option value="never">Без фильтра</Select.Option>
            <Select.Option value="ten"> Номер > 10</Select.Option>
            <Select.Option value="hundred">Номер > 100</Select.Option>
            <Select.Option value="two-hundrer">Номер > 200</Select.Option>
          </Select>
        </Form.Item>
      </Input.Group>
    </Form>
    <div style={{ height: '260px', overflow: 'auto', border: '1px solid #e5e5e5', padding: '10px' }}>
      {list.map((item) => <div key={item.id} style={{ marginBottom: '5px'}}><Checkbox checked={item.checked} onChange={() => onCheck(item.id)}>{item.name}</Checkbox></div>)}
    </div>
    <div style={{ margin: '10px'}}>Выбранные элементы на данный момент: </div>
    <Tag closable onClose={Function.prototype}>
      Элемент 5
    </Tag>
    <Tag closable onClose={Function.prototype}>
      Элемент 51
    </Tag>
  </Modal>
);
