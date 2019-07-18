import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RoomComponent } from './room/room.component';
import { MiniRoomComponent } from './mini-room/mini-room.component';
import { SelectableMiniRoomComponent } from './selectable-mini-room/selectable-mini-room.component';

@NgModule({
  declarations: [RoomComponent, MiniRoomComponent, SelectableMiniRoomComponent],
  imports: [CommonModule, IonicModule],
  exports: [RoomComponent, MiniRoomComponent, SelectableMiniRoomComponent],
  entryComponents: [
    RoomComponent,
    MiniRoomComponent,
    SelectableMiniRoomComponent,
  ],
})
export class RoomsModule {}
