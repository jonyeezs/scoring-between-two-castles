import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { RoomWidget } from './room-to-grid/room-widget.type';

@Component({
  selector: 'app-castle-layout',
  templateUrl: './castle-layout.component.html',
  styleUrls: ['./castle-layout.component.scss']
})
export class CastleLayoutComponent implements OnInit, OnChanges {
  @Input() rooms: RoomWidget<any>[];
  @Input() isEditable: boolean;
  public numOfRows: number;
  public numOfCols: number;
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.isEditable) {
      this.isEditable = false;
    }

    if (changes.rooms && changes.rooms.currentValue.length > 0) {
      this.numOfCols = changes.rooms.currentValue
        .reduce((highestValue: number, currTile: RoomWidget<any>) =>
          highestValue > currTile.position.left ?
            highestValue : currTile.position.left,
          0);
      this.numOfRows = changes.rooms.currentValue
        .reduce((highestValue: number, currTile: RoomWidget<any>) =>
          highestValue > currTile.position.top ?
            highestValue : currTile.position.top,
          0);
    } else {
      this.numOfCols = 1;
      this.numOfRows = 1;
    }
  }

  onWidgetChange(event) {
  }
}
