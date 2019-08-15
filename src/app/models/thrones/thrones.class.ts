import { Room } from '../rooms/room.type';
import { ThroneRule } from '@app/rules/thrones/throne.temp';

export const thrones = [
  new Room(
    'living and corridor',
    'throne',
    'none',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    new ThroneRule('2 per 🔥➖ at ← →')
  ),
  new Room(
    'living and sleep',
    'throne',
    'none',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    new ThroneRule('2 per 🔥💤 at ↑ ↑')
  ),
  new Room(
    'corridor and downstairs',
    'throne',
    'none',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    new ThroneRule('2 per ➖️↘️ at ↓ ↓')
  ),
  new Room(
    'food and sleep',
    'throne',
    'none',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    new ThroneRule('2 per 🍷💤 at ← ↑')
  ),
  new Room(
    'utility and sleep',
    'throne',
    'none',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    new ThroneRule('2 per 🔨💤 at ↑ →')
  ),
  new Room(
    'corridor and food',
    'throne',
    'none',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    new ThroneRule('2 per ➖🍷 at ↑ ↑')
  ),
  new Room(
    'utility and food',
    'throne',
    'none',
    [{ x: 0, y: 0 }, { x: 1, y: 0 }],
    new ThroneRule('2 per 🔨🍷 at ← →')
  ),
];
