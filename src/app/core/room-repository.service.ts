import { Injectable } from '@angular/core';
import { Room, RoomDefinition } from '../models/rooms/room.type';
import * as _cloneDeep from 'lodash.clonedeep';
import {
  GridLinkedList,
  GridableGridNodeType,
} from '../models/grid-linked-list/grid-linked-list';

export class GridRoom implements RoomDefinition, GridableGridNodeType {
  constructor(
    public name: string,
    public x: number,
    public y: number,
    public icon: string,
    public ruleDescription: string
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
        new GridRoom(room.name, s.x, s.y, room.icon, room.ruleDescription)
      );
    });
  }

  getAllOccupied(): Room[] {
    return _cloneDeep(this.rooms);
  }

  getAllFreeSpace(): Room[] {
    return _cloneDeep(this.gridRooms.getAllAvailableSpace()).map(
      location => new Room('available', '🤷', [location], { description: '' })
    );
  }
}
