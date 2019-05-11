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

    get available(): GridNode<GridNodeType>[] {
        return this.current.links.filter(node => !node.equals(this.previous.data));
    }

    moveTo(target: GridNodeType): GridNode<GridNodeType> {
        const found = this.current.links.find(n => n.equals(target));
        if (found) {
            Object.assign(this.previous, this.current);
            this.current = found;
            return found;
        } else {
            throw new Error('Target does not exist in the list. Use `.available` property to see what is available');
        }
    }
}
