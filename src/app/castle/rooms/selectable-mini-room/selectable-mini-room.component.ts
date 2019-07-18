import { Component, OnInit, Input } from '@angular/core';
import { SelectRoomManagerService } from './services/select-room-manager.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

let emptyRoomId = 0;

@Component({
  selector: 'app-empty-mini-room',
  template: `
    <div
      class="mini-size__container"
      title="{{ description }}"
      [ngClass]="{ 'mini-size__container--checked': isSelected }"
    >
      <ion-radio
        value="{{ id }}"
        (ionSelect)="onChange($event)"
        [checked]="isSelected"
      ></ion-radio>
      <ion-label class="mini-size__container__label"
        >Select to build room on {{ coordinatesText }}
      </ion-label>
    </div>
  `,
  styleUrls: ['./selectable-mini-room.component.scss'],
})
export class SelectableMiniRoomComponent implements OnInit {
  @Input() icon: string;
  @Input() description: string;
  @Input() coordinates: any;
  protected id = emptyRoomId++;
  protected isSelected = false;
  subscription: Subscription;

  constructor(private selectionState: SelectRoomManagerService) {}

  ngOnInit() {
    this.subscription = this.selectionState.selectedChange
      .pipe(filter(s => s.inputId !== this.id))
      .subscribe(() => {
        this.isSelected = false;
      });
  }

  onChange(event) {
    if (event.currentTarget.checked) {
      this.isSelected = true;
      this.selectionState.setSelected(this.id, this.coordinates);
    }
  }

  get coordinatesText() {
    return this.coordinates.map(coord => `[${coord.x}, ${coord.y}]`).join(', ');
  }
}
