import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ComponentRef,
} from '@angular/core';

import { RoomWidget } from './room-to-grid/room-widget.type';
import { Room } from 'src/app/models/rooms/room.type';
import { RoomGridFactoryService } from './room-to-grid/room-grid-factory/room-grid-factory.service';
import { MiniRoomComponent } from '../rooms/mini-room/mini-room.component';
import { SelectableMiniRoomComponent } from '../rooms/selectable-mini-room/selectable-mini-room.component';

@Component({
  selector: 'app-castle-layout',
  templateUrl: './castle-layout.component.html',
  styleUrls: ['./castle-layout.component.scss'],
})
export class CastleLayoutComponent implements OnInit, OnChanges {
  @Input() rooms: Room[];
  @Input() isEditable: boolean;

  setup: {
    numOfRows: number;
    numOfCols: number;
    isEditable: boolean;
    // @eslint-disable-next-line
    widgetRooms: RoomWidget<any>[];
  } = { numOfRows: 0, numOfCols: 0, isEditable: false, widgetRooms: [] };
  constructor(private roomGridFactory: RoomGridFactoryService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.isEditable) {
      this.setup.isEditable = false;
    }

    if (
      changes.rooms &&
      changes.rooms.currentValue &&
      changes.rooms.currentValue.length > 0
    ) {
      this.roomGridFactory.buildTransformer(changes.rooms.currentValue);

      this.setup.widgetRooms = changes.rooms.currentValue.map((r: Room) => {
        const roomWidget = this.roomGridFactory.createRoomWidget<
          SelectableMiniRoomComponent | MiniRoomComponent
        >(
          r,
          r.icon === '' || r.icon === ' '
            ? SelectableMiniRoomComponent
            : MiniRoomComponent,
          r.icon === '' || r.icon === ' '
            ? function(
                room,
                componentRef: ComponentRef<SelectableMiniRoomComponent>
              ) {
                componentRef.instance.coordinates = room.sections;
                componentRef.instance.icon = room.icon;
                componentRef.instance.description = room.name;
              }
            : function(room, componentRef: ComponentRef<MiniRoomComponent>) {
                componentRef.instance.icon = room.icon;
                componentRef.instance.description = room.name;
              }
        );
        return roomWidget;
      });

      this.setup.numOfCols = this.setup.widgetRooms.reduce(
        (highestValue: number, currTile: RoomWidget<any>) =>
          highestValue > currTile.position.left
            ? highestValue
            : currTile.position.left,
        0
      );
      this.setup.numOfRows = this.setup.widgetRooms.reduce(
        (highestValue: number, currTile: RoomWidget<any>) =>
          highestValue > currTile.position.top
            ? highestValue
            : currTile.position.top,
        0
      );
    } else {
      this.setup.numOfCols = 1;
      this.setup.numOfRows = 1;
    }
  }
}
