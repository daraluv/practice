import React from 'react';
import './style.css'

var zIndex = 0;//元素层级
var isMoblie = 'ontouchstart' in window;//是否为是移动端

class Drag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        clientX: '',   //触摸按钮初始的坐标
        clientY: '',
        disX: 0, 
        disY: 0,
        clientWidth: props.width,  
        clientHeight: props.height,
        elementWid: 100,
        elementHeight:100,
        thisEle:''
    };
  }


  dragStart(e) {
    let target = e.target;
    
    if(isMoblie && e.changedTouches) {
      this.setState({
        clientX: e.changedTouches[0].pageX,
        clientY: e.changedTouches[0].pageY
      });
    } else {
      this.setState({
        clientX: e.clientX,
        clientY: e.clientY
      });
    }


    // 偏移位置 = 鼠标的初始值 - 元素的offset
    this.setState({
      disX: this.state.clientX - e.target.offsetLeft,
      disY: this.state.clientY - e.target.offsetTop
    });

    zIndex += 1;
    e.target.style.zIndex = zIndex;

    if(!isMoblie) {
      // this._dragMove = this.dragMove.bind(this);
      document.onmousemove = this.dragMove(target);
      // document.onmouseup = this.dragEnd.bind(this);
    }
  } 

  dragMove(e) {
    console.log(e)
    if(isMoblie && e.changedTouches) {
      this.setState({
        clientX: e.changedTouches[0].pageX,
        clientY: e.changedTouches[0].pageY
      });
    } else {
      // e.preventDefault();
      this.setState({
        clientX: e.clientX,
        clientY: e.clientY
      });
    }

    // 元素位置 = 现在鼠标位置 - 元素的偏移值
    let left = this.state.clientX - this.state.disX;
    let top = this.state.clientY - this.state.disY;

    if (left < 0) {
      left = 0;
    }

    if (top < 0) {
      top = 0;
    }

    if (left > this.state.clientWidth - this.state.elementWid) {
      left = this.state.clientWidth - this.state.elementWid;
    }

    if (top > this.state.clientHeight - this.state.elementHeight) {
      top = this.state.clientHeight - this.state.elementHeight;
    }

    
    e.target.style.left = left + "px";
    e.target.style.top = top + "px";
  }

  dragEnd(e) {
    if(isMoblie) {
      e.document.touchmove = null;
      e.target.touchend = null;
    }
    document.onmousemove = null;
    document.mouseup = null;
    // document.removeEventListener('mousemove', this._dragMove);
    // document.removeEventListener('mouseup', this._dragEnd);
  }

  render() {
    return (
      <div className='dargbox' 
      onTouchStart={(e)=>this.dragStart(e)} onTouchMove={(e)=>this.dragMove(e)}
      onMouseDown={(e)=>this.dragStart(e)} 
      >box</div>
    )
  }
}

export default Drag;