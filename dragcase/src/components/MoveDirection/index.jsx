import React from 'react';
import './style.css';


class MoveDirection extends React.Component {
  constructor(props) {
    super(props);
    this.elementWid = props.width || 100;
    this.elementHeight = props.height || 100;
    this.state = {
      left:100,
      top:100
    }
  }

  move = (type, e) => {
    let direction = type;
    let timerId = requestAnimationFrame(this.move.bind(this, type));
    let clientWidth = document.documentElement.clientWidth;
    let clientHeight = document.documentElement.clientHeight;
    let maxWidth = clientWidth -  this.elementWid;
    let maxHeight = clientHeight - this.elementHeight;
    let x = this.state.left;
    let y = this.state.top;
    let directionType = 1;

    if(direction === 'up' || direction === 'down'){
      y = this.state.top + directionType * 10;
    
      if(y < 0){
        y = 0;
        cancelAnimationFrame(timerId);
        return;
      }

      if(y > maxHeight){
        y = maxHeight;
        cancelAnimationFrame(timerId);
        return;
      }

      this.setState({
        top: y
      });

    }

    if(direction === 'left' || direction === 'right'){
      x = this.state.left + directionType * 10;

      if(x < 0) {
        x = 0;
        cancelAnimationFrame(timerId);
        return;
      }

      if(x > maxWidth) {
        x = maxWidth;
        cancelAnimationFrame(timerId);
        return;
      }


      this.setState({
        left: x,
      });
    }
    
  
  }

  render() {
    const { width, height } = this.props;
    const { left, top } = this.state;
    const styles = {
      left,
      top,
      width,
      height
    };

    return (
      <div>
        <div className="btn-group">
          <button onClick={(e) => this.move('up')}>up</button>
          <button onClick={(e) => this.move('down')}>down</button>
          <button onClick={(e) => this.move('left')}>left</button>
          <button onClick={(e) => this.move('right')}>right</button>
        </div>       
        <div className="box" style={styles}>box</div>
      </div>
    )
  }
}

export default MoveDirection;