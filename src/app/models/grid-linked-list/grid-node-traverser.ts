import { GridNode } from './grid-node';

export class GridNodeTraverser<GridNodeType> {
  constructor(currentNode: GridNode<GridNodeType>) {
    this.current = currentNode;
    this.previous = null;
  }
  current: GridNode<GridNodeType>;
  previous: GridNode<GridNodeType>;

  hasLinks(): boolean {
    return this.current.links.length > 0;
  }

  get availableNodes(): GridNode<GridNodeType>[] {
    if (!this.previous) {
      return this.current.links;
    }
    return this.current.links.filter(node => !node.equals(this.previous.data));
  }

  moveTo(target: GridNodeType): GridNode<GridNodeType> {
    const found = this.current.links.find(n => n.equals(target));
    if (found) {
      Object.assign(this.previous, this.current);
      this.current = found;
      return found;
    } else {
      throw new Error(
        'Target does not exist in the list. Use `.available` property to see what is available'
      );
    }
  }

  /**
   * Gives a bird eye of all unique nodes in the grid.
   */
  birdsEye(): GridNode<GridNodeType>[] {
    const recurser = function(
      nodes: GridNode<GridNodeType>[],
      uniques: GridNode<GridNodeType>[]
    ) {
      return nodes.reduce((acc, node) => {
        if (!acc.some((n: GridNode<GridNodeType>) => n.equals(node.data))) {
          acc = [...acc, node];

          if (node.links.length > 0) {
            return recurser(node.links, acc);
          }
          return acc;
        } else {
          return acc;
        }
      }, uniques);
    };

    return recurser(this.availableNodes, []);
  }
}
