import { Rule } from '../rules.abstract';
import { RoomType } from '@app/models/rooms/room.type';
import { GridNodeTraverser } from '@app/models/grid-linked-list/grid-node-traverser';
import { GridRoom } from '@app/core/room-repository.service';

export class AnywhereRule<T extends GridRoom> extends Rule {
  constructor(public points: number, public roomType: RoomType) {
    super(`${points} pts for each ${roomType} found anywhere in the castle`);
  }
  protected runRule<T extends GridRoom>(
    startingNode: GridNodeTraverser<T>
  ): number {
    const allNodes = startingNode.birdsEye();
    return allNodes.filter(n => n.data.type === this.roomType).length;
  }
}
