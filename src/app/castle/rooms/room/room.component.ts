import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  template: `
  <!-- edit -->
  <!-- del -->
    <article> <!-- to be a card -->
     <h1>{{ name }}</h1> <!-- name should be editable -->
    </article>
  `,
  styles: ['article { height:100%; }']
})
export class RoomComponent implements OnInit {
  @Input() name: string;
  @Input() rule: () => void;

  constructor() { }

  ngOnInit() {
  }

}
