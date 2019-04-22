import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CastlePageComponent } from './castle-page/castle-page.component';
import { CastleLayoutModule } from './castle-layout/castle-layout.module';
import { RoomsModule } from './rooms/rooms.module';
import { FabbyComponent } from '../components/fabby/fabby.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{
      path: ':name',
      component: CastlePageComponent,
      data: {
        title: 'Castle'
      },
    }, {
      path: ':name/add',
      loadChildren: './add-rooms/add-rooms.module#AddRoomsModule'
    }, {
      path: '',
      component: CastlePageComponent,
      data: {
        title: 'Castle'
      }
    }]),
    CastleLayoutModule,
    RoomsModule
  ],
  declarations: [CastlePageComponent, FabbyComponent]
})
export class CastleModule {}
