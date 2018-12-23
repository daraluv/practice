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
    /**
     * 是否正在自动滚动
     */
    this.autoRun = false;

    if(this.direction === 'X') {
      this.dir = parseInt(this.width);
    }else{
      this.dir = parseInt(this.height);
    }

    if(this.auto) {
      this.autoRun = true;
      this.timer = setInterval(this.autoPlay, this.speed);    
    }
  }

  /**
   * 移动到第几页
   * @param {number} index 第几页
   * @param {string} direction 方向，从 'left, right, up, down' 中取一个作为值
   */
  setIndex = (direction) => {
    let to = 0;
    const ele = this.refs.sliderContent.refs.dragElement;

    /**
     * 点击左侧按钮，sliderContent往右移动，上一页的意思
     * index 递减
     */
    if (direction === 'left') {
      // 初始位置就是极限位置的时候
      if (this.index === 0) {
        this.index = this.length - 1;
        ele.style.transform = `translate${this.direction}(${- this.index * this.dir}px)`;
      }
      to = - (this.index - 1) * this.dir;
      
      this.index --;
    }

    /**
     * 点击右侧按钮，sliderContent往左移动，下一页的意思，并且是水平方向的默认方向
     * index 递增
     */
    if (direction === 'right') {
      // 初始位置就是极限位置的时候
      if (this.index === this.length - 1) {
        this.index = 0;
        ele.style.transform = `translate${this.direction}(${0}px)`;
      }
      to = - (this.index + 1) * this.dir;
      this.index ++;
    }

    animate(ele, this.effect, { 
      to,
      direction: this.direction
    }, () => {
      if (direction === 'right' && this.index === this.length - 1) {
        ele.style.transform = `translate${this.direction}(${0}px)`;
        this.index = 0;
      }
      if (direction === 'left' && this.index === 0) {
        ele.style.transform = `translate${this.direction}(${- this.index * this.dir}px)`;
        this.index = this.length - 1;
      }
      console.log(this.timer);
      if (!this.autoRun) {
        this.timer = setInterval(() => this.setIndex(direction), this.speed);
        this.autoRun = true;
      }
    })
  }

  clickPrev = () => {
    this.autoRun = false;
    clearInterval(this.timer);
    this.setIndex('left');
  }

  clickNext = () => {
    this.autoRun = false;
    clearInterval(this.timer);
    this.setIndex('right');
  }

  autoPlay = () => {
    this.setIndex('right');
  }

  touchEnd = (dis) => {
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
    const sliderItem = [...this.data, this.data[0]];
    return (
     <div className="container" ref="container" >
        <div className="prev" onClick={this.clickPrev}></div>
        <div className="next" onClick={this.clickNext}></div>
        <Drag className="sliderContent" ref="sliderContent" onDragEnd={this.touchEnd}>
          {sliderItem.map((item,i) =>
            <li className="sliderItem" key={i}>{item}</li>)
          }
        </Drag>
      </div>
    )
  }
}

export default Slider;