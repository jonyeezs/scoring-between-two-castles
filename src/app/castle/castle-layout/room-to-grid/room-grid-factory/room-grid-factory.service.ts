import { Injectable, Injector, ComponentFactoryResolver, Type } from '@angular/core';
import { Room } from 'src/app/models/rooms/room.type';
import { RoomToGridTransformer } from '../room-to-grid-transformer/room-to-grid-transformer';
import { RoomWidget } from '../room-widget.type';

@Injectable()
export class RoomGridFactoryService {
  private transformerBuilder: RoomToGridTransformer;

  constructor(private injector: Injector, private cfResolver: ComponentFactoryResolver) { }

  public buildTransformer(rooms: Room[]) {
    this.transformerBuilder = new RoomToGridTransformer(rooms);
  }

  public createRoomWidget<C>(room: Room, component: Type<C>) {
    if (!this.transformerBuilder) { throw new Error('Must buildTransformer fist!'); }

    return new RoomWidget<C>(
      room,
      this.transformerBuilder,
      this.cfResolver,
      this.injector,
      component);
  }
}
