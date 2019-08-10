import { AllTypesRule } from './index';
import { RoomRepositoryService } from '@app/core/room-repository.service';
import { Room } from '@app/models/rooms/room.type';
import { ThroneRule } from '../thrones/throne.temp';
import { MootRule } from '../moot-rule';

describe('AllTypesRule', () => {
  let repo: RoomRepositoryService;

  it('should calculate when all rooms accounted for', () => {
    const testCase = [
      //                                               [0,2]          [3,2]
      new Room( //                               [-1,1][0,1][1,1]     [3,1]     [5,1]
        'n', //                                  [-1,0][0,0  1,0][2,0][3,0][4,0][5,0]
        'throne', //                                      [1,-1][2,-1][3,-1]
        [{ x: 0, y: 0 }, { x: 1, y: 0 }], //              [1,-2][2,-2][3,-2]
        new ThroneRule('some rule') //                         [2,-3][3,-3]
      ), //                                                          [3,-4]
      new Room('', 'corridor', [{ x: -1, y: 0 }], new MootRule()),
      new Room('', 'sleeping', [{ x: -1, y: 1 }], new MootRule()),
      new Room('', 'sleeping', [{ x: 0, y: 1 }], new MootRule()),
      new Room('', 'outdoor', [{ x: 0, y: 2 }], new MootRule()),
      new Room('', 'utility', [{ x: 1, y: 1 }], new MootRule()),
      new Room('', 'food', [{ x: 1, y: -1 }], new MootRule()),
      new Room('', 'corridor', [{ x: 1, y: -2 }], new MootRule()),
      new Room('', 'sleeping', [{ x: 2, y: 0 }], new MootRule()),
      new Room('', 'downstairs', [{ x: 2, y: -1 }], new MootRule()),
      new Room('', 'outdoor special', [{ x: 2, y: -2 }], new MootRule()),
      new Room('', 'downstairs', [{ x: 2, y: -3 }], new MootRule()),
      new Room(
        '',
        'sleeping',
        [{ x: 3, y: 0 }],
        new AllTypesRule(4, 2, 6, [
          'throne',
          'sleeping',
          'outdoor special',
          'none',
        ])
      ),
      new Room('', 'living', [{ x: 3, y: 1 }], new MootRule()),
      new Room('', 'utility', [{ x: 3, y: 2 }], new MootRule()),
      new Room('', 'downstairs', [{ x: 3, y: -1 }], new MootRule()),
      new Room('', 'food', [{ x: 3, y: -2 }], new MootRule()),
      new Room('', 'downstairs', [{ x: 3, y: -3 }], new MootRule()),
      new Room('', 'corridor', [{ x: 3, y: -4 }], new MootRule()),
      new Room('', 'corridor', [{ x: 4, y: 0 }], new MootRule()),
      new Room('', 'sleeping', [{ x: 5, y: 0 }], new MootRule()),
      new Room('', 'outdoor', [{ x: 5, y: 1 }], new MootRule()),
    ];
    repo = new RoomRepositoryService();
    testCase.forEach(v => repo.add(v));

    expect(repo.calculatePoints({ x: 3, y: 0 })).toBe(4);
  });

  it('should calculate when atleast one not available', () => {
    const testCase = [
      //                                               [0,2]          [3,2]
      new Room( //                               [-1,1][0,1][1,1]     [3,1]
        'n', //                                  [-1,0][0,0  1,0][2,0][3,0][4,0][5,0]
        'throne', //                                      [1,-1][2,-1][3,-1]
        [{ x: 0, y: 0 }, { x: 1, y: 0 }], //              [1,-2][2,-2][3,-2]
        new ThroneRule('some rule') //                         [2,-3][3,-3]
      ), //                                                          [3,-4]
      new Room('', 'corridor', [{ x: -1, y: 0 }], new MootRule()),
      new Room('', 'sleeping', [{ x: -1, y: 1 }], new MootRule()),
      new Room('', 'sleeping', [{ x: 0, y: 1 }], new MootRule()),
      new Room('', 'outdoor special', [{ x: 0, y: 2 }], new MootRule()),
      new Room('', 'utility', [{ x: 1, y: 1 }], new MootRule()),
      new Room('', 'food', [{ x: 1, y: -1 }], new MootRule()),
      new Room('', 'corridor', [{ x: 1, y: -2 }], new MootRule()),
      new Room('', 'sleeping', [{ x: 2, y: 0 }], new MootRule()),
      new Room('', 'downstairs', [{ x: 2, y: -1 }], new MootRule()),
      new Room('', 'corridor', [{ x: 2, y: -2 }], new MootRule()),
      new Room('', 'downstairs', [{ x: 2, y: -3 }], new MootRule()),
      new Room(
        '',
        'sleeping',
        [{ x: 3, y: 0 }],
        new AllTypesRule(4, 1, 6, [
          'throne',
          'sleeping',
          'outdoor special',
          'none',
        ])
      ),
      new Room('', 'living', [{ x: 3, y: 1 }], new MootRule()),
      new Room('', 'utility', [{ x: 3, y: 2 }], new MootRule()),
      new Room('', 'downstairs', [{ x: 3, y: -1 }], new MootRule()),
      new Room('', 'food', [{ x: 3, y: -2 }], new MootRule()),
      new Room('', 'downstairs', [{ x: 3, y: -3 }], new MootRule()),
      new Room('', 'corridor', [{ x: 3, y: -4 }], new MootRule()),
      new Room('', 'corridor', [{ x: 4, y: 0 }], new MootRule()),
      new Room('', 'utility', [{ x: 5, y: 0 }], new MootRule()),
    ];
    repo = new RoomRepositoryService();
    testCase.forEach(v => repo.add(v));

    expect(repo.calculatePoints({ x: 3, y: 0 })).toBe(1);
  });

  it('should calculate when none available', () => {
    const testCase = [
      new Room( //                               [-1,1][0,1][1,1]
        'n', //                                  [-1,0][0,0  1,0][2,0][3,0][4,0]
        'throne',
        [{ x: 0, y: 0 }, { x: 1, y: 0 }],
        new ThroneRule('some rule')
      ),
      new Room('', 'sleeping', [{ x: -1, y: 0 }], new MootRule()),
      new Room('', 'outdoor special', [{ x: -1, y: 1 }], new MootRule()),
      new Room('', 'sleeping', [{ x: 0, y: 1 }], new MootRule()),
      new Room('', 'sleeping', [{ x: 1, y: 1 }], new MootRule()),
      new Room('', 'sleeping', [{ x: 2, y: 0 }], new MootRule()),
      new Room(
        '',
        'sleeping',
        [{ x: 3, y: 0 }],
        new AllTypesRule(4, 1, 6, [
          'throne',
          'sleeping',
          'outdoor special',
          'none',
        ])
      ),
      new Room('', 'sleeping', [{ x: 4, y: 0 }], new MootRule()),
    ];
    repo = new RoomRepositoryService();
    testCase.forEach(v => repo.add(v));

    expect(repo.calculatePoints({ x: 3, y: 0 })).toBe(1);
  });
});
