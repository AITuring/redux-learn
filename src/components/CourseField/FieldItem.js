import React from 'react';

class FieldItem extends React.Component {
  render() {
    const { item } = this.props;
    return (

      <div className="m-2">{`${item.id}:   ${item.title}`}</div>
    )
  }

}

export default FieldItem;
