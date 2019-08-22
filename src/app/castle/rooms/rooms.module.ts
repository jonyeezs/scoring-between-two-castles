import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './room/room.component';

@NgModule({
  declarations: [RoomComponent],
  imports: [
    CommonModule
  ],
  exports: [RoomComponent]
})
export class RoomsModule { }
