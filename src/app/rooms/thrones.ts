import { Room } from '../models/rooms/room.type';
import {
  ThroneAboveRule,
  ThroneHorizontalSideRule,
  ThroneBelowRule,
  ThroneLeftSideRule,
  ThroneRightSideRule,
} from '@app/rules/thrones';

export const thrones = [
  new Room(
    '2 pts 🔥➖  ← →',
    'throne',
    'none',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    new ThroneHorizontalSideRule(['living', 'corridor'])
  ),
  new Room(
    '2 pts 🔥💤  ↑ ↑',
    'throne',
    'none',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    new ThroneAboveRule(['living', 'sleeping'])
  ),
  new Room(
    '2 pts ➖️↘️  ↓ ↓',
    'throne',
    'none',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    new ThroneBelowRule(['corridor', 'downstairs'])
  ),
  new Room(
    '2 pts 🍷💤  ← ↑',
    'throne',
    'none',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    new ThroneLeftSideRule(['food', 'sleeping'])
  ),
  new Room(
    '2 pts 🔨💤  ↑ →',
    'throne',
    'none',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    new ThroneRightSideRule(['utility', 'sleeping'])
  ),
  new Room(
    '2 pts ➖🍷  ↑ ↑',
    'throne',
    'none',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    new ThroneAboveRule(['corridor', 'food'])
  ),
  new Room(
    '2 pts 🔨🍷  ← →',
    'throne',
    'none',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    new ThroneHorizontalSideRule(['utility', 'food'])
  ),
];
