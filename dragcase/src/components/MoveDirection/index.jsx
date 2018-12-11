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
    this.timerId = requestAnimationFrame(this.move.bind(this, type));
    let clientWidth = document.documentElement.clientWidth;
    let clientHeight = document.documentElement.clientHeight;
    let maxWidth = clientWidth -  this.elementWid;
    let maxHeight = clientHeight - this.elementHeight;
    
    /**
     * 多使用ES6的语法
     */
    let { top, left }  = this.state;

    // 向上移动，top减少
    if (type === 'up') {
      top -= 1;
    }

    if (type === 'down') {
      top += 1;
    }

    if (type === 'left') {
      left -= 1;
    }

    if (type === 'right') {
      left += 1;
    }

    if (top < 0 || top > maxHeight || left < 0 || left > maxWidth) {
      return cancelAnimationFrame(this.timerId);
    }

    this.setState({
      top, left
    });
  }

  clickHandler = (type) => {
    cancelAnimationFrame(this.timerId);
    this.move(type);
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
          <button onClick={(e) => this.clickHandler('up')}>up</button>
          <button onClick={(e) => this.clickHandler('down')}>down</button>
          <button onClick={(e) => this.clickHandler('left')}>left</button>
          <button onClick={(e) => this.clickHandler('right')}>right</button>
        </div>       
        <div className="box" style={styles}>box</div>
      </div>
    )
  }
}

export default MoveDirection;