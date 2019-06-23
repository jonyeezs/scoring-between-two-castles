import { Widget } from '../../models/WidgetPosition';
import { Room } from 'src/app/models/rooms/room.type';
import * as flatMap from 'lodash.flatmap';

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
    return room => {
      const topest = this.findTopest(room.sections);
      const leftest = this.findLeftest(room.sections);
      const result = {
        position: {
          top: this.rooms.length > 1 ? Math.abs(topest - this.topConst) : 2,
          left: this.rooms.length > 1 ? Math.abs(leftest - this.leftConst) : 3,
          height: room.height,
          width: room.width,
        },
      };
      return result;
    };
  }

  private findTopest(sections: { x: number; y: number }[]) {
    return sections.reduce((topest: number, curr) => {
      if (topest == null) {
        return curr.y;
      }
      return topest > curr.y ? topest : curr.y;
    }, null);
  }

  private findLeftest(sections: { x: number; y: number }[]) {
    return sections.reduce(
      (leftest: number, curr: { x: number; y: number }) => {
        if (leftest == null) {
          return curr.x;
        }
        return leftest < curr.x ? leftest : curr.x;
      },
      null
    );
  }

  get top_marker() {
    return this.topConst;
  }
  get left_marker() {
    return this.leftConst;
  }
}
