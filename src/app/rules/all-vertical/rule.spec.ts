import { AllVerticalRule } from './index';
import {
  RoomRepositoryService,
  GridRoom,
} from '@app/core/room-repository.service';
import { Room } from '@app/models/rooms/room.type';
import { ThroneRule } from '../thrones/throne.temp';
import { MootRule } from '../moot-rule';
import { AllTypesRule } from '../all-types';

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
          [{ x: 0, y: 0 }, { x: 1, y: 0 }], //              [1,-2][2,-2][3,-2]
          new ThroneRule('some rule') //                          [2,-3][3,-3]
        ), //                                                           [3,-4]
        new Room('', 'corridor', [{ x: -1, y: 0 }], new MootRule()),
        new Room('', 'sleeping', [{ x: -1, y: 1 }], new MootRule()),
        new Room('', 'sleeping', [{ x: 0, y: 1 }], new MootRule()),
        new Room('', 'outdoor', [{ x: 0, y: 2 }], new MootRule()),
        new Room('', 'outdoor special', [{ x: 1, y: 1 }], new MootRule()),
        new Room('', 'food', [{ x: 1, y: -1 }], new MootRule()),
        new Room('', 'corridor', [{ x: 1, y: -2 }], new MootRule()),
        new Room('', 'sleeping', [{ x: 2, y: 0 }], new MootRule()),
        new Room('', 'downstairs', [{ x: 2, y: -1 }], new MootRule()),
        new Room('', 'outdoor special', [{ x: 2, y: -2 }], new MootRule()),
        new Room('', 'downstairs', [{ x: 2, y: -3 }], new MootRule()),
        new Room('', 'sleeping', [{ x: 3, y: 0 }], new MootRule()),
        new Room('', 'living', [{ x: 3, y: 1 }], subject),
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

      expect(repo.calculatePoints({ x: 3, y: 1 })).toBe(5);
    });
  });

  describe('any above', () => {
    let subject: AllVerticalRule<GridRoom>;
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
          [{ x: 0, y: 0 }, { x: 1, y: 0 }], //              [1,-2][2,-2][3,-2]
          new ThroneRule('some rule') //                          [2,-3][3,-3]
        ), //                                                           [3,-4]
        new Room('', 'corridor', [{ x: -1, y: 0 }], new MootRule()),
        new Room('', 'sleeping', [{ x: -1, y: 1 }], new MootRule()),
        new Room('', 'sleeping', [{ x: 0, y: 1 }], new MootRule()),
        new Room('', 'outdoor', [{ x: 0, y: 2 }], new MootRule()),
        new Room('', 'outdoor special', [{ x: 1, y: 1 }], new MootRule()),
        new Room('', 'food', [{ x: 1, y: -1 }], new MootRule()),
        new Room('', 'corridor', [{ x: 1, y: -2 }], new MootRule()),
        new Room('', 'sleeping', [{ x: 2, y: 0 }], new MootRule()),
        new Room('', 'downstairs', [{ x: 2, y: -1 }], new MootRule()),
        new Room('', 'outdoor special', [{ x: 2, y: -2 }], new MootRule()),
        new Room('', 'downstairs', [{ x: 2, y: -3 }], new MootRule()),
        new Room('', 'sleeping', [{ x: 3, y: 0 }], new MootRule()),
        new Room('', 'living', [{ x: 3, y: 1 }], new MootRule()),
        new Room('', 'utility', [{ x: 3, y: 2 }], new MootRule()),
        new Room('', 'downstairs', [{ x: 3, y: -1 }], new MootRule()),
        new Room('', 'food', [{ x: 3, y: -2 }], subject),
        new Room('', 'downstairs', [{ x: 3, y: -3 }], new MootRule()),
        new Room('', 'corridor', [{ x: 3, y: -4 }], new MootRule()),
        new Room('', 'corridor', [{ x: 4, y: 0 }], new MootRule()),
        new Room('', 'sleeping', [{ x: 5, y: 0 }], new MootRule()),
        new Room('', 'outdoor', [{ x: 5, y: 1 }], new MootRule()),
      ];
      repo = new RoomRepositoryService();
      testCase.forEach(v => repo.add(v));

      expect(repo.calculatePoints({ x: 3, y: -2 })).toBe(4);
    });
  });

  describe('any above and below', () => {
    let subject: AllVerticalRule;
    beforeEach(() => {
      subject = new AllVerticalRule(
        1,
        ['below', 'above'],
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

    it('should calculate successfully', () => {
      const testCase = [
        //                                               [0,2]          [3,2]
        new Room( //                               [-1,1][0,1][1,1]     [3,1]     [5,1]
          'n', //                                  [-1,0][0,0  1,0][2,0][3,0][4,0][5,0]
          'throne', //                                      [1,-1][2,-1][3,-1]
          [{ x: 0, y: 0 }, { x: 1, y: 0 }], //              [1,-2][2,-2][3,-2]
          new ThroneRule('some rule') //                          [2,-3][3,-3]
        ), //                                                           [3,-4]
        new Room('', 'corridor', [{ x: -1, y: 0 }], new MootRule()),
        new Room('', 'sleeping', [{ x: -1, y: 1 }], new MootRule()),
        new Room('', 'sleeping', [{ x: 0, y: 1 }], new MootRule()),
        new Room('', 'outdoor', [{ x: 0, y: 2 }], new MootRule()),
        new Room('', 'outdoor special', [{ x: 1, y: 1 }], new MootRule()),
        new Room('', 'food', [{ x: 1, y: -1 }], subject),
        new Room('', 'corridor', [{ x: 1, y: -2 }], new MootRule()),
        new Room('', 'sleeping', [{ x: 2, y: 0 }], new MootRule()),
        new Room('', 'downstairs', [{ x: 2, y: -1 }], new MootRule()),
        new Room('', 'outdoor special', [{ x: 2, y: -2 }], new MootRule()),
        new Room('', 'downstairs', [{ x: 2, y: -3 }], new MootRule()),
        new Room('', 'sleeping', [{ x: 3, y: 0 }], new MootRule()),
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

      expect(repo.calculatePoints({ x: 1, y: -1 })).toBe(3);
    });
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
