import { Rule } from '../rules.abstract';
import { RoomType } from '@app/models/rooms/room.type';
import {
  GridNodeTraverser,
  VerticalDirection,
} from '@app/models/grid-linked-list/grid-node-traverser';
import { GridRoom } from '@app/core/room-repository.service';

export class AllVerticalRule extends Rule {
  constructor(
    public points: number,
    private directions: VerticalDirection[],
    private wantedTypes: RoomType[]
  ) {
    super(
      `${points} pts each ${wantedTypes.reduce((acc, t) => `${acc}, ${t}`, '')} 
      ${directions.reduce((acc, t) => `${acc}, ${t}`, '')} this room.`
    );
  }
  protected runRule<T extends GridRoom>(
    startingNode: GridNodeTraverser<T>
  ): number {
    return this.directions.reduce((total, dir) => {
      const acc = total + this.count(dir, startingNode);
      startingNode.reset();
      return acc;
    }, 0);
  }

  private count<T extends GridRoom>(
    direction: VerticalDirection,
    traveller: GridNodeTraverser<T>
  ): number {
    let total = 0;
    let n = traveller.moveTo(direction);
    while (n !== undefined) {
      total++;
      n = traveller.moveTo(direction);
    }
    return total;
  }
}
