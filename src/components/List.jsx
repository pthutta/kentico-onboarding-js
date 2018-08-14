import React, { PureComponent } from 'react';
import assignment from '../../public/images/assignment.gif';
import { TsComponent } from './TsComponent.tsx';
import { ListItem } from './ListItem';

export class List extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.newItem = React.createRef();
  }

  _addItem = () => {
    const { items } = this.state;

    this.setState({
      items: items.concat([{
        id: this._uuidv4(),
        text: this.newItem.current.value
      }])
    });

    this.newItem.current.value = '';
  };

  _saveItem = (id, newValue) => {
    this.setState(state => {
      const items = state.items.slice();
      items.find(i => i.id === id).text = newValue;
      return { items };
    });
  };

  _deleteItem = id => {
    this.setState(state => {
      const items = state.items.filter(i => i.id !== id);
      return { items };
    });
  }

  _uuidv4 = () => {
    return (
      [1e7] + -1e3 + -4e3 + -8e3 + -1e11)
      .replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4)
        .toString(16)
      );
  };

  render() {
    const { items } = this.state;

    return (
      <div className="row">
        {/* TODO: You can delete the assignment part once you do not need it */}
        <div className="row">
          <div className="col-sm-12">
            <p className="lead text-center">
              Desired functionality is captured in the gif image.
            </p>
            <p className="lead text-center">
              <b>Note: </b>Try to make solution easily extensible (e.g. more displayed fields per item like <code>dateCreated</code>).
            </p>
            <img src={assignment} alt="assignment" className="img--assignment" />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 text-center">
            <TsComponent name="𝕱𝖆𝖓𝖈𝖞" invisible />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-offset-2 col-md-8">
            <pre>
              {items.map((item, i) => <ListItem key={i} order={i + 1} onSave={this._saveItem} onDelete={this._deleteItem} {...item} />)}
              <input ref={this.newItem} type="text"/>
              <button type="submit" onClick={this._addItem}>Add</button>
            </pre>
          </div>
        </div>
      </div>
    );
  }
}
