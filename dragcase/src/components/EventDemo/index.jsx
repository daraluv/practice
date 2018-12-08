import React from 'react';

class EventDemo extends React.Component {
  componentDidMount() {
    
  }

  clickHandler = (event) => {
    console.log(event.clientX, event.clientY);
  }

  render() {
    return (
      <div onClick={this.clickHandler}>event demo</div>
    )
  }
}

export default EventDemo;