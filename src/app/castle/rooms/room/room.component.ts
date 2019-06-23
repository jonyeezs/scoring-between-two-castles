import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  template: `
    <!-- edit -->
    <!-- del -->
    <article>
      <!-- to be a card -->
      <h1>{{ icon }}</h1>
      <h2>{{ name }}</h2>
    </article>
  `,
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  @Input() icon: string;
  @Input() name: string;

  constructor() {}

  ngOnInit() {}
}
