import React, { PureComponent } from 'react';

export class ListItem extends PureComponent {
  render() {
    const { order, text } = this.props;
    return (
      <div>
        <label>{order}.</label>
        <label>{text}</label>
      </div>
    );
  }
}
