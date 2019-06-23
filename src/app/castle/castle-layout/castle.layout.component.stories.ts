import { storiesOf, moduleMetadata } from '@storybook/angular';
import { Component } from '@angular/core';
import { Room } from '../../models/rooms/room.type';
import { CastleLayoutModule } from './castle-layout.module';
import { RoomsModule } from '../rooms/rooms.module';

const recommendedRoomBaseStyling = 'height:100%;';
export class Test4Component {}

storiesOf('Castle layout', module)
  .addDecorator(
    moduleMetadata({
      imports: [CastleLayoutModule, RoomsModule],
    })
  )
  .add('with no rooms', () => ({
    template: `<app-castle-layout [rooms]="[]"></app-castle-layout>`,
    props: {
      rooms: [],
    },
  }))
  .add(
    'with rooms',
    () => ({
      template: `<app-castle-layout [rooms]="rooms"></app-castle-layout>`,
      props: {
        rooms: [
          new Room('1', '', [{ x: 1, y: 2 }], { description: '' }),
          new Room('2', '', [{ x: 1, y: 1 }], { description: '' }),
          new Room('1', '', [{ x: 2, y: 2 }], { description: '' }),
          new Room('1', '', [{ x: 3, y: 2 }], { description: '' }),
        ],
      }
    }),
    {
      notes: `
  # Room CSS Styling
  The recommended base styling for a room should be
  \`\`\`
  ${recommendedRoomBaseStyling}
  \`\`\``,
    }
  );
