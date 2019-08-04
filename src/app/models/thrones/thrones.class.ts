import { Room } from '../rooms/room.type';

export const thrones = [
  new Room(
    'living and corridor',
    'throne',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    '2 per 🔥➖ at ← →'
  ),
  new Room(
    'living and sleep',
    'throne',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    '2 per 🔥💤 at ↑ ↑'
  ),
  new Room(
    'corridor and downstairs',
    'throne',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    '2 per ➖️↘️ at ↓ ↓'
  ),
  new Room(
    'food and sleep',
    'throne',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    '2 per 🍷💤 at ← ↑'
  ),
  new Room(
    'utility and sleep',
    'throne',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    '2 per 🔨💤 at ↑ →'
  ),
  new Room(
    'corridor and food',
    'throne',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    '2 per ➖🍷 at ↑ ↑'
  ),
  new Room(
    'utility and food',
    'throne',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    '2 per 🔨🍷 at ← →'
  ),
];
