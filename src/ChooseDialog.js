import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Modal } from 'antd';
import { TagList } from './components/TagsList/List';
import { CheckboxList } from './components/CheckboxList/List';
import { SelectField } from './components/SelectField';
import {
  searchByItemName, filterByItemOrder, updateListByCheck, getCheckedItemList,
} from './utils';
import { selectData } from './mockData';
import { MAX_TAGS_COUNT } from './constants';

export class ChooseDialog extends PureComponent {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })).isRequired,
    visible: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      list: props.list,
      search: null,
      filter: 0,
    };
  }

  handleCheckToggle = (id) => (
    this.setState((state) => ({ list: updateListByCheck(state.list, id) }))
  );

  handleSave = () => {
    const { onSave } = this.props;
    const { list } = this.state;

    onSave(list);
  }

  handleChangeInput = ({ target: { name, value } }) => this.setState({ [name]: value });

  handleChangeSelect = (value) => this.setState({ filter: value });

  render() {
    const { visible, onCancel } = this.props;
    const { list, search, filter } = this.state;
    const tags = getCheckedItemList(list);
    const disabledList = tags.length >= MAX_TAGS_COUNT;
    const updatedList = filterByItemOrder(searchByItemName(list, search), filter);

    return (
      <Modal
        title="Диалог выбора элементов"
        visible={visible}
        onOk={this.handleSave}
        onCancel={onCancel}
        okText="Сохранить"
        cancelText="Отмена"
      >
        <Form>
          <Input.Group compact>
            <Form.Item label="Поиск" style={{ marginRight: 10 }}>
              <Input onChange={this.handleChangeInput} name="search" />
            </Form.Item>
            <Form.Item label="Фильтр">
              <SelectField
                onChange={this.handleChangeSelect}
                list={selectData}
              />
            </Form.Item>
          </Input.Group>
        </Form>
        <CheckboxList
          disabledList={disabledList}
          list={updatedList}
          onCheckToggle={this.handleCheckToggle}
        />
        <div style={{ margin: '10px' }}>Выбранные элементы на данный момент: </div>
        <TagList tags={tags} onCheckToggle={this.handleCheckToggle} />
      </Modal>
    );
  }
}
