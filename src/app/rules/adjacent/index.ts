import { Rule } from '../rules.abstract';
import { RoomType, RoomHanging } from '@app/models/rooms/room.type';
import {
  GridNodeTraverser,
  Direction,
} from '@app/models/grid-linked-list/grid-node-traverser';
import { GridRoom } from '@app/core/room-repository.service';
import { sentencize } from '@app/helpers/sentencize';

export class AdjacentRule extends Rule {
  constructor(
    public points: number,
    private directions: Direction[],
    private roomProperty: 'type' | 'hanging', // follow property of room.type
    private wantedTypes: (RoomType | RoomHanging)[]
  ) {
    super(
      `${points} pts for each room ${roomProperty}
      of ${sentencize(wantedTypes, 'or')} directly
       ${sentencize(directions, 'and')} to this room.`
    );
  }
  protected runRule<T extends GridRoom>(
    startingNode: GridNodeTraverser<T>
  ): number {
    if (!startingNode.hasLinks()) {
      return 0;
    }
    return startingNode
      .getAvailableNodes(this.directions)
      .reduce((total, n) => {
        // eslint-disable-next-line
        return this.wantedTypes.some(t => t === n.data[this.roomProperty])
          ? total + this.points
          : total;
      }, 0);
  }
}
