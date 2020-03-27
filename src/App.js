import React, { PureComponent } from 'react';
import './App.css';
import { Button, Tag } from 'antd';
import { ChooseDialog } from './components/ChooseDialog';
import { list } from './mockData'

class App extends PureComponent {
  state = {
    visible: true,
    list,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleSave = (e) => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  handleCheck = (index) =>  {}

  render() {
    const { list, visible } = this.state;

    return (
      <div className="App">
        <h1 className="title">Выбор элементов</h1>
        <div style={{ margin: '10px 0'}}>На данный момент у вас выбрано x элементов:</div>
        <Tag closable onClose={Function.prototype}>
          Элемент 5
        </Tag>
        <Tag closable onClose={Function.prototype}>
          Элемент 51
        </Tag>
        <br />
        <br />
        <Button>Изменить мой выбор</Button>
        <ChooseDialog
          list={list}
          visible={visible}
          onSave={this.handleSave}
          onCacnel={this.handleCancel}
          onShow={this.showModal}
          onCheck={this.handleCheck}
        />
      </div>
    );
  }

}

export default App;
