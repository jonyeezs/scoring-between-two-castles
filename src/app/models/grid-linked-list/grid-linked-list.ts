import { GridNode } from './grid-node';
import { GridNodeTraverser } from './grid-node-traverser';

export interface GridableGridNodeType {
    x: number;
    y: number;
}

export class GridLinkedList<GridNodeType extends GridableGridNodeType> {
    private grid: GridNode<GridNodeType>[];
    private currentTravel: GridNodeTraverser<GridNodeType>;

    constructor(private equalifier: (nodeA: GridNodeType, nodeB: GridNodeType) => boolean) {
        this.currentTravel = null;
        this.grid = [];
    }

    /**
     * Adds a new node to the grid and returns available positions linkable to this node.
     */
    add(node: GridNodeType): GridableGridNodeType[] {
        if (this.grid.length === 0) { return this.addAsLoner(node); }

        const nodeGrid = {x: node.x, y: node.y} as GridNodeType;
        if (this.grid.some(n => n.equals(nodeGrid))) {
            throw new Error('Node already exist on the grid');
        }

        const linkableNodes = this.findLinkableNodes(node);
        if (linkableNodes.length === 0) { throw new Error('Unable to link your node to any available linkable nodes'); }

        const newNode = new GridNode<GridNodeType>(node, this.equalifier);
        this.grid.push(newNode);
        newNode.links = linkableNodes;
        linkableNodes.forEach(ln => {
            ln.links.push(newNode);
        });

        return this.findNextLinkableNodes(node);
    }

    get(position: {x: number, y: number}): GridNode<GridNodeType> | undefined {
       return this.grid.find(n => n.equals(position as GridNodeType));
    }

    private findLinkableNodes(target: GridNodeType): GridNode<GridNodeType>[] {
        return this.grid.filter(n => {
            return n.equals({x: target.x - 1, y: target.y} as GridNodeType)
                || n.equals({x: target.x + 1, y: target.y} as GridNodeType)
                || n.equals({x: target.x, y: target.y - 1} as GridNodeType)
                || n.equals({x: target.x, y: target.y + 1} as GridNodeType);
        });
    }

    private findNextLinkableNodes(target: GridNodeType): GridableGridNodeType[] {
        const links = [{x: target.x - 1, y: target.y},
                       {x: target.x + 1, y: target.y},
                       {x: target.x, y: target.y - 1},
                       {x: target.x, y: target.y + 1}];
        
        return links.filter(l => 
            !this.grid.some(n => 
                n.equals(l as GridNodeType)
            )
        );
    }

    private addAsLoner(node: GridNodeType): GridableGridNodeType[] {
        this.grid.push(new GridNode(node, this.equalifier));
        return [{x: node.x - 1, y: node.y},
                {x: node.x + 1, y: node.y},
                {x: node.x, y: node.y - 1},
                {x: node.x, y: node.y + 1}];
    }
}
