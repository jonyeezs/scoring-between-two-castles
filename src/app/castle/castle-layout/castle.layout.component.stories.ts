import { storiesOf, moduleMetadata } from '@storybook/angular';
import { Room } from '../../models/rooms/room.type';
import { CastleLayoutModule } from './castle-layout.module';
import { RoomsModule } from '../rooms/rooms.module';
import { MootRule } from '@app/rules/moot-rule';

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
          new Room(
            'Throne Room',
            'throne',
            'none',
            [{ x: 0, y: 0 }, { x: 1, y: 0 }],
            new MootRule()
          ),
          new Room(
            'Room to left',
            'sleeping',
            'mirror',
            [{ x: -1, y: 0 }],
            new MootRule()
          ),
          new Room(
            'Room to right',
            'food',
            'crest',
            [{ x: 2, y: 0 }],
            new MootRule()
          ),
          new Room(
            'Basement',
            'downstairs',
            'painting',
            [{ x: 0, y: -1 }],
            new MootRule()
          ),
        ],
      },
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
