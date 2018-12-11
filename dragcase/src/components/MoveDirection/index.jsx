import React from 'react';
import classnames from 'classnames';
import './style.css';


class MoveDirection extends React.Component {
  constructor(props) {
    super(props);
    this.direction = props.direction;
    this._move = this.move.bind(this);
    this.state = {
      left:0,
      top:0
    }
  }

  move() {
    let timerId = requestAnimationFrame(this._move);
    let ele = this.ele;
    let clientWidth = document.documentElement.clientWidth;
    let clientHeight = document.documentElement.clientHeight;
    let maxWidth = clientWidth -  ele.offsetWidth;
    let maxHeight = clientHeight - ele.offsetHeight;
    let x = ele.offsetLeft;
    let y = ele.offsetTop;
    let directionType = 1;

    switch(this.direction){
      case 'left':
      case 'up': directionType = -1;break;
      default:break;
    }

    if(this.direction === 'up' || this.direction === 'down'){
      y = y + directionType * 10;

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

    }

    if(this.direction === 'left' || this.direction === 'right'){
      x = x + directionType * 10;

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
    }
    x = x +'px';
    y = y +'px';

    this.setState({
      left: x,
      top: y
    });
  }

  render() {
    const { className, width, height } = this.props;
    const { left, top } = this.state;

    const styles = {
      left,
      top
    };

    const cls = classnames('box', {
      [className]: !!className
    });

    return (
      <div className={cls} style={styles}>box</div>
    )
  }
}

export default MoveDirection;