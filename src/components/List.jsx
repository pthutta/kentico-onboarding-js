import React, { PureComponent } from 'react';
import { TsComponent } from './TsComponent.tsx';
import { ListItem } from './ListItem';

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
        id: this._uuidv4(),
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

  _uuidv4 = () => { // sr, export, name, npm?, testy, return
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11)
      .replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4)
        .toString(16)
      );
  };

  render() {
    const { items, newItem } = this.state;
    const isEnabled = newItem.trim().length > 0; // util funkcia

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
                <div className={"form-group " + (isEnabled ? "has-success" : "has-error")}>
                  <input type="text" className="form-control" value={this.state.newItem} placeholder="New item" onChange={this._handleItemChange}/>
                  <button type="button" className="btn btn-default" onClick={this._addItem} disabled={!isEnabled}>Add</button>
                </div>
              </form>
            </pre>
          </div>
        </div>
      </div>
    );
  }
}
