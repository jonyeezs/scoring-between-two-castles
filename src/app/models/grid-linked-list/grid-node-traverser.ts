import { GridNode } from './grid-node';
import { GridableGridNodeType } from './grid-linked-list';
import * as _findkey from 'lodash.findkey';

export type VerticalDirection = 'above' | 'below';
export type HorizontalDirection = 'left' | 'right';
export type DiagonalDirection =
  | 'upper-left'
  | 'upper-right'
  | 'lower-left'
  | 'lower-right';
export type Direction =
  | VerticalDirection
  | HorizontalDirection
  | DiagonalDirection;

/* 'xy': single step direction
 *  target - current = direction
 * eg: current = 1 & direction = 2 => 1 means moved to the right
 */
const directionMap: { [key: string]: Direction } = {
  '0|1': 'above',
  '0|-1': 'below',
  '1|0': 'right',
  '-1|0': 'left',
  '1|1': 'upper-right',
  '1|-1': 'lower-right',
  '-1|1': 'upper-left',
  '-1|-1': 'lower-left',
};

export class GridNodeTraverser<GridNodeType extends GridableGridNodeType> {
  private inTheBeginning: GridableGridNodeType;

  constructor(currentNode: GridNode<GridNodeType>) {
    this.inTheBeginning = currentNode.data;
    this.current = currentNode;
    this.previous = null;
  }
  current: GridNode<GridNodeType>;
  previous: GridNode<GridNodeType>;

  hasLinks(): boolean {
    return this.current.links.length > 0;
  }

  getAvailableNodes(
    ofDirections: Direction[] = null
  ): GridNode<GridNodeType>[] {
    const byDirection = ofDirections
      ? node => ofDirections.some(d => d === this.nodeToDirection(node))
      : () => true;

    if (!this.previous) {
      return this.current.links.filter(node => byDirection(node));
    }

    return this.current.links.filter(node => {
      return !node.equals(this.previous.data) && byDirection(node);
    });
  }

  getAvailableDirections(ofDirections: Direction[] = null): Direction[] {
    if (!this.previous) {
      return this.current.links
        .map(l => this.nodeToDirection(l))
        .filter(d => {
          return ofDirections ? ofDirections.some(od => od === d) : true;
        });
    }

    return this.current.links
      .filter(node => !node.equals(this.previous.data))
      .map(l => this.nodeToDirection(l))
      .filter(d => {
        return ofDirections ? ofDirections.some(od => od === d) : true;
      });
  }

  moveTo(
    target: GridNodeType | Direction
  ): GridNodeTraverser<GridNodeType> | undefined {
    if (typeof target === 'string' || target instanceof String) {
      const movementCoord = _findkey(directionMap, v => v === target);
      if (!movementCoord) {
        throw new Error(`${target} not a valid Direction`);
      }

      // @ts-ignore
      target = {
        x: parseInt(movementCoord.split('|')[0], 10) + this.current.data.x,
        y: parseInt(movementCoord.split('|')[1], 10) + this.current.data.y,
      };
    }
    const found = this.current.links.find(n =>
      n.equals(target as GridNodeType)
    );
    if (!found) {
      return undefined;
    }

    this.previous = this.current;
    this.current = found;
    return this;
  }

  /**
   * Resets the current node to the original node that was used
   * during construction of this traverser.
   * This can be accessed through this traverser's current property.
   * It's previous would be the last current node before the reset.
   */
  reset(): void {
    this.previous = Object.assign({}, this.previous, this.current);
    this.current = this.birdsEye().find(
      n =>
        n.data.x === this.inTheBeginning.x && n.data.y === this.inTheBeginning.y
    );
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

    return recurser(this.getAvailableNodes(), []);
  }

  private nodeToDirection({ data }) {
    const { x: currentX, y: currentY } = this.current.data;
    const xDiff = data.x - currentX;
    const yDiff = data.y - currentY;
    return directionMap[`${xDiff}|${yDiff}`];
  }
}
