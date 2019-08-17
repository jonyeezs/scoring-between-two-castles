import { RoomType, RoomHanging } from '@app/models/rooms/room.type';
import {
  VerticalDirection,
  HorizontalDirection,
  Direction,
} from '@app/models/grid-linked-list/grid-node-traverser';

export const AllRoomTypes: RoomType[] = [
  'outdoor special',
  'throne',
  'downstairs',
  'living',
  'sleeping',
  'food',
  'corridor',
  'outdoor',
  'utility',
];

export const AllRegularRoomTypes: RoomType[] = [
  'downstairs',
  'living',
  'sleeping',
  'food',
  'corridor',
  'utility',
];

export const SpecialRoomTypes: RoomType[] = ['throne', 'outdoor special'];

export const AllHangingTypes: RoomHanging[] = [
  'mirror',
  'painting',
  'crest',
  'torch',
];

export const VerticalDirections: VerticalDirection[] = ['above', 'below'];
export const HorizontalDirections: HorizontalDirection[] = ['left', 'right'];
export const MovementDirections: Direction[] = [
  'above',
  'below',
  'left',
  'right',
];
export const AllDirections: Direction[] = [
  ...VerticalDirections,
  ...HorizontalDirections,
  'upper-left',
  'lower-left',
  'upper-right',
  'lower-right',
];
