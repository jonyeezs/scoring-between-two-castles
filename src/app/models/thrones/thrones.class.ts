import { Room } from '../rooms/room.type';

export const thrones = [
  new Room(
    'Throne Room: living and corridor',
    '👑',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    { description: '2 per 🔥➖ at ← →' }
  ),
  new Room(
    'Throne Room: living and sleep',
    '👑',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    { description: '2 per 🔥💤 at ↑ ↑' }
  ),
  new Room(
    'Throne Room: corridor and downstairs',
    '👑',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    { description: '2 per ➖️↘️ at ↓ ↓' }
  ),
  new Room(
    'Throne Room: food and sleep',
    '👑',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    { description: '2 per 🍷💤 at ← ↑' }
  ),
  new Room(
    'Throne Room: utility and sleep',
    '👑',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    { description: '2 per 🔨💤 at ↑ →' }
  ),
  new Room(
    'Throne Room: corridor and food',
    '👑',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    { description: '2 per ➖🍷 at ↑ ↑' }
  ),
  new Room(
    'Throne Room: utility and food',
    '👑',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    { description: '2 per 🔨🍷 at ← →' }
  ),
];
