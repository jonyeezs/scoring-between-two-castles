import { Widget } from "../../models/WidgetPosition";
import { Room } from "src/app/models/rooms/room.type";
import * as flatMap from "lodash.flatmap";

export class RoomToGridTransformer {
  private topConst: number;
  private leftConst: number;

  constructor(private rooms: Partial<Room>[]) {
    const sections = flatMap(rooms, room => room.sections);
    this.topConst = this.findTopest(sections) + 1;
    this.leftConst = this.findLeftest(sections) - 1;
  }

  public getTransformer(): (room: Room) => Widget {
    // tslint:disable-next-line: only-arrow-functions
    return room => ({
      position: {
        top:
          this.rooms.length > 1
            ? Math.abs(this.findTopest(room.sections) - this.topConst)
            : 2,
        left:
          this.rooms.length > 1
            ? Math.abs(this.findLeftest(room.sections) - this.leftConst)
            : 3,
        height: room.height,
        width: room.width
      }
    });
  }

  private findTopest(sections: { x: number; y: number }[]) {
    return sections.reduce(
      (topest: number, curr) => (topest > curr.y ? topest : curr.y),
      0
    );
  }

  private findLeftest(sections: { x: number; y: number }[]) {
    return sections.reduce(
      (leftest: number, curr: { x: number; y: number }) =>
        leftest < curr.x ? leftest : curr.x,
      0
    );
  }

  get top_marker() {
    return this.topConst;
  }
  get left_marker() {
    return this.leftConst;
  }
}
