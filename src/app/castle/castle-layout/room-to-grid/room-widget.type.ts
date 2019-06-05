import { Room } from 'src/app/models/rooms/room.type';
import { RoomToGridTransformer } from './room-to-grid-transformer/room-to-grid-transformer';
import { Widget, WidgetPosSize } from '../models/WidgetPosition';
import { Type, ComponentFactoryResolver, ViewRef, Injector, ComponentRef } from '@angular/core';

export class RoomWidget<C> implements Widget {
  private transformedPosition: WidgetPosSize;
  private compRef: ComponentRef<C>;
  constructor(private room: Room,
      transformer: RoomToGridTransformer,
      cfResolver: ComponentFactoryResolver,
      private injector: Injector,
      public component: Type<C>) {
        this.transformedPosition = transformer.getTransformer()(room).position;
        const factory = cfResolver.resolveComponentFactory(this.component);
        this.compRef = factory.create(this.injector);
      }
    public get position() {
      return this.transformedPosition;
    }

    public get componentRef(): ComponentRef<C> {
      return this.compRef;
    }
 }