import React from 'react';
import classnames from 'classnames';
import './style.css'

var isMoblie = 'ontouchstart' in window;//是否为移动端

class ElasticMove extends React.Component {
  constructor(props) {
    super(props);
    this.elementWid = props.width || 50;
    this.elementHeight = props.height || 50;
    this.targetLocation = props.targetLocation || 500;
    this.clientWidth = window.innerWidth;
    this.clientHeight = window.innerHeight;
    this._dragStart = this.dragStart.bind(this);

    this.state = {
      top:500,
      speed:0,
      shadowWid:this.elementWid,
      shadowHig: this.elementHeight/2.5
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
      ev.preventDefault();
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
      top: top,
      shadowWid:(this.elementWid*this.state.top)/this.targetLocation,
      shadowHig: (this.elementHeight*this.state.top)/this.targetLocation/2.5
    });
  }

  setElastic() {
    let that = this;
    cancelAnimationFrame(that.timer);
    that.timer = requestAnimationFrame(function fn(){
      that.state.speed += (that.targetLocation - that.state.top)/7;// 速度 += (目标点 - 当前值)/系数;    
      that.state.speed *= 0.7; //速度 *= 摩擦系数
      
      if( Math.round(that.state.speed) === 0 && Math.round(that.targetLocation - that.state.top) === 0) { 
        cancelAnimationFrame(that.timer);
      }else{
        that.timer = requestAnimationFrame(fn);
      }
           
      that.setState({
        top: that.state.top + that.state.speed,
        shadowWid:(that.elementWid*that.state.top)/that.targetLocation,
        shadowHig: (that.elementHeight*that.state.top)/that.targetLocation/2.5
      });  
                
    });
  }

  dragEnd = () => {
    this.setElastic();
    document.removeEventListener('mousemove', this._dragMove);
    document.removeEventListener('mouseup', this._dragEnd);
  }

  render() {
    const { width, height } = this.props;
    const { top, shadowWid, shadowHig } = this.state;

    const cls = classnames('ballbox', {
      [className]: !!className
    })

    const styles = {
      top,
      width,
      height
    }

    const shadowStyles = {
      width:shadowWid,
      height:shadowHig
    }

    return (
      <div>
        <div 
          className="ballbox"
          onTouchStart={this._dragStart} 
          onTouchMove={(e)=>this._dragMove(e)}
          onTouchEnd={this._dragEnd}
          onMouseDown={this._dragStart} 
          style={styles}
        ></div>
        <div className="shadow" style={shadowStyles}></div>
      </div>
    )
  }
}

export default ElasticMove;