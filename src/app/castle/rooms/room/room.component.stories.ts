import { storiesOf, moduleMetadata } from '@storybook/angular';
import { RoomComponent } from './room.component';

storiesOf('Room Component', module).add('with room name', () => ({
  component: RoomComponent,
  props: {
    name: 'Nursery',
  },
}));
