import { storiesOf, moduleMetadata } from '@storybook/angular';
import { Component } from '@angular/core';
import { Room } from '../rooms/room/room.type';
import { CastleLayoutModule } from './castle-layout.module';

const recommendedRoomBaseStyling = 'height:100%;';
@Component({
  template: `<div style="background: #FF851B; ${recommendedRoomBaseStyling}">{{ '{' }}x: 1, y: 1{{ '}' }}</div>`})
export class Test1Component {}
@Component({ template:
  `<div style="background: #85144b; ${recommendedRoomBaseStyling}">{{ '{' }}x: 1, y: 2{{ '}' }}</div>` })
export class Test2Component {}
@Component({ template:
  `<div style="background: #F012BE; ${recommendedRoomBaseStyling}">{{ '{' }}x: 3, y: 2{{ '}' }}</div>` })
export class Test3Component {}
@Component({ template:
  `<div style="background: #39CCCC; ${recommendedRoomBaseStyling}">{{ '{' }}x: 2, y: 2{{ '}' }}</div>` })
export class Test4Component {}

storiesOf('Castle layout', module)
  .addDecorator(moduleMetadata({
      imports: [CastleLayoutModule]
    }))
 .add('with no rooms', () => ({
    template: `<app-castle-layout [rooms]="[]"></app-castle-layout>`,
    props: {
      rooms: [],
    }
  }))
.add('with rooms', () => ({
  template: `<app-castle-layout [rooms]="rooms"></app-castle-layout>`,
  props: {
    rooms: [
      new Room(1, {x: 1, y: 2}, Test2Component),
      new Room(2, {x: 1, y: 1}, Test1Component),
      new Room(1, {x: 2, y: 2}, Test4Component),
      new Room(1, {x: 3, y: 2}, Test3Component)]
  },
  moduleMetadata: {
    declarations: [Test1Component, Test2Component, Test3Component, Test4Component],
    entryComponents: [Test1Component, Test2Component, Test3Component, Test4Component]
   }
}), {
  notes: `
  # Room CSS Styling
  The recommended base styling for a room should be
  \`\`\`
  ${recommendedRoomBaseStyling}
  \`\`\``});
