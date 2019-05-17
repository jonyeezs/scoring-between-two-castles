import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddThronePage } from './add-throne/add-throne.page';
import { AddRoomPage } from './add-room/add-room.page';
import { RoomsModule } from '../rooms/rooms.module';
import { CastleLayoutModule } from '../castle-layout/castle-layout.module';

const routes: Routes = [
  {
    path: 'throne',
    component: AddThronePage,
    data: {
        title: 'Add Throne'
      }
  }, {
    path: 'room',
    component: AddRoomPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    RoomsModule,
    CastleLayoutModule,
  ],
  declarations: [AddThronePage, AddRoomPage]
})
export class AddRoomsModule { }
