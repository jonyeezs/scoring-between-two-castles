import { Rule } from '../rules.abstract';
import { RoomType } from '@app/models/rooms/room.type';
import { sentencize } from '@app/helpers/sentencize';
import { AdjacentRule } from '../adjacent';
import { GridRoom } from '@app/core/room-repository.service';
import { GridNodeTraverser } from '@app/models/grid-linked-list/grid-node-traverser';

export class ThroneAboveRule extends Rule {
  private rule: Rule;
  constructor(roomTypes: RoomType[]) {
    super(`2 pts for each room ${sentencize(roomTypes, 'or')} above.`);
    this.rule = new AdjacentRule(2, ['above'], 'type', roomTypes);
  }
  protected runRule<T extends GridRoom>(
    startingNode: GridNodeTraverser<T>
  ): number {
    return this.rule.calculatePoints(startingNode.current);
  }
}

export class ThroneHorizontalSideRule extends Rule {
  constructor(private roomTypes: RoomType[]) {
    super(
      `2 pts for each room ${sentencize(
        roomTypes,
        'or'
      )} to the left and right.`
    );
  }
  protected runRule<T extends GridRoom>(
    startingNode: GridNodeTraverser<T>
  ): number {
    // left
    if (
      startingNode.current.data.x === 0 &&
      startingNode.current.data.y === 0
    ) {
      return new AdjacentRule(
        2,
        ['left'],
        'type',
        this.roomTypes
      ).calculatePoints(startingNode.current);
    } else {
      return new AdjacentRule(
        2,
        ['right'],
        'type',
        this.roomTypes
      ).calculatePoints(startingNode.current);
    }
  }
}

export class ThroneBelowRule extends Rule {
  private rule: Rule;
  constructor(roomTypes: RoomType[]) {
    super(`2 pts for each room ${sentencize(roomTypes, 'or')} below.`);
    this.rule = new AdjacentRule(2, ['below'], 'type', roomTypes);
  }
  protected runRule<T extends GridRoom>(
    startingNode: GridNodeTraverser<T>
  ): number {
    return this.rule.calculatePoints(startingNode.current);
  }
}

export class ThroneLeftSideRule extends Rule {
  constructor(private roomTypes: RoomType[]) {
    super(
      `2 pts for each room ${sentencize(
        roomTypes,
        'or'
      )} to the left and left above.`
    );
  }
  protected runRule<T extends GridRoom>(
    startingNode: GridNodeTraverser<T>
  ): number {
    if (
      startingNode.current.data.x === 0 &&
      startingNode.current.data.y === 0
    ) {
      return new AdjacentRule(
        2,
        ['left', 'above'],
        'type',
        this.roomTypes
      ).calculatePoints(startingNode.current);
    } else {
      return 0;
    }
  }
}

export class ThroneRightSideRule extends Rule {
  constructor(private roomTypes: RoomType[]) {
    super(
      `2 pts for each room ${sentencize(
        roomTypes,
        'or'
      )} to the right and right above.`
    );
  }
  protected runRule<T extends GridRoom>(
    startingNode: GridNodeTraverser<T>
  ): number {
    if (
      startingNode.current.data.x === 1 &&
      startingNode.current.data.y === 0
    ) {
      return new AdjacentRule(
        2,
        ['right', 'above'],
        'type',
        this.roomTypes
      ).calculatePoints(startingNode.current);
    } else {
      return 0;
    }
  }
}
