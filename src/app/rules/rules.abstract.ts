import { GridNode } from '@app/models/grid-linked-list/grid-node';
import { GridNodeTraverser } from '@app/models/grid-linked-list/grid-node-traverser';
import { GridRoom } from '@app/core/room-repository.service';

export abstract class Rule {
  description: string;
  constructor(desc) {
    this.description = desc;
  }
  calculatePoints<T extends GridRoom>(gridNode: GridNode<T>): number {
    const traverser = new GridNodeTraverser(gridNode);
    return this.runRule(traverser);
  }

  protected abstract runRule<T extends GridRoom>(
    startingNode: GridNodeTraverser<T>
  ): number;
}
