import { Rule } from '../rules.abstract';
import { RoomType } from '@app/models/rooms/room.type';
import { GridNodeTraverser } from '@app/models/grid-linked-list/grid-node-traverser';
import { GridRoom } from '@app/core/room-repository.service';
import { MovementDirections } from '@app/helpers/room-combinations';

import { GridNode } from '@app/models/grid-linked-list/grid-node';

export class ConnectedRule extends Rule {
  constructor(public points: number, private wantedType: RoomType) {
    super(`${points} pts for each connected ${wantedType} room.`);
  }
  protected runRule<T extends GridRoom>(
    startingNode: GridNodeTraverser<T>
  ): number {
    const connectedRooms = this.travelThrough([startingNode]);
    return connectedRooms.length;
  }

  private travelThrough<T extends GridRoom>(
    travelableNodes: GridNodeTraverser<T>[],
    cons: GridNode<T>[] = []
  ): GridNode<T>[] {
    return travelableNodes.reduce((uniqConnections, t) => {
      const connectedNodes = t
        .getAvailableNodes(MovementDirections)
        .filter(n => n.data.type === this.wantedType);

      const nextNodes = connectedNodes.filter(
        n => !uniqConnections.some(c => n.equals(c.data))
      );

      // @ts-ignore
      uniqConnections = [...uniqConnections, ...nextNodes];

      if (nextNodes.length === 0) {
        return uniqConnections;
      } else {
        return this.travelThrough(
          nextNodes.map(nn => {
            const travelableNode = new GridNodeTraverser(nn);
            travelableNode.previous = t.current;
            return travelableNode;
          }),
          uniqConnections
        );
      }
    }, cons);
  }
}
