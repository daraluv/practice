import React from 'react';
import './style.css'

var zIndex = 0;//元素层级
var isMoblie = 'ontouchstart' in window;//是否为是移动端

class Drag extends React.Component {
  constructor(props) {
    super(props);
    this.elementWid = 100;
    this.elementHeight = 100;
    this.clientWidth = props.width;
    this.clientHeight = props.height;

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
    target.style.zIndex = zIndex;

    if(!isMoblie) {
      this._dragMove = this.dragMove.bind(this);
      this._dragEnd = this.dragEnd.bind(this);
      document.addEventListener('mousemove', this._dragMove, false);
      document.addEventListener('mouseup', this._dragEnd, false);
    }
  } 

  dragMove(ev) {
    console.log(ev)
    if(isMoblie && ev.changedTouches) {
      this.clientX = ev.changedTouches[0].pageX;
      this.clientY = ev.changedTouches[0].pageY;
      // ev.preventDefault();
    } else {
      this.clientX = ev.clientX;
      this.clientY = ev.clientY;
    }    

    console.log(this.clientX , this.disX)

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
    if(isMoblie) {
      e.document.touchmove = null;
      e.target.touchend = null;
    }
    document.removeEventListener('mousemove', this._dragMove);
    document.removeEventListener('mouseup', this._dragEnd);

  }

  render() {
    return (
      <div className='dargbox' 
      onTouchStart={(e)=>this.dragStart(e)} 
      onTouchMove={(e)=>this.dragMove(e)}
      onMouseDown={(e)=>this.dragStart(e)} 
      style={{left:this.state.left,top:this.state.top}}
      >box</div>
    )
  }
}

export default Drag;