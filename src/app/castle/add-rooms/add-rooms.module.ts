import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddThronePage } from './add-throne/add-throne.page';
import { RoomsModule } from '../rooms/rooms.module';

const routes: Routes = [
  {
    path: 'throne',
    component: AddThronePage,
    data: {
        title: 'Add Throne'
      }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    RoomsModule
  ],
  declarations: [AddThronePage]
})
export class AddRoomsModule { }
