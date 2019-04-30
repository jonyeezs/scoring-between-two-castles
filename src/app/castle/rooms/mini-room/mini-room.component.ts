import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mini-room',
  template: `
    <div class="mini-size">{{ icon }}</div>
  `,
  styleUrls: ['./mini-room.component.scss'],
})
export class MiniRoomComponent implements OnInit {
  @Input() icon: string;

  constructor() { }

  ngOnInit() {}

}
