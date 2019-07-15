import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
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
  public numOfRows: number;
  public numOfCols: number;
  public widgetRooms: RoomWidget<any>[];
  constructor(private roomGridFactory: RoomGridFactoryService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.isEditable) {
      this.isEditable = false;
    }

    if (
      changes.rooms &&
      changes.rooms.currentValue &&
      changes.rooms.currentValue.length > 0
    ) {
      this.roomGridFactory.buildTransformer(changes.rooms.currentValue);

      this.widgetRooms = changes.rooms.currentValue.map((r: Room) => {
        const roomWidget = this.roomGridFactory.createRoomWidget<
          SelectableMiniRoomComponent | MiniRoomComponent
        >(
          r,
          r.icon === '' || r.icon === ' '
            ? SelectableMiniRoomComponent
            : MiniRoomComponent,
          function(
            room: Room,
            componentRef: {
              instance: {
                icon: string;
                description: string;
                coordinates: any[];
              };
            }
          ) {
            componentRef.instance.coordinates = room.sections;
            componentRef.instance.icon = room.icon;
            componentRef.instance.description = room.name;
          }
        );
        return roomWidget;
      });

      this.numOfCols = this.widgetRooms.reduce(
        (highestValue: number, currTile: RoomWidget<any>) =>
          highestValue > currTile.position.left
            ? highestValue
            : currTile.position.left,
        0
      );
      this.numOfRows = this.widgetRooms.reduce(
        (highestValue: number, currTile: RoomWidget<any>) =>
          highestValue > currTile.position.top
            ? highestValue
            : currTile.position.top,
        0
      );
    } else {
      this.numOfCols = 1;
      this.numOfRows = 1;
    }
  }

  onWidgetChange(event) {}
}
