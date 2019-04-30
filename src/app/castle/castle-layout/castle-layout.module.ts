import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxWidgetGridModule } from 'ngx-widget-grid';
import { CastleLayoutComponent } from './castle-layout.component';
import { WidgetComponentDirective } from './widget-component/widget-component.directive';
import { RoomGridFactoryService } from './room-to-grid/room-grid-factory/room-grid-factory.service';

@NgModule({
  declarations: [CastleLayoutComponent, WidgetComponentDirective],
  imports: [
    CommonModule,
    NgxWidgetGridModule
  ],
  providers: [RoomGridFactoryService],
  exports: [CastleLayoutComponent]
})
export class CastleLayoutModule { }
