import { GridNode } from '@app/models/grid-linked-list/grid-node';
import { GridNodeTraverser } from '@app/models/grid-linked-list/grid-node-traverser';

export abstract class Rule {
  description: string;
  constructor(desc) {
    this.description = desc;
  }
  calculatePoints<T>(gridNode: GridNode<T>): number {
    const traverser = new GridNodeTraverser(gridNode);
    return this.runRule(traverser);
  }

  protected abstract runRule<T>(startingNode: GridNodeTraverser<T>): number;
}
