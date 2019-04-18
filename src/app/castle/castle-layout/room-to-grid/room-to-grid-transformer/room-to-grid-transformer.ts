import { Room } from '../../../rooms/room/room.type';
import { WidgetPosition } from '../../models/WidgetPosition';

export class RoomToGridTransformer {
  private topConst: number;
  private leftConst: number;


  constructor(private rooms: Partial<Room>[]) {
    this.topConst = this.findTopest(this.rooms) + 1;
    this.leftConst = this.findLeftest(this.rooms) - 1;

   }

  public getTransformer(): (room: Partial<Room>) => WidgetPosition {
// tslint:disable-next-line: only-arrow-functions
    return (room) => { return {
      top: Math.abs(room.location.y - this.topConst),
      left: Math.abs(room.location.x - this.leftConst) }; };
  }

  private findTopest(rooms: Partial<Room>[]) {
    return rooms.reduce((topest: number, curr: Room) =>
          topest > curr.location.y ?
            topest : curr.location.y,
          0);
  }

  private findLeftest(rooms: Partial<Room>[]) {
    return rooms.reduce((leftest: number, curr: Room) =>
          leftest < curr.location.x ?
            leftest : curr.location.x,
          0);
  }

  get top_marker() { return this.topConst; }
  get left_marker() { return this.leftConst; }
}
