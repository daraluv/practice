import React from 'react';
// import { animationFrame, cancelFrame, getStyle } from '../Animate/css3support';
import { animate } from '../Animate/animate';
import Drag from '../Drag/index';
import './style.css';

class Slider extends React.Component {
  constructor(props){
    super(props); 
    this.speed = this.props.speed || 2000;
    this.direction = this.props.direction ||'X';
    this.auto = this.props.auto || true;
    this.effect = this.props.effect ||'easeIn';
    this.data = this.props.data || [];
    this.length = this.data.length + 1;
    this.width = this.props.width || 400;
    this.height = this.props.height || 200;
    this.index = 0;
    this.timer = 0;

    if(this.direction === 'X') {
      this.dir = parseInt(this.width);
    }else{
      this.dir = parseInt(this.height);
    }

    if(this.auto) {
      this.timer = setInterval(this.autoPlay,this.speed);    
    }

  }

  setIndex = () => {
    const ele = this.refs.sliderContent;     
    animate(ele, this.effect, {
      from: -this.dir * (this.index-1),
      to: -this.dir,
      direction: this.direction,
      maxVal: -this.dir * (this.length -1)
    }, () => {

      if (this.index >= this.length - 1) {
        this.index = 0;
        ele.style.transform = `translate${this.direction}(${0}px)`;
      }

      if (this.index < 0) {
        this.index = this.length - 1;
        ele.style.transform = `translate${this.direction}(${- this.index * this.dir}px)`;
      }

    });   
    console.log(this.index)
  }

  clickPrev = () => {
    clearInterval(this.timer);
    this.index --;
    this.setIndex();
  }

  clickNext = () => {
    clearInterval(this.timer);
    this.index ++;
    this.setIndex();
  }

  autoPlay = () => {
    this.index ++;
    this.setIndex();
  }

  touchEnd = (dis) => {
    console.log(dis)
    let that = this;
    let direction = 'left';
    if(Math.abs(dis.X) > 60 || Math.abs(dis.Y) > 60){
      if(Math.abs(dis.X) > Math.abs(dis.Y)){
        direction = dis.X > 0 ? 'right' : 'left';             
      }else{
        direction = dis.Y > 0 ? 'down' : 'top';                       
      }

      if(direction ==='left' || direction ==='down') {
        this.clickNext();
      }

      if(direction ==='right'|| direction === 'top') {
        this.clickPrev();
      }   
      console.log(direction)
    }
  }

  render() {
    const sliderItem = [...this.data,this.data[0]];
    return (
     <div className="container" ref="container" >
        <div className="prev" onClick={this.clickPrev}></div>
        <div className="next" onClick={this.clickNext}></div>
        <div ref="sliderContent" >
          <Drag className="sliderContent" onDragEnd={this.touchEnd}>           
            {sliderItem.map((item,i) =>
              <li className="sliderItem" key={i}>{item}</li>)
            }
          </Drag>
        </div>
      </div>
    )
  }

}

export default Slider;