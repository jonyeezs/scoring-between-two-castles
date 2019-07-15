import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mini-room',
  template: `
    <div
      class="mini-size__container"
      [ngClass]="{ 'mini-size__container--empty': isNotSpecified }"
      title="{{ description }}"
    >
      <div class="mini-size__content">
        {{ icon }}
      </div>
    </div>
  `,
  styleUrls: ['./mini-room.component.scss'],
})
export class MiniRoomComponent implements OnInit {
  @Input() icon: string;
  @Input() description: string;

  public isNotSpecified: boolean;
  constructor() {}

  ngOnInit() {
    this.isNotSpecified = this.icon === '' || this.icon === ' ';
  }
}
