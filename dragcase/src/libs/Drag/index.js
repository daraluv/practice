import './style.css';

var zIndex = 0;

class Drag {
  constructor(element, content) {
    this.element = element;
    this.content = content;
    this.disX = 0;
    this.disY = 0;

    this._mousedown = this.mousedown.bind(this);
    this.element.addEventListener('mousedown', this._mousedown, false);
  }

  mousedown(e) {
    const element = this.element;
    e = e || window.event;

    // 偏移位置 = 鼠标的初始值 - 元素的offset
    this.disX = e.clientX - element.offsetLeft;
    this.disY = e.clientY - element.offsetTop;

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
    let clientWidth = document.documentElement.clientWidth;
    let clientHeight = document.documentElement.clientHeight;
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