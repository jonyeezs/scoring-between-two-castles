import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxWidgetGridModule } from 'ngx-widget-grid';
import { CastleLayoutComponent } from './castle-layout.component';
import { WidgetComponentDirective } from './widget-component/widget-component.directive';
import { RoomGridFactoryService } from './room-to-grid/room-grid-factory/room-grid-factory.service';
import { DynamicHeightDirective } from './layout-frame-height/dynamic-height.directive';

@NgModule({
  declarations: [
    CastleLayoutComponent,
    WidgetComponentDirective,
    DynamicHeightDirective,
  ],
  imports: [CommonModule, NgxWidgetGridModule],
  providers: [RoomGridFactoryService],
  exports: [CastleLayoutComponent],
})
export class CastleLayoutModule {}
