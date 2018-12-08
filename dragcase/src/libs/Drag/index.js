import './style.css';

var zIndex = 0;//元素层级
var isMoblie = 'ontouchstart' in window;//是否为是移动端

class Drag {
  constructor(element, content) {
    this.element = element;
    this.content = content;
    this.bindEvent();
  }

  bindEvent() {
    this._dragStart = this.dragStart.bind(this);
    this._dragMove = this.dragMove.bind(this);
    this._dragEnd = this.dragEnd.bind(this);
    if(isMoblie) {
      this.element.addEventListener('touchstart', this._dragStart, false);
      this.element.addEventListener('touchmove', this._dragMove, false);
      this.element.addEventListener('touchend', this._dragEnd, false);
      return;
    }
    this.element.addEventListener('mousedown', this._dragStart, false);
  }

  dragStart(ev) {
    const element = this.element;

    if(isMoblie && ev.changedTouches) {
      this.clientX = ev.changedTouches[0].pageX;
      this.clientY = ev.changedTouches[0].pageY;
    } else {
      this.clientX = ev.clientX;
      this.clientY = ev.clientY;
    }
      
    // 偏移位置 = 鼠标的初始值 - 元素的offset
    this.disX = this.clientX - element.offsetLeft;
    this.disY = this.clientY - element.offsetTop;

    zIndex += 1;
    element.style.zIndex = zIndex;

    if(!isMoblie) {
      document.addEventListener('mousemove', this._dragMove, false);
      document.addEventListener('mouseup', this._dragEnd, false);
    }
  }

  dragMove(ev) {
    const element = this.element;
    const clientWidth = this.content.offsetWidth;
    const clientHeight = this.content.offsetHeight;
    const elementWid = element.offsetWidth;
    const elementHeight = element.offsetHeight;

    if(isMoblie && ev.changedTouches) {
      this.clientX = ev.changedTouches[0].pageX;
      this.clientY = ev.changedTouches[0].pageY;
      ev.preventDefault();
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

    if (left > clientWidth - elementWid) {
      left = clientWidth - elementWid;
    }

    if (top > clientHeight - elementHeight) {
      top = clientHeight - elementHeight;
    }

    element.style.left = left + "px";
    element.style.top = top + "px";
  }

  dragEnd() {
    document.removeEventListener('mousemove', this._dragMove);
    document.removeEventListener('mouseup', this._dragEnd);
  }
}

export default Drag;