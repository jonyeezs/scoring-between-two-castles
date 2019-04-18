import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxWidgetGridModule } from 'ngx-widget-grid';
import { CastleLayoutComponent } from './castle-layout.component';
import { WidgetComponentDirective } from './widget-component/widget-component.directive';

@NgModule({
  declarations: [CastleLayoutComponent, WidgetComponentDirective],
  imports: [
    CommonModule,
    NgxWidgetGridModule
  ],
  exports: [CastleLayoutComponent]
})
export class CastleLayoutModule { }
