import React from 'react';

class EventDemo extends React.Component {
  componentDidMount() {
    
  }

  clickHandler = (event) => {
    console.log(event, event.clientY);
  }

  render() {
    return (
      <div onMouseDown={this.clickHandler}>event demo</div>
    )
  }
}

export default EventDemo;