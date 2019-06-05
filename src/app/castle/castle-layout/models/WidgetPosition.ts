export interface WidgetSize {
  height: number;
  width: number;
}
export interface WidgetPosition {
  left: number;
  top: number;
}

export interface WidgetPosSize extends WidgetSize, WidgetPosition {}

export interface Widget {
  position: WidgetPosSize;
}
