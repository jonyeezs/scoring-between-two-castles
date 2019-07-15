import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { SelectRoomManagerService } from './services/select-room-manager.service';
import { Subscription } from 'rxjs';

let emptyRoomId = 0;

@Component({
  selector: 'app-empty-mini-room',
  template: `
    <div class="mini-size__container" title="{{ description }}">
      <div class="mini-size__content">
        <label>
          <input
            #roomSelect
            type="radio"
            name="selectable-empty-space"
            (change)="onChange($event)"
            id="{{ id }}"
          />
          <span class="mini-select-label">Select to build room</span>
        </label>
      </div>
    </div>
  `,
  styleUrls: ['./selectable-mini-room.component.scss'],
})
export class SelectableMiniRoomComponent implements OnInit {
  @Input() icon: string;
  @Input() description: string;
  @Input() coordinates: any;
  @ViewChild('roomSelect') selectionInput: ElementRef;
  protected id = emptyRoomId++;
  protected isSelected = false;
  subscription: Subscription;

  constructor(private selectionState: SelectRoomManagerService) {}

  ngOnInit() {}

  onChange(event) {
    if (event.currentTarget.checked) {
      this.selectionState.setSelected(this.coordinates);
    }
  }
}
