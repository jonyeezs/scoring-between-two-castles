import { AnywhereRule } from './index';
import { RoomRepositoryService } from '@app/core/room-repo/room-repository.service';
import { Room } from '@app/models/rooms/room.type';
import { MootRule } from '../moot-rule';

describe('AnywhereRule', () => {
  describe('calculate base on given points', () => {
    let testCase: Room[];
    let repo: RoomRepositoryService;
    beforeEach(() => {
      testCase = [
        //                                               [0,2]          [3,2]
        new Room( //                               [-1,1][0,1][1,1]     [3,1]     [5,1]
          'n', //                                  [-1,0][0,0  1,0][2,0][3,0][4,0][5,0]
          'throne', //                                      [1,-1][2,-1][3,-1]
          'none', //                                        [1,-2][2,-2][3,-2]
          [{ x: 0, y: 0 }, { x: 1, y: 0 }], //                    [2,-3][3,-3]
          new MootRule() //                                [3,-4]
        ), //     [0,2], [5,1] === outdoor
        //         [-1,0], [4,0], [1,-2] & [3,-4] == corridors
        //         [3,1], [3,0], [5,0], [-1,1], [0,1], [2, 0] == sleeping
        //         rest can be whatever else
        //         [1,-2] = corridor pts
        //         [2, -1] = sleeping pts
        //         [4,0] = outdoor pts
        //         [3,2] = living none
        new Room('', 'corridor', 'none', [{ x: -1, y: 0 }], new MootRule()),
        new Room('', 'sleeping', 'none', [{ x: -1, y: 1 }], new MootRule()),
        new Room('', 'sleeping', 'none', [{ x: 0, y: 1 }], new MootRule()),
        new Room('', 'outdoor', 'none', [{ x: 0, y: 2 }], new MootRule()),
        new Room('', 'utility', 'none', [{ x: 1, y: 1 }], new MootRule()),
        new Room('', 'food', 'none', [{ x: 1, y: -1 }], new MootRule()),
        new Room(
          '',
          'corridor',
          'painting',
          [{ x: 1, y: -2 }],
          new AnywhereRule(1, 'corridor')
        ),
        new Room('', 'sleeping', 'mirror', [{ x: 2, y: 0 }], new MootRule()),
        new Room(
          '',
          'downstairs',
          'mirror',
          [{ x: 2, y: -1 }],
          new AnywhereRule(2, 'sleeping')
        ),
        new Room('', 'downstairs', 'mirror', [{ x: 2, y: -2 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 2, y: -3 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 3, y: 0 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 3, y: 1 }], new MootRule()),
        // prettier-ignore
        new Room('', 'utility', 'mirror', [{ x: 3, y: 2 }], new AnywhereRule(2, 'living')),
        new Room('', 'downstairs', 'mirror', [{ x: 3, y: -1 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 3, y: -2 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 3, y: -3 }], new MootRule()),
        new Room('', 'corridor', 'mirror', [{ x: 3, y: -4 }], new MootRule()),
        new Room(
          '',
          'corridor',
          'painting',
          [{ x: 4, y: 0 }],
          new AnywhereRule(1, 'outdoor')
        ),
        new Room('', 'sleeping', 'crest', [{ x: 5, y: 0 }], new MootRule()),
        new Room('', 'outdoor', 'none', [{ x: 5, y: 1 }], new MootRule()),
      ];
      repo = new RoomRepositoryService();
      testCase.forEach(v => repo.add(v));
    });

    it('should calculate correctly', () => {
      expect(repo.calculatePoints({ x: 2, y: -1 })).toBe(12);
    });
  });

  describe('calculate', () => {
    let testCase: Room[];
    let repo: RoomRepositoryService;

    beforeEach(() => {
      testCase = [
        //                                               [0,2]          [3,2]
        new Room( //                               [-1,1][0,1][1,1]     [3,1]     [5,1]
          'n', //                                  [-1,0][0,0  1,0][2,0][3,0][4,0][5,0]
          'throne', //                                      [1,-1][2,-1][3,-1]
          'none', //                                        [1,-2][2,-2][3,-2]
          [{ x: 0, y: 0 }, { x: 1, y: 0 }], //                    [2,-3][3,-3]
          new MootRule() //                                [3,-4]
        ), //     [0,2], [5,1] === outdoor
        //         [-1,0], [4,0], [1,-2] & [3,-4] == corridors
        //         [3,1], [3,0], [5,0], [-1,1], [0,1], [2, 0] == sleeping
        //         rest can be whatever else
        //         [1,-2] = corridor pts
        //         [2, -1] = sleeping pts
        //         [4,0] = outdoor pts
        //         [3,2] = living none
        new Room('', 'corridor', 'none', [{ x: -1, y: 0 }], new MootRule()),
        new Room('', 'sleeping', 'none', [{ x: -1, y: 1 }], new MootRule()),
        new Room('', 'sleeping', 'none', [{ x: 0, y: 1 }], new MootRule()),
        new Room('', 'outdoor', 'none', [{ x: 0, y: 2 }], new MootRule()),
        new Room('', 'utility', 'none', [{ x: 1, y: 1 }], new MootRule()),
        new Room('', 'food', 'none', [{ x: 1, y: -1 }], new MootRule()),
        new Room(
          '',
          'corridor',
          'painting',
          [{ x: 1, y: -2 }],
          new AnywhereRule(1, 'corridor')
        ),
        new Room('', 'sleeping', 'mirror', [{ x: 2, y: 0 }], new MootRule()),
        new Room(
          '',
          'downstairs',
          'mirror',
          [{ x: 2, y: -1 }],
          new AnywhereRule(1, 'sleeping')
        ),
        new Room('', 'downstairs', 'mirror', [{ x: 2, y: -2 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 2, y: -3 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 3, y: 0 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 3, y: 1 }], new MootRule()),
        // prettier-ignore
        new Room('', 'utility', 'mirror', [{ x: 3, y: 2 }], new AnywhereRule(1, 'living')),
        new Room('', 'downstairs', 'mirror', [{ x: 3, y: -1 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 3, y: -2 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 3, y: -3 }], new MootRule()),
        new Room('', 'corridor', 'mirror', [{ x: 3, y: -4 }], new MootRule()),
        new Room(
          '',
          'corridor',
          'painting',
          [{ x: 4, y: 0 }],
          new AnywhereRule(1, 'outdoor')
        ),
        new Room('', 'sleeping', 'crest', [{ x: 5, y: 0 }], new MootRule()),
        new Room('', 'outdoor', 'none', [{ x: 5, y: 1 }], new MootRule()),
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
});
