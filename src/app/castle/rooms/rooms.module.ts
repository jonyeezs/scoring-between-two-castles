import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './room/room.component';
import { MiniRoomComponent } from './mini-room/mini-room.component';

@NgModule({
  declarations: [RoomComponent, MiniRoomComponent],
  imports: [
    CommonModule
  ],
  exports: [RoomComponent, MiniRoomComponent],
  entryComponents: [RoomComponent, MiniRoomComponent]
})
export class RoomsModule { }
