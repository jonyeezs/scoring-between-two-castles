import { Injectable } from '@angular/core';
import {
  Room,
  RoomDefinition,
  RoomHanging,
  RoomType,
} from '../models/rooms/room.type';
import * as _cloneDeep from 'lodash.clonedeep';
import {
  GridLinkedList,
  GridableGridNodeType,
} from '../models/grid-linked-list/grid-linked-list';
import { Rule } from '@app/rules/rules.abstract';
import { MootRule } from '@app/rules/moot-rule';

export class GridRoom implements RoomDefinition, GridableGridNodeType {
  constructor(
    public name: string,
    public x: number,
    public y: number,
    public icon: string,
    public rule: Rule,
    public type: RoomType,
    public hanging: RoomHanging
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class RoomRepositoryService {
  private readonly gridRooms: GridLinkedList<GridRoom>;
  private rooms: Room[];

  constructor() {
    this.gridRooms = new GridLinkedList();
    this.rooms = [];
  }

  add(room: Room) {
    this.rooms.push(room);
    room.sections.forEach(s => {
      this.gridRooms.add(
        new GridRoom(
          room.name,
          s.x,
          s.y,
          room.icon,
          room.rule,
          room.type,
          room.hanging
        )
      );
    });
  }

  calculatePoints(gridCoordinate: GridableGridNodeType) {
    if (gridCoordinate) {
      const room = this.gridRooms.get(gridCoordinate);
      return room.data.rule.calculatePoints(room);
    } else {
      throw new Error(`have not implemented calculate all`);
    }
  }

  getAllOccupied(): Room[] {
    return _cloneDeep(this.rooms);
  }

  getAllFreeSpace(): Room[] {
    return _cloneDeep(this.gridRooms.getAllAvailableSpace()).map(
      location =>
        new Room(
          'available construction space',
          'none',
          [location],
          new MootRule()
        )
    );
  }
}
