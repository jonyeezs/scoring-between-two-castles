import { Rule } from '../rules.abstract';
import { RoomType, RoomHanging } from '@app/models/rooms/room.type';
import {
  GridNodeTraverser,
  Direction,
} from '@app/models/grid-linked-list/grid-node-traverser';
import { GridRoom } from '@app/core/room-repo/room-repository.service';

export class ConsecutiveRule extends Rule {
  constructor(
    public points: number,
    private direction: Direction,
    private consecutiveRooms: number,
    private roomProperty: 'type' | 'hanging', // follow property of room.type
    private wantedType: RoomType | RoomHanging
  ) {
    super(
      `${points} pts for each ${consecutiveRooms} rooms ${roomProperty}
      of ${wantedType} directly
       ${direction} to this room.`
    );
  }
  protected runRule<T extends GridRoom>(
    startingNode: GridNodeTraverser<T>
  ): number {
    let total = 0;
    let consecutives = 1;
    let traveller = startingNode.moveTo(this.direction);
    while (traveller !== undefined && consecutives <= this.consecutiveRooms) {
      if (traveller.current.data[this.roomProperty] === this.wantedType) {
        total += this.points;
      }
      consecutives++;
      traveller = traveller.moveTo(this.direction);
    }
    return total;
  }
}
