import { AllVerticalRule } from './index';
import { RoomRepositoryService } from '@app/core/room-repository.service';
import { Room } from '@app/models/rooms/room.type';
import { ThroneRule } from '../thrones/throne.temp';
import { MootRule } from '../moot-rule';
import {
  VerticalDirections,
  AllRoomTypes,
} from '@app/helpers/room-combinations';

describe('AllVerticalRule', () => {
  let repo: RoomRepositoryService;

  describe('any below', () => {
    let subject: AllVerticalRule;
    beforeEach(() => {
      subject = new AllVerticalRule(
        1,
        ['below'],
        [
          'corridor',
          'downstairs',
          'food',
          'living',
          'outdoor',
          'sleeping',
          'throne',
          'utility',
        ]
      );
    });

    it('should calculate for all available', () => {
      const testCase = [
        //                                               [0,2]          [3,2]
        new Room( //                               [-1,1][0,1][1,1]     [3,1]     [5,1]
          'n', //                                  [-1,0][0,0  1,0][2,0][3,0][4,0][5,0]
          'throne', //                                      [1,-1][2,-1][3,-1]
          'none', //                                        [1,-2][2,-2][3,-2]
          [{ x: 0, y: 0 }, { x: 1, y: 0 }], //                    [2,-3][3,-3]
          new ThroneRule('some rule') //                                [3,-4]
        ),
        new Room('', 'corridor', 'none', [{ x: -1, y: 0 }], new MootRule()),
        new Room('', 'sleeping', 'none', [{ x: -1, y: 1 }], new MootRule()),
        new Room('', 'sleeping', 'none', [{ x: 0, y: 1 }], new MootRule()),
        new Room('', 'outdoor', 'none', [{ x: 0, y: 2 }], new MootRule()),
        // prettier-ignore
        new Room('', 'outdoor special', 'none', [{ x: 1, y: 1 }], new MootRule()),
        new Room('', 'food', 'none', [{ x: 1, y: -1 }], new MootRule()),
        new Room('', 'corridor', 'none', [{ x: 1, y: -2 }], new MootRule()),
        new Room('', 'sleeping', 'none', [{ x: 2, y: 0 }], new MootRule()),
        new Room('', 'downstairs', 'none', [{ x: 2, y: -1 }], new MootRule()),
        // prettier-ignore
        new Room('', 'outdoor special', 'none', [{ x: 2, y: -2 }], new MootRule()),
        new Room('', 'downstairs', 'none', [{ x: 2, y: -3 }], new MootRule()),
        new Room('', 'sleeping', 'none', [{ x: 3, y: 0 }], new MootRule()),
        new Room('', 'living', 'none', [{ x: 3, y: 1 }], subject),
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

      expect(repo.calculatePoints({ x: 3, y: 1 })).toBe(5);
    });
  });

  describe('any above', () => {
    let subject: AllVerticalRule;
    beforeEach(() => {
      subject = new AllVerticalRule(
        1,
        ['above'],
        [
          'corridor',
          'downstairs',
          'food',
          'living',
          'outdoor',
          'sleeping',
          'throne',
          'utility',
        ]
      );
    });

    it('should calculate for all available rooms', () => {
      const testCase = [
        //                                               [0,2]          [3,2]
        new Room( //                               [-1,1][0,1][1,1]     [3,1]     [5,1]
          'n', //                                  [-1,0][0,0  1,0][2,0][3,0][4,0][5,0]
          'throne', //                                      [1,-1][2,-1][3,-1]
          'none', //                                        [1,-2][2,-2][3,-2]
          [{ x: 0, y: 0 }, { x: 1, y: 0 }], //                    [2,-3][3,-3]
          new ThroneRule('some rule') //                                [3,-4]
        ),
        new Room('', 'corridor', 'none', [{ x: -1, y: 0 }], new MootRule()),
        new Room('', 'sleeping', 'none', [{ x: -1, y: 1 }], new MootRule()),
        new Room('', 'sleeping', 'none', [{ x: 0, y: 1 }], new MootRule()),
        new Room('', 'outdoor', 'none', [{ x: 0, y: 2 }], new MootRule()),
        // prettier-ignore
        new Room('', 'outdoor special', 'none', [{ x: 1, y: 1 }], new MootRule()),
        new Room('', 'food', 'none', [{ x: 1, y: -1 }], new MootRule()),
        new Room('', 'corridor', 'none', [{ x: 1, y: -2 }], new MootRule()),
        new Room('', 'sleeping', 'none', [{ x: 2, y: 0 }], new MootRule()),
        new Room('', 'downstairs', 'none', [{ x: 2, y: -1 }], new MootRule()),
        // prettier-ignore
        new Room('', 'outdoor special', 'none', [{ x: 2, y: -2 }], new MootRule()),
        new Room('', 'downstairs', 'none', [{ x: 2, y: -3 }], new MootRule()),
        new Room('', 'sleeping', 'none', [{ x: 3, y: 0 }], new MootRule()),
        new Room('', 'living', 'none', [{ x: 3, y: 1 }], new MootRule()),
        new Room('', 'utility', 'none', [{ x: 3, y: 2 }], new MootRule()),
        new Room('', 'downstairs', 'none', [{ x: 3, y: -1 }], new MootRule()),
        new Room('', 'food', 'none', [{ x: 3, y: -2 }], subject),
        new Room('', 'downstairs', 'none', [{ x: 3, y: -3 }], new MootRule()),
        new Room('', 'corridor', 'none', [{ x: 3, y: -4 }], new MootRule()),
        new Room('', 'corridor', 'none', [{ x: 4, y: 0 }], new MootRule()),
        new Room('', 'sleeping', 'none', [{ x: 5, y: 0 }], new MootRule()),
        new Room('', 'outdoor', 'none', [{ x: 5, y: 1 }], new MootRule()),
      ];
      repo = new RoomRepositoryService();
      testCase.forEach(v => repo.add(v));

      expect(repo.calculatePoints({ x: 3, y: -2 })).toBe(4);
    });
  });

  describe('any above and below', () => {
    let subject: AllVerticalRule;
    beforeEach(() => {
      subject = new AllVerticalRule(1, ['below', 'above'], AllRoomTypes);
    });

    it('should calculate successfully', () => {
      const testCase = [
        //                                               [0,2]          [3,2]
        new Room( //                               [-1,1][0,1][1,1]     [3,1]     [5,1]
          'n', //                                  [-1,0][0,0  1,0][2,0][3,0][4,0][5,0]
          'throne', //                                      [1,-1][2,-1][3,-1]
          'none', //                                        [1,-2][2,-2][3,-2]
          [{ x: 0, y: 0 }, { x: 1, y: 0 }], //                    [2,-3][3,-3]
          new ThroneRule('some rule') //                                [3,-4]
        ),
        new Room('', 'corridor', 'none', [{ x: -1, y: 0 }], new MootRule()),
        new Room('', 'sleeping', 'none', [{ x: -1, y: 1 }], new MootRule()),
        new Room('', 'sleeping', 'none', [{ x: 0, y: 1 }], new MootRule()),
        new Room('', 'outdoor', 'none', [{ x: 0, y: 2 }], new MootRule()),
        // prettier-ignore
        new Room('', 'outdoor special', 'none', [{ x: 1, y: 1 }], new MootRule()),
        new Room('', 'food', 'none', [{ x: 1, y: -1 }], subject),
        new Room('', 'corridor', 'none', [{ x: 1, y: -2 }], new MootRule()),
        new Room('', 'sleeping', 'none', [{ x: 2, y: 0 }], new MootRule()),
        new Room('', 'downstairs', 'none', [{ x: 2, y: -1 }], new MootRule()),
        // prettier-ignore
        new Room('', 'outdoor special', 'none', [{ x: 2, y: -2 }], new MootRule()),
        new Room('', 'downstairs', 'none', [{ x: 2, y: -3 }], new MootRule()),
        new Room('', 'sleeping', 'none', [{ x: 3, y: 0 }], new MootRule()),
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

      expect(repo.calculatePoints({ x: 1, y: -1 })).toBe(3);
    });
  });

  it('should calculate when atleast one not available', () => {
    const testCase = [
      //                                               [0,2]          [3,2]
      new Room( //                               [-1,1][0,1][1,1]     [3,1]
        'n', //                                  [-1,0][0,0  1,0][2,0][3,0][4,0][5,0]
        'throne', //                                      [1,-1][2,-1][3,-1]
        'none', //                                        [1,-2][2,-2][3,-2]
        [{ x: 0, y: 0 }, { x: 1, y: 0 }], //                    [2,-3][3,-3]
        new ThroneRule('some rule') //                                [3,-4]
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
      new Room('', 'corridor', 'mirror', [{ x: 2, y: -2 }], new MootRule()),
      new Room('', 'downstairs', 'mirror', [{ x: 2, y: -3 }], new MootRule()),
      new Room(
        '',
        'sleeping',
        'none',
        [{ x: 3, y: 0 }],
        new AllVerticalRule(1, ['below'], ['corridor'])
      ),
      new Room('', 'living', 'painting', [{ x: 3, y: 1 }], new MootRule()),
      new Room('', 'corridor', 'painting', [{ x: 3, y: 2 }], new MootRule()),
      new Room('', 'downstairs', 'painting', [{ x: 3, y: -1 }], new MootRule()),
      new Room('', 'corridor', 'painting', [{ x: 3, y: -2 }], new MootRule()),
      new Room('', 'downstairs', 'painting', [{ x: 3, y: -3 }], new MootRule()),
      new Room('', 'downstairs', 'painting', [{ x: 3, y: -4 }], new MootRule()),
      new Room('', 'corridor', 'painting', [{ x: 4, y: 0 }], new MootRule()),
      new Room('', 'utility', 'painting', [{ x: 5, y: 0 }], new MootRule()),
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
        new ThroneRule('some rule')
      ),
      new Room('', 'sleeping', 'none', [{ x: -1, y: 0 }], new MootRule()),
      // prettier-ignore
      new Room('', 'outdoor special', 'none', [{ x: -1, y: 1 }], new MootRule()),
      new Room('', 'sleeping', 'none', [{ x: 0, y: 1 }], new MootRule()),
      new Room('', 'sleeping', 'none', [{ x: 1, y: 1 }], new MootRule()),
      new Room('', 'sleeping', 'none', [{ x: 2, y: 0 }], new MootRule()),
      new Room(
        '',
        'sleeping',
        'none',
        [{ x: 3, y: 0 }],
        new AllVerticalRule(1, VerticalDirections, ['downstairs'])
      ),
      new Room('', 'sleeping', 'none', [{ x: 4, y: 0 }], new MootRule()),
    ];
    repo = new RoomRepositoryService();
    testCase.forEach(v => repo.add(v));

    expect(repo.calculatePoints({ x: 3, y: 0 })).toBe(0);
  });
});
