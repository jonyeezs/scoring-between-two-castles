import { Room } from 'src/app/models/rooms/room.type';
import { RoomToGridTransformer } from './room-to-grid-transformer/room-to-grid-transformer';
import { Widget, WidgetPosition } from '../models/WidgetPosition';
import { Type, ComponentFactoryResolver, ViewRef, Injector, ComponentRef } from '@angular/core';

export class RoomWidget<C> implements Widget {
  private location: WidgetPosition;
  private compRef: ComponentRef<C>;
  constructor(private room: Room,
      transformer: RoomToGridTransformer,
      cfResolver: ComponentFactoryResolver,
      private injector: Injector,
      public component: Type<C>) {
        this.location = transformer.getTransformer()(room);
        const factory = cfResolver.resolveComponentFactory(this.component);
        this.compRef = factory.create(this.injector);
      }
    public get position() {
      return {
        height: this.room.realEstate.height,
        width: this.room.realEstate.width,
        top: this.location.top,
        left: this.location.left
      };
    }

    public get componentRef(): ComponentRef<C> {
      return this.compRef;
    }
 }