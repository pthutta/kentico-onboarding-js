import React, { PureComponent } from 'react';
import { TsComponent } from './TsComponent.tsx';
import { ListItem } from './ListItem';
import {
  checkStringLength,
  generateUUID
} from '../utils/UtilFunctions';

export class List extends PureComponent {
  static displayName = 'List';

  constructor(props) {
    super(props);

    this.state = {
      newItem: '',
      items: []
    };
  }

  _addItem = () => {
    this.setState(state => ({
      items: state.items.concat([{
        id: generateUUID(),
        text: state.newItem
      }]),
      newItem: ''
    }));
  };

  _handleItemChange = e => {
    e.persist();
    this.setState(() => ({ newItem: e.target.value }));
  };

  _saveItem = (id, newValue) => {
    this.setState(state => ({
      items: state.items.map(item => (item.id === id
        ? { ...item, text: newValue }
        : item))
    }));
  };

  _deleteItem = id => {
    this.setState(state => {
      const items = state.items.filter(i => i.id !== id);
      return { items };
    });
  };

  render() {
    const { items, newItem } = this.state;
    const isValid = checkStringLength(newItem);

    return (
      <div className="row">
        <div className="row">
          <div className="col-sm-12 text-center">
            <TsComponent name="𝕱𝖆𝖓𝖈𝖞" invisible />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-offset-2 col-md-8">
            <pre>
              <ul className="list-group list-group-flush">
                {items.map((item, i) => (
                  <ListItem
                    key={item.id}
                    order={i + 1}
                    onSave={this._saveItem}
                    onDelete={this._deleteItem}
                    {...item}
                  />
                ))}
              </ul>
              <form className="form-inline"> {/* nova komponenta */}
                <div className={"form-group " + (isValid ? "has-success" : "has-error")}>
                  <input type="text" className="form-control" value={this.state.newItem} placeholder="New item" onChange={this._handleItemChange}/>
                  <button type="button" className="btn btn-default" onClick={this._addItem} disabled={!isValid}>Add</button>
                </div>
              </form>
            </pre>
          </div>
        </div>
      </div>
    );
  }
}
