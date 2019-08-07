import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AutoCompleteModule } from 'ionic4-auto-complete';

import { AddThronePage } from './add-throne/add-throne.page';
import { AddRoomPage } from './add-room/add-room.page';
import { RoomsModule } from '../rooms/rooms.module';
import { CastleLayoutModule } from '../castle-layout/castle-layout.module';
import { RoomSelectionAutocompleteService } from './services/room-selection-autocomplete/room-selection-autocomplete.service';

const routes: Routes = [
  {
    path: 'throne',
    component: AddThronePage,
    data: {
      title: 'Add Throne',
    },
  },
  {
    path: 'room',
    component: AddRoomPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    RoomsModule,
    CastleLayoutModule,
  ],
  providers: [RoomSelectionAutocompleteService],
  declarations: [AddThronePage, AddRoomPage],
})
export class AddRoomsModule {}
