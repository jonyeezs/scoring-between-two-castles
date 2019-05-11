export class GridNode<GridNodeType> {
    constructor(public data: GridNodeType, private equalifier: (nodeA: GridNodeType, nodeB: GridNodeType) => boolean) { 
        this.links = [];
    }
    // Stored by reference
    links: GridNode<GridNodeType>[];
    equals<CType extends GridNodeType>(target: CType): boolean {
        return this.equalifier(this.data, target);
    }
}
