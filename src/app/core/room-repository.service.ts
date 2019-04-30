import { Injectable } from '@angular/core';
import { Room } from '../models/rooms/room.type';
import * as _cloneDeep from 'lodash.clonedeep';

@Injectable({
  providedIn: 'root'
})
export class RoomRepositoryService {

  private rooms: Room[];
  constructor() {
    this.rooms = [];
   }

  add(room: Room) {
    this.rooms.push(room);
  }

  getAll() {
    return _cloneDeep(this.rooms);
  }
}
