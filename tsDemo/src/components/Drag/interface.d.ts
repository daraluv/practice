declare namespace drag {
  interface DragProps {
    width?: number,
    height?: number,
    left?: number,
    top?: number,
    zIndex?: number,
    maxWidth?: number,
    maxHeight?: number,
    className?: string,
    onDragEnd?: (target: DragEndParam) => any,
    children?: any
  }

  interface DragState {
    left: number,
    top: number
  }

  interface DragEndParam {
    X: number,
    Y: number
  }

  type TouchEvent = React.TouchEvent & React.MouseEvent;

  interface LiteralO {
    width: number,
    height: number,
    [key: string]: any
  }
}