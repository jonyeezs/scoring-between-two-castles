import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mini-room',
  template: `
    <div class="mini-size__container" title="{{ description }}">
      <div class="mini-size__content">{{ icon }}</div>
    </div>
  `,
  styleUrls: ['./mini-room.component.scss'],
})
export class MiniRoomComponent implements OnInit {
  @Input() icon: string;
  @Input() description: string;

  constructor() {}

  ngOnInit() {}
}
