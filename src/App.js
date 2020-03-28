import React, { PureComponent } from 'react';
import { Button } from 'antd';
import { ChooseDialog } from './ChooseDialog';
import { TagList } from './components/TagsList/List';
import { Title } from './components/Title';
import { list } from './mockData'
import { getCheckedItemList, updateListByCheck } from './utils';

class App extends PureComponent {
  state = {
    visible: false,
    list,
  };

  showModal = () => this.setState({ visible: true });

  handleSave = (list) => this.setState({ visible: false, list });

  handleCancel = () => this.setState({ visible: false });

  handleCheckToggle = (id) =>  this.setState((state) => ({ list: updateListByCheck(state.list, id) }));

  render() {
    const { list, visible } = this.state;
    const tags = getCheckedItemList(this.state.list);
    return (
      <div style={{ maxWidth: 1024, margin: '0 auto', padding: 50}}>
        <h1>Выбор элементов</h1>
        <Title count={tags.length} />
        <TagList tags={tags} onCheckToggle={this.handleCheckToggle} />
        <Button style={{ display: 'block' , marginTop: '10px'}} onClick={this.showModal}>Изменить мой выбор</Button>
        {this.state.visible ?
          <ChooseDialog
            list={list}
            visible={visible}
            onSave={this.handleSave}
            onCancel={this.handleCancel}
            onShow={this.showModal}
          /> : null}
      </div>
    );
  }
}

export default App;
