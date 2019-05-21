import { Injectable } from '@angular/core';
import { Room } from '../models/rooms/room.type';
import * as _cloneDeep from 'lodash.clonedeep';
import { GridLinkedList, GridableGridNodeType } from '../models/grid-linked-list/grid-linked-list';

export class GridRoom extends Room implements GridableGridNodeType {
  get x() { return this.location.x; }
  get y() { return this.location.y; }

  constructor(room: Room) {
    super(room.name, room.icon,
      { description: room.ruleDescription },
      room.realEstate.width,
      { x: room.location.x, y: room.location.y });
  }
}

@Injectable({
  providedIn: 'root'
})
export class RoomRepositoryService {

  private readonly gridRooms: GridLinkedList<GridRoom>;
  constructor() {
    this.gridRooms = new GridLinkedList();
  }

  add(room: Room) {
    this.gridRooms.add(new GridRoom(room));
  }

  getAllOccupied(): Room[] {
    return _cloneDeep(this.gridRooms.getAll().map(g => g.data as Room));
  }

  getAllFreeSpace(): Room[] {
    return _cloneDeep(this.gridRooms.getAllAvailableSpace())
      .map(location => new Room('available', '', {description: ''}, 1, location));
  }
}
