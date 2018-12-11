import React from 'react';
// import classnames from 'classnames';
import './style.css';


class MoveDirection extends React.Component {
  constructor(props) {
    super(props);
    this._move = this.move.bind(this);
    this.elementWid = props.width || 100;
    this.elementHeight = props.height || 100;
    this.state = {
      left:100,
      top:100
    }
  }

  move(type) {
    let direction = type;
    let timerId = requestAnimationFrame(this._move);
    let clientWidth = document.documentElement.clientWidth;
    let clientHeight = document.documentElement.clientHeight;
    let maxWidth = clientWidth -  this.elementWid;
    let maxHeight = clientHeight - this.elementHeight;
    let x = this.state.left;
    let y = this.state.top;
    let directionType = 1;

    switch(direction){
      case 'left':
      case 'up': directionType = -1;break;
      default:break;
    }

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
    const { className, width, height } = this.props;
    const { left, top } = this.state;
    const styles = {
      left,
      top,
      width,
      height
    };

    // const cls = classnames('box', {
    //   [className]: !!className
    // });

    return (
      <div>
        <div className="btn-group">
          <button onClick={(e) => this._move('up', e)}>up</button>
          <button onClick={(e) => this._move('down', e)}>down</button>
          <button onClick={(e) => this._move('left', e)}>left</button>
          <button onClick={(e) => this._move('right', e)}>right</button>
        </div>       
        <div className="box" style={styles}>box</div>
      </div>
    )
  }
}

export default MoveDirection;