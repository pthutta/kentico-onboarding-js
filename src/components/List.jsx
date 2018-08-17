import React, { PureComponent } from 'react';
import { OrderedMap } from 'immutable';
import { TsComponent } from './TsComponent.tsx';
import { ListItem } from './ListItem';
import { generateUuid } from '../utils/generateUuid';
import { NewListItem } from './NewListItem';
import { ItemRecord } from '../models/itemRecord';

export class List extends PureComponent {
  static displayName = 'List';

    state = {
      items: OrderedMap()
    };

   _addItem = newItemText => {
     const item = new ItemRecord({
       id: generateUuid(),
       text: newItemText
     });
     this.setState(state => ({
       items: state.items.set(item.id, item)
     }));
   };

  _saveItemText = (id, text) => {
    const changedItem = new ItemRecord({ id, text });
    this.setState(state => ({
      items: state.items.update(id, () => changedItem)
    }));
  };

  _deleteItem = id =>
    this.setState(state => ({
      items: state.items.delete(id)
    }));

  _toggleItemEditing = id =>
    this.setState(state => ({
      items: state.items.update(id, item => item.set('isBeingEdited', !item.isBeingEdited))
    }));

  render() {
    const items = this.state
      .items
      .valueSeq();

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
                    onSave={this._saveItemText}
                    onDelete={this._deleteItem}
                    onToggleItemEditing={this._toggleItemEditing}
                    item={item}
                  />
                ))}
              </ul>
              <NewListItem onAddItem={this._addItem}/>
            </pre>
          </div>
        </div>
      </div>
    );
  }
}
