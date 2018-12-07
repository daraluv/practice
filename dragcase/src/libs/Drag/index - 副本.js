import './style.css';

var zIndex = 0;
var isMoblie = false;

class Drag {
  constructor(element, content) {
    this.element = element;
    this.content = content;
    this.bindEvent();
  }

  bindEvent() {
    if("ontouchstart" in window){
      isMoblie = true;
      this._touchstart = this.touchstart.bind(this);
      this._touchmove = this.touchmove.bind(this);
      this.element.addEventListener('touchstart', this._touchstart, false);
      this.element.addEventListener('touchmove', this._touchmove, false);
    }
    this._mousedown = this.mousedown.bind(this);
    this.element.addEventListener('mousedown', this._mousedown, false);
  }

  touchstart(e) {
    const element = this.element;
    // 偏移位置 = 鼠标的初始值 - 元素的offset
    this.disX = e.changedTouches[0].pageX - element.offsetLeft;
    this.disY = e.changedTouches[0].pageY - element.offsetTop;
  }

  touchmove(e) {
    console.log(e)
    const element = this.element;
    let _this = this;
    let clientWidth = this.content.offsetWidth;
    let clientHeight = this.content.offsetHeight;
    let elementWid = element.offsetWidth;
    let elementHeight = element.offsetHeight;
    // const ev = e.target;
    // 元素位置 = 现在鼠标位置 - 元素的偏移值
    let left = e.changedTouches[0].pageX - _this.disX;
    let top = e.changedTouches[0].pageY - _this.disY;

    if (left < 0) {
      left = 0;
      return;
    }

    if (top < 0) {
      top = 0;
      return;
    }

    if (left > clientWidth - elementWid) {
      left = clientWidth - elementWid;
      return;
    }

    if (top > clientHeight - elementHeight) {
      top = clientHeight - elementHeight;
      return;
    }

    element.style.left = left + "px";
    element.style.top = top + "px";
  }

  mousedown(e) {
    const element = this.element;
    const ev = e || window.event;

    // 偏移位置 = 鼠标的初始值 - 元素的offset
    this.disX = ev.clientX - element.offsetLeft;
    this.disY = ev.clientY - element.offsetTop;

    zIndex += 1;
    element.style.zIndex = zIndex;

    this._mousemove = this.mousemove.bind(this);
    this._mouseup = this.mouseup.bind(this);
    document.addEventListener('mousemove', this._mousemove, false);
    document.addEventListener('mouseup', this._mouseup, false);
  }

  mousemove(e) {
    const element = this.element;
    let _this = this;
    let clientWidth = this.content.offsetWidth;
    let clientHeight = this.content.offsetHeight;
    let elementWid = element.offsetWidth;
    let elementHeight = element.offsetHeight;
    e = e || window.e;
    // 元素位置 = 现在鼠标位置 - 元素的偏移值
    let left = e.clientX - _this.disX;
    let top = e.clientY - _this.disY;

    if (left < 0) {
      left = 0;
      return;
    }

    if (top < 0) {
      top = 0;
      return;
    }

    if (left > clientWidth - elementWid) {
      left = clientWidth - elementWid;
      return;
    }

    if (top > clientHeight - elementHeight) {
      top = clientHeight - elementHeight;
      return;
    }

    element.style.left = left + "px";
    element.style.top = top + "px";
  }

  mouseup() {
    // this.element.removeEventListener('mousedown', this._mousedown);
    document.removeEventListener('mousemove', this._mousemove);
    document.removeEventListener('mouseup', this._mouseup);
  }
}

export default Drag;