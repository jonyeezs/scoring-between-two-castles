import { AnywhereRule } from './index';
import { RoomRepositoryService } from '@app/core/room-repository.service';
import { Room } from '@app/models/rooms/room.type';
import { ThroneRule } from '../thrones/throne.temp';
import { MootRule } from '../moot-rule';

describe('AnywhereRule', () => {
  let testCase: Room[];
  let repo: RoomRepositoryService;

  beforeEach(() => {
    testCase = [
      //                                               [0,2]          [3,2]
      new Room( //                               [-1,1][0,1][1,1]     [3,1]     [5,1]
        'n', //                                  [-1,0][0,0  1,0][2,0][3,0][4,0][5,0]
        'throne', //                                      [1,-1][2,-1][3,-1]
        [{ x: 0, y: 0 }, { x: 1, y: 0 }], //              [1,-2][2,-2][3,-2]
        new ThroneRule('some rule') //                         [2,-3][3,-3]
      ), //     [0,2], [5,1] === outdoor                             [3,-4]
      //         [-1,0], [4,0], [1,-2] & [3,-4] == corridors
      //         [3,1], [3,0], [5,0], [-1,1], [0,1], [2, 0] == sleeping
      //         rest can be whatever else
      //         [1,-2] = corridor pts
      //         [2, -1] = sleeping pts
      //         [4,0] = outdoor pts
      //         [3,2] = living none
      new Room('', 'corridor', [{ x: -1, y: 0 }], new MootRule()),
      new Room('', 'sleeping', [{ x: -1, y: 1 }], new MootRule()),
      new Room('', 'sleeping', [{ x: 0, y: 1 }], new MootRule()),
      new Room('', 'outdoor', [{ x: 0, y: 2 }], new MootRule()),
      new Room('', 'utility', [{ x: 1, y: 1 }], new MootRule()),
      new Room('', 'food', [{ x: 1, y: -1 }], new MootRule()),
      new Room(
        '',
        'corridor',
        [{ x: 1, y: -2 }],
        new AnywhereRule(1, 'corridor')
      ),
      new Room('', 'sleeping', [{ x: 2, y: 0 }], new MootRule()),
      new Room(
        '',
        'downstairs',
        [{ x: 2, y: -1 }],
        new AnywhereRule(1, 'sleeping')
      ),
      new Room('', 'downstairs', [{ x: 2, y: -2 }], new MootRule()),
      new Room('', 'downstairs', [{ x: 2, y: -3 }], new MootRule()),
      new Room('', 'sleeping', [{ x: 3, y: 0 }], new MootRule()),
      new Room('', 'sleeping', [{ x: 3, y: 1 }], new MootRule()),
      new Room('', 'utility', [{ x: 3, y: 2 }], new AnywhereRule(1, 'living')),
      new Room('', 'downstairs', [{ x: 3, y: -1 }], new MootRule()),
      new Room('', 'downstairs', [{ x: 3, y: -2 }], new MootRule()),
      new Room('', 'downstairs', [{ x: 3, y: -3 }], new MootRule()),
      new Room('', 'corridor', [{ x: 3, y: -4 }], new MootRule()),
      new Room(
        '',
        'corridor',
        [{ x: 4, y: 0 }],
        new AnywhereRule(1, 'outdoor')
      ),
      new Room('', 'sleeping', [{ x: 5, y: 0 }], new MootRule()),
      new Room('', 'outdoor', [{ x: 5, y: 1 }], new MootRule()),
    ];
    repo = new RoomRepositoryService();
    testCase.forEach(v => repo.add(v));
  });

  it('should calculate correctly', () => {
    expect(repo.calculatePoints({ x: 2, y: -1 })).toBe(6);
  });

  it('should calculate correctly when none', () => {
    expect(repo.calculatePoints({ x: 3, y: 2 })).toBe(0);
  });

  it('should calculate far between', () => {
    expect(repo.calculatePoints({ x: 4, y: 0 })).toBe(2);
  });

  it('should calculate including itself', () => {
    expect(repo.calculatePoints({ x: 1, y: -2 })).toBe(4);
  });
});
