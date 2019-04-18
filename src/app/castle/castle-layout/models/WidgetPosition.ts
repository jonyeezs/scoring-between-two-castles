export interface WidgetSize {
    height: number;
    width: number;
}
export interface WidgetPosition {
    left: number;
    top: number;
  }
export interface Widget {
  position: WidgetSize | WidgetPosition;
}
