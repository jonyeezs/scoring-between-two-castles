import { Rule } from '../rules.abstract';
import { RoomType } from '@app/models/rooms/room.type';
import { GridNodeTraverser } from '@app/models/grid-linked-list/grid-node-traverser';
import { GridRoom } from '@app/core/room-repository.service';
import { sentencize } from '@app/helpers/sentencize';

export class AllTypesRule<T extends GridRoom> extends Rule {
  constructor(
    public points: number,
    public alternativePoints: number,
    private expectedNumberOfRooms: number,
    private excludedRooms: RoomType[]
  ) {
    super(
      `${points} pts for all ${expectedNumberOfRooms} room types other than 
      ${sentencize(excludedRooms, 'and')} found anywhere in the castle, 
      else ${alternativePoints} pts.`
    );
  }
  protected runRule<T extends GridRoom>(
    startingNode: GridNodeTraverser<T>
  ): number {
    const existingTypes = startingNode.birdsEye().map(n => n.data.type);
    const uniques = new Set(existingTypes);
    this.excludedRooms.forEach(e => uniques.delete(e));
    return uniques.size === this.expectedNumberOfRooms
      ? this.points
      : this.alternativePoints;
  }
}
