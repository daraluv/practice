import * as React from 'react';
import classnames from 'classnames';
import './style.css';

const isMoblie: boolean = 'ontouchstart' in window; // 是否为移动端

class Drag extends React.Component<drag.DragProps, drag.DragState> {
  private elementWid: number;
  private elementHeight: number;
  private left: number;
  private top: number;
  private zIndex: number;
  private clientWidth: number;
  private clientHeight: number;
  
  private clientX: number;
  private clientY: number;

  private startX: number;
  private startY: number;

  private disX: number;
  private disY: number;

  private _dragStart: () => any;
  private _dragMove: () => any;
  private _dragEnd: () => any;

  constructor(props: drag.DragProps) {
    super(props);
    this.elementWid = props.width || 100;
    this.elementHeight = props.height || 100;
    this.left = props.left || 0;
    this.top = props.top || 0;
    this.zIndex = props.zIndex || 0;
    this.clientWidth = props.maxWidth || 600;
    this.clientHeight = props.maxHeight || 600;
    this._dragStart = this.dragStart.bind(this);

    this.state = {
      left: this.left,
      top: this.top
    };
  }

  public dragStart(ev: React.TouchEvent & React.MouseEvent): void {
    const target = ev.target;
    if (isMoblie && ev.changedTouches) {
      this.startX = ev.changedTouches[0].pageX;
      this.startY = ev.changedTouches[0].pageY;
    } else {
      this.startX = ev.clientX;
      this.startY = ev.clientY;
    }
    // @ts-ignore 偏移位置 = 鼠标的初始值 - 元素的offset
    this.disX = this.startX - target.offsetLeft;

    // @ts-ignore
    this.disY = this.startY - target.offsetTop;

    this.zIndex += 1;

    this._dragMove = this.dragMove.bind(this);
    this._dragEnd = this.dragEnd.bind(this);

    if (!isMoblie) {
      document.addEventListener('mousemove', this._dragMove, false);
      document.addEventListener('mouseup', this._dragEnd, false);
    }
  }

  public dragMove(ev: drag.TouchEvent): void {
    if (isMoblie && ev.changedTouches) {
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

    this.setState({ left, top });
  }

  public dragEnd(ev: drag.TouchEvent): void {
    const { onDragEnd } = this.props;
    document.removeEventListener('mousemove', this._dragMove);
    document.removeEventListener('mouseup', this._dragEnd);

    if (onDragEnd) {
      onDragEnd({
        X: this.startX - this.clientX,
        Y: this.startY - this.clientY
      })
    };
  }

  public render() {
    const { className, width = 100, height = 100, zIndex } = this.props;
    const { left, top } = this.state;

    const styles: drag.LiteralO = {
      width,
      height
    }

    if (this.props.left) {
      styles['left'] = left;
    }

    if (this.props.top) {
      styles['top'] = top;
    }

    if (zIndex) {
      styles['zIndex'] = this.zIndex;
    }

    /**
     * dragbox 为拖拽默认样式
     * className 表示可以从外部传入class修改样式
     */
    const cls = classnames('dragbox', className);

    return (
      <div
        className={cls}
        onTouchStart={this._dragStart}
        onTouchMove={this._dragMove}
        onTouchEnd={this._dragEnd}
        onMouseDown={this._dragStart}
        onMouseUp={this._dragEnd}
        style={styles}
      >
        {this.props.children}
      </div>
    )
  }
}


export default Drag;