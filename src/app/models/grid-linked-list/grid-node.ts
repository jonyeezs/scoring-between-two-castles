export class GridNode<GridNodeType> {
  constructor(
    public data: GridNodeType,
    private equalifier: (
      nodeA: Partial<GridNodeType>,
      nodeB: Partial<GridNodeType>
    ) => boolean
  ) {
    this.links = [];
  }
  // Stored by reference
  links: GridNode<GridNodeType>[];
  equals<CType extends GridNodeType>(target: Partial<CType>): boolean {
    return this.equalifier(this.data, target);
  }
}
