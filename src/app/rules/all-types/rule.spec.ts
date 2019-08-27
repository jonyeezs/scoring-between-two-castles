import { AllTypesRule } from './index';
import { RoomRepositoryService } from '@app/core/room-repo/room-repository.service';
import { Room } from '@app/models/rooms/room.type';
import { MootRule } from '../moot-rule';

describe('AllTypesRule', () => {
  let repo: RoomRepositoryService;

  it('should calculate with given points', () => {
    const testCase = [
      //                                               [0,2]          [3,2]
      new Room( //                               [-1,1][0,1][1,1]     [3,1]     [5,1]
        'n', //                                  [-1,0][0,0  1,0][2,0][3,0][4,0][5,0]
        'throne', //                                      [1,-1][2,-1][3,-1]
        'none', //                                        [1,-2][2,-2][3,-2]
        [{ x: 0, y: 0 }, { x: 1, y: 0 }], //                    [2,-3][3,-3]
        new MootRule() //                                [3,-4]
      ),
      new Room('', 'corridor', 'mirror', [{ x: -1, y: 0 }], new MootRule()),
      new Room('', 'sleeping', 'mirror', [{ x: -1, y: 1 }], new MootRule()),
      new Room('', 'sleeping', 'mirror', [{ x: 0, y: 1 }], new MootRule()),
      new Room('', 'outdoor', 'mirror', [{ x: 0, y: 2 }], new MootRule()),
      new Room('', 'utility', 'mirror', [{ x: 1, y: 1 }], new MootRule()),
      new Room('', 'food', 'mirror', [{ x: 1, y: -1 }], new MootRule()),
      new Room('', 'corridor', 'mirror', [{ x: 1, y: -2 }], new MootRule()),
      new Room('', 'sleeping', 'mirror', [{ x: 2, y: 0 }], new MootRule()),
      new Room('', 'downstairs', 'mirror', [{ x: 2, y: -1 }], new MootRule()),
      // prettier-ignore
      new Room('', 'specialty', 'mirror', [{ x: 2, y: -2 }], new MootRule()),
      new Room('', 'downstairs', 'mirror', [{ x: 2, y: -3 }], new MootRule()),
      new Room(
        '',
        'sleeping',
        'none',
        [{ x: 3, y: 0 }],
        new AllTypesRule(6, 2, 6, ['throne', 'sleeping', 'specialty', 'none'])
      ),
      new Room('', 'living', 'none', [{ x: 3, y: 1 }], new MootRule()),
      new Room('', 'utility', 'none', [{ x: 3, y: 2 }], new MootRule()),
      new Room('', 'downstairs', 'none', [{ x: 3, y: -1 }], new MootRule()),
      new Room('', 'food', 'none', [{ x: 3, y: -2 }], new MootRule()),
      new Room('', 'downstairs', 'none', [{ x: 3, y: -3 }], new MootRule()),
      new Room('', 'corridor', 'none', [{ x: 3, y: -4 }], new MootRule()),
      new Room('', 'corridor', 'none', [{ x: 4, y: 0 }], new MootRule()),
      new Room('', 'sleeping', 'none', [{ x: 5, y: 0 }], new MootRule()),
      new Room('', 'outdoor', 'none', [{ x: 5, y: 1 }], new MootRule()),
    ];
    repo = new RoomRepositoryService();
    testCase.forEach(v => repo.add(v));

    expect(repo.calculatePoints({ x: 3, y: 0 })).toBe(6);
  });

  it('should calculate when all rooms accounted for', () => {
    const testCase = [
      //                                               [0,2]          [3,2]
      new Room( //                               [-1,1][0,1][1,1]     [3,1]     [5,1]
        'n', //                                  [-1,0][0,0  1,0][2,0][3,0][4,0][5,0]
        'throne', //                                      [1,-1][2,-1][3,-1]
        'none', //                                        [1,-2][2,-2][3,-2]
        [{ x: 0, y: 0 }, { x: 1, y: 0 }], //                    [2,-3][3,-3]
        new MootRule() //                                [3,-4]
      ),
      new Room('', 'corridor', 'mirror', [{ x: -1, y: 0 }], new MootRule()),
      new Room('', 'sleeping', 'mirror', [{ x: -1, y: 1 }], new MootRule()),
      new Room('', 'sleeping', 'mirror', [{ x: 0, y: 1 }], new MootRule()),
      new Room('', 'outdoor', 'mirror', [{ x: 0, y: 2 }], new MootRule()),
      new Room('', 'utility', 'mirror', [{ x: 1, y: 1 }], new MootRule()),
      new Room('', 'food', 'mirror', [{ x: 1, y: -1 }], new MootRule()),
      new Room('', 'corridor', 'mirror', [{ x: 1, y: -2 }], new MootRule()),
      new Room('', 'sleeping', 'mirror', [{ x: 2, y: 0 }], new MootRule()),
      new Room('', 'downstairs', 'mirror', [{ x: 2, y: -1 }], new MootRule()),
      // prettier-ignore
      new Room('', 'specialty', 'mirror', [{ x: 2, y: -2 }], new MootRule()),
      new Room('', 'downstairs', 'mirror', [{ x: 2, y: -3 }], new MootRule()),
      new Room(
        '',
        'sleeping',
        'none',
        [{ x: 3, y: 0 }],
        new AllTypesRule(4, 2, 6, ['throne', 'sleeping', 'specialty', 'none'])
      ),
      new Room('', 'living', 'none', [{ x: 3, y: 1 }], new MootRule()),
      new Room('', 'utility', 'none', [{ x: 3, y: 2 }], new MootRule()),
      new Room('', 'downstairs', 'none', [{ x: 3, y: -1 }], new MootRule()),
      new Room('', 'food', 'none', [{ x: 3, y: -2 }], new MootRule()),
      new Room('', 'downstairs', 'none', [{ x: 3, y: -3 }], new MootRule()),
      new Room('', 'corridor', 'none', [{ x: 3, y: -4 }], new MootRule()),
      new Room('', 'corridor', 'none', [{ x: 4, y: 0 }], new MootRule()),
      new Room('', 'sleeping', 'none', [{ x: 5, y: 0 }], new MootRule()),
      new Room('', 'outdoor', 'none', [{ x: 5, y: 1 }], new MootRule()),
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
        'none', //                                        [1,-2][2,-2][3,-2]
        [{ x: 0, y: 0 }, { x: 1, y: 0 }], //                    [2,-3][3,-3]
        new MootRule() //                                [3,-4]
      ),
      new Room('', 'corridor', 'none', [{ x: -1, y: 0 }], new MootRule()),
      new Room('', 'sleeping', 'none', [{ x: -1, y: 1 }], new MootRule()),
      new Room('', 'sleeping', 'none', [{ x: 0, y: 1 }], new MootRule()),
      new Room('', 'specialty', 'none', [{ x: 0, y: 2 }], new MootRule()),
      new Room('', 'utility', 'none', [{ x: 1, y: 1 }], new MootRule()),
      new Room('', 'food', 'none', [{ x: 1, y: -1 }], new MootRule()),
      new Room('', 'corridor', 'none', [{ x: 1, y: -2 }], new MootRule()),
      new Room('', 'sleeping', 'none', [{ x: 2, y: 0 }], new MootRule()),
      new Room('', 'downstairs', 'none', [{ x: 2, y: -1 }], new MootRule()),
      new Room('', 'corridor', 'none', [{ x: 2, y: -2 }], new MootRule()),
      new Room('', 'downstairs', 'none', [{ x: 2, y: -3 }], new MootRule()),
      new Room(
        '',
        'sleeping',
        'none',
        [{ x: 3, y: 0 }],
        new AllTypesRule(4, 1, 6, [
          'throne',
          'sleeping',
          'specialty',
          'none',
        ]) // prettier-ignore
      ),
      new Room('', 'living', 'none', [{ x: 3, y: 1 }], new MootRule()),
      new Room('', 'utility', 'none', [{ x: 3, y: 2 }], new MootRule()),
      new Room('', 'downstairs', 'none', [{ x: 3, y: -1 }], new MootRule()),
      new Room('', 'food', 'none', [{ x: 3, y: -2 }], new MootRule()),
      new Room('', 'downstairs', 'none', [{ x: 3, y: -3 }], new MootRule()),
      new Room('', 'corridor', 'none', [{ x: 3, y: -4 }], new MootRule()),
      new Room('', 'corridor', 'none', [{ x: 4, y: 0 }], new MootRule()),
      new Room('', 'utility', 'none', [{ x: 5, y: 0 }], new MootRule()),
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
        'none',
        [{ x: 0, y: 0 }, { x: 1, y: 0 }],
        new MootRule()
      ),
      new Room('', 'sleeping', 'none', [{ x: -1, y: 0 }], new MootRule()),
      // prettier-ignore
      new Room('', 'specialty', 'none', [{ x: -1, y: 1 }], new MootRule()),
      new Room('', 'sleeping', 'none', [{ x: 0, y: 1 }], new MootRule()),
      new Room('', 'sleeping', 'none', [{ x: 1, y: 1 }], new MootRule()),
      new Room('', 'sleeping', 'none', [{ x: 2, y: 0 }], new MootRule()),
      new Room(
        '',
        'sleeping',
        'none',
        [{ x: 3, y: 0 }],
        new AllTypesRule(4, 1, 6, ['throne', 'sleeping', 'specialty', 'none'])
      ),
      new Room('', 'sleeping', 'none', [{ x: 4, y: 0 }], new MootRule()),
    ];
    repo = new RoomRepositoryService();
    testCase.forEach(v => repo.add(v));

    expect(repo.calculatePoints({ x: 3, y: 0 })).toBe(1);
  });
});
