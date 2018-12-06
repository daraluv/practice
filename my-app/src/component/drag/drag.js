import React, { Component } from 'react';

export default Home = () => {
    return(
      <button id="btn">创建块</button>
      <ul id='container'></ul>
    );
}


export default class CreateDragBlock{
  constructor(element,content) {
    this.element = element;
    this.content = content; 
    this.disX = 0;
    this.disY = 0;
    content.appendChild(element);
  }

  dragging() {
    let element = this.element;
    this.dragDown(element);
  }

  dragDown(element) {
    let that = this;
    element.onmousedown = function (e) {
      var e = e || window.e;
      //偏移位置 = 元素的X-元素的offset
      that.disX = e.clientX - element.offsetLeft;
      that.disY = e.clientY - element.offsetTop;
      that.dragMove(element);
      that.stopDrag();
    }
  }

  dragMove(element) {
    let _this = this;
    let clientWidth = document.documentElement.clientWidth;
    let clientHeight = document.documentElement.clientHeight;
    let elementWid = element.offsetWidth;
    let elementHeight = element.offsetHeight;  
    document.onmousemove = function (e) {
      var e = e || window.e;
      //元素位置 = 现在鼠标位置 -元素的偏移值
      let left  = e.clientX - _this.disX;
      let top = e.clientY - _this.disY;

      if(left < 0){
        left = 0;
        return;
      }

      if(top < 0){
        top = 0;
        return;
      }

      if(left > clientWidth - elementWid){
        left = clientWidth - elementWid;
        return;
      }

      if(top > clientHeight - elementHeight){
        top = clientHeight - elementHeight;
        return;
      }

      element.style.left = left + "px";
      element.style.top =  top + "px";
    }

  }

  stopDrag() {
    document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
    }
  } 
}

