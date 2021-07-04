import React from 'react';

class FieldItem extends React.Component {
  render() {
    const {title, id, userId} = this.props.item;
    return (

      <div>{`${id}:   ${title}`}</div>
    )
  }

}

export default FieldItem;
