import React from 'react';
import classnames from 'classnames';
import './style.css'

var zIndex = 0;//元素层级
var isMoblie = 'ontouchstart' in window;//是否为移动端

class Drag extends React.Component {
  constructor(props) {
    super(props);
    this.elementWid = props.width || 100;
    this.elementHeight = props.height || 100;
    this.clientWidth = window.innerWidth;
    this.clientHeight = window.innerHeight;
    this._dragStart = this.dragStart.bind(this);

    this.state = {
      left:0,
      top:0
    };
  }

  dragStart(ev) {
    let target = ev.target;   
    if(isMoblie && ev.changedTouches) {
      this.clientX = ev.changedTouches[0].pageX;
      this.clientY = ev.changedTouches[0].pageY;
    } else {
      this.clientX = ev.clientX;
      this.clientY = ev.clientY;
    }
    // 偏移位置 = 鼠标的初始值 - 元素的offset
    this.disX = this.clientX - target.offsetLeft;
    this.disY = this.clientY - target.offsetTop;

    zIndex += 1;

    this._dragMove = this.dragMove.bind(this);
    this._dragEnd = this.dragEnd.bind(this);
    if(!isMoblie) {
      document.addEventListener('mousemove', this._dragMove, false);
      document.addEventListener('mouseup', this._dragEnd, false);
    }
  } 

  dragMove(ev) {
    if(isMoblie && ev.changedTouches) {
      this.clientX = ev.changedTouches[0].pageX;
      this.clientY = ev.changedTouches[0].pageY;
    } else {
      this.clientX = ev.clientX;
      this.clientY = ev.clientY;
    }   

    // 元素位置 = 现在鼠标位置 - 元素的偏移值
    let left = this.clientX - this.disX;
    let top = this.clientY - this.disY;


    if (left < 0) {
      left = 0;
    }

    if (top < 0) {
      top = 0;
    }

    if (left > this.clientWidth - this.elementWid) {
      left = this.clientWidth - this.elementWid;
    }

    if (top > this.clientHeight - this.elementHeight) {
      top = this.clientHeight - this.elementHeight;
    }

    this.setState({
      left: left,
      top: top
    });
  }

  dragEnd(e) {
    document.removeEventListener('mousemove', this._dragMove);
    document.removeEventListener('mouseup', this._dragEnd);
  }

  render() {
    const { className, width, height } = this.props;
    const { left, top } = this.state;
    
    /**
     * dragbox 为拖拽默认样式
     * className 表示可以从外部传入class修改样式
     */
    const cls = classnames('dragbox', {
      [className]: !!className
    })

    /**
     * 支持行内样式改动
     */
    const styles = {
      left,
      top,
      width,
      height,
      zIndex
    }

    return (
      <div 
        className={cls}
        onTouchStart={this._dragStart} 
        onTouchMove={(e)=>this._dragMove(e)}
        onMouseDown={this._dragStart} 
        style={styles}
      >box</div>
    )
  }
}


export default Drag;