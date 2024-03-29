import { AdjacentRule } from './index';
import { RoomRepositoryService } from '@app/core/room-repo/room-repository.service';
import { Room } from '@app/models/rooms/room.type';
import { MootRule } from '../moot-rule';
import { AllDirections, AllRoomTypes } from '@app/helpers/room-combinations';
import { exclude } from '@app/helpers/exclude-list';
import { Direction } from '@app/models/grid-linked-list/grid-node-traverser';

describe('AdjacentRule', () => {
  let repo: RoomRepositoryService;

  describe('room type any around', () => {
    let subject: AdjacentRule;
    beforeEach(() => {
      subject = new AdjacentRule(1, AllDirections, 'type', AllRoomTypes);
    });

    it('should calculate for all directions', () => {
      const testCase = [
        //                                               [0,2]          [3,2]
        new Room( //                               [-1,1][0,1][1,1]     [3,1]     [5,1]
          'n', //                                  [-1,0][0,0  1,0][2,0][3,0][4,0][5,0]
          'throne', //                                      [1,-1][2,-1][3,-1]
          'none', //                                        [1,-2][2,-2][3,-2]
          [{ x: 0, y: 0 }, { x: 1, y: 0 }], //                    [2,-3][3,-3]
          new MootRule() //                                                           [3,-4]
        ),
        new Room('', 'corridor', 'mirror', [{ x: -1, y: 0 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: -1, y: 1 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 0, y: 1 }], new MootRule()),
        new Room('', 'outdoor', 'mirror', [{ x: 0, y: 2 }], new MootRule()),
        // prettier-ignore
        new Room('', 'specialty', 'none', [{ x: 1, y: 1 }], new MootRule()),
        new Room('', 'food', 'mirror', [{ x: 1, y: -1 }], new MootRule()),
        new Room('', 'corridor', 'mirror', [{ x: 1, y: -2 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 2, y: 0 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 2, y: -1 }], subject),
        // prettier-ignore
        new Room('', 'specialty', 'none', [{ x: 2, y: -2 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 2, y: -3 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 3, y: 0 }], new MootRule()),
        new Room('', 'living', 'mirror', [{ x: 3, y: 1 }], new MootRule()),
        new Room('', 'utility', 'mirror', [{ x: 3, y: 2 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 3, y: -1 }], new MootRule()),
        new Room('', 'food', 'mirror', [{ x: 3, y: -2 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 3, y: -3 }], new MootRule()),
        new Room('', 'corridor', 'mirror', [{ x: 3, y: -4 }], new MootRule()),
        new Room('', 'corridor', 'mirror', [{ x: 4, y: 0 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 5, y: 0 }], new MootRule()),
        new Room('', 'outdoor', 'mirror', [{ x: 5, y: 1 }], new MootRule()),
      ];
      repo = new RoomRepositoryService();
      testCase.forEach(v => repo.add(v));

      expect(repo.calculatePoints({ x: 2, y: -1 })).toBe(8);
    });

    it('should calculate for all available', () => {
      const testCase = [
        //                                               [0,2]          [3,2]
        new Room( //                               [-1,1][0,1][1,1]     [3,1]     [5,1]
          'n', //                                  [-1,0][0,0  1,0][2,0][3,0][4,0][5,0]
          'throne', //                                      [1,-1][2,-1][3,-1]
          'none', //                                       [1,-2][2,-2][3,-2]
          [{ x: 0, y: 0 }, { x: 1, y: 0 }], //                   [2,-3][3,-3]
          new MootRule() //                               [3,-4]
        ),
        new Room('', 'corridor', 'mirror', [{ x: -1, y: 0 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: -1, y: 1 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 0, y: 1 }], new MootRule()),
        new Room('', 'outdoor', 'mirror', [{ x: 0, y: 2 }], new MootRule()),
        // prettier-ignore
        new Room('', 'specialty', 'none', [{ x: 1, y: 1 }], new MootRule()),
        new Room('', 'food', 'mirror', [{ x: 1, y: -1 }], new MootRule()),
        new Room('', 'corridor', 'mirror', [{ x: 1, y: -2 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 2, y: 0 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 2, y: -1 }], new MootRule()),
        // prettier-ignore
        new Room('', 'specialty', 'none', [{ x: 2, y: -2 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 2, y: -3 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 3, y: 0 }], new MootRule()),
        new Room('', 'living', 'mirror', [{ x: 3, y: 1 }], subject),
        new Room('', 'utility', 'mirror', [{ x: 3, y: 2 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 3, y: -1 }], new MootRule()),
        new Room('', 'food', 'mirror', [{ x: 3, y: -2 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 3, y: -3 }], new MootRule()),
        new Room('', 'corridor', 'mirror', [{ x: 3, y: -4 }], new MootRule()),
        new Room('', 'corridor', 'mirror', [{ x: 4, y: 0 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 5, y: 0 }], new MootRule()),
        new Room('', 'outdoor', 'mirror', [{ x: 5, y: 1 }], new MootRule()),
      ];
      repo = new RoomRepositoryService();
      testCase.forEach(v => repo.add(v));

      expect(repo.calculatePoints({ x: 3, y: 1 })).toBe(4);
    });
  });

  describe('room type any around except certain directions', () => {
    let subject: AdjacentRule;
    beforeEach(() => {
      subject = new AdjacentRule(
        1,
        exclude<Direction>(AllDirections, [
          'below',
          'lower-left',
          'lower-right',
        ]),
        'type',
        AllRoomTypes
      );
    });

    it('should calculate forementioned', () => {
      const testCase = [
        //                                               [0,2]
        new Room( //                               [-1,1][0,1][1,1]
          'n', //                                  [-1,0][0,0  1,0][2,0]
          'throne', //                                      [1,-1][2,-1][3,-1]
          'none', //                                        [1,-2][2,-2][3,-2]
          [{ x: 0, y: 0 }, { x: 1, y: 0 }], //                    [2,-3][3,-3]
          new MootRule() //                                [3,-4]
        ),
        new Room('', 'corridor', 'mirror', [{ x: -1, y: 0 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: -1, y: 1 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 0, y: 1 }], new MootRule()),
        new Room('', 'outdoor', 'mirror', [{ x: 0, y: 2 }], new MootRule()),
        // prettier-ignore
        new Room('', 'specialty', 'mirror', [{ x: 1, y: 1 }], new MootRule()),
        new Room('', 'food', 'mirror', [{ x: 1, y: -1 }], new MootRule()),
        new Room('', 'corridor', 'mirror', [{ x: 1, y: -2 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 2, y: 0 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 2, y: -1 }], subject),
        // prettier-ignore
        new Room('', 'specialty', 'mirror', [{ x: 2, y: -2 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 2, y: -3 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 3, y: -1 }], new MootRule()),
        new Room('', 'food', 'mirror', [{ x: 3, y: -2 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 3, y: -3 }], new MootRule()),
        new Room('', 'corridor', 'mirror', [{ x: 3, y: -4 }], new MootRule()),
      ];
      repo = new RoomRepositoryService();
      testCase.forEach(v => repo.add(v));

      expect(repo.calculatePoints({ x: 2, y: -1 })).toBe(4);
    });
  });

  describe('room type any at certain directions', () => {
    let subject: AdjacentRule;
    beforeEach(() => {
      subject = new AdjacentRule(
        1,
        ['below', 'lower-left', 'lower-right'],
        'type',
        AllRoomTypes
      );
    });

    it('should calculate forementioned', () => {
      const testCase = [
        //                                               [0,2]
        new Room( //                               [-1,1][0,1][1,1]
          'n', //                                  [-1,0][0,0  1,0][2,0]
          'throne', //                                      [1,-1][2,-1][3,-1]
          'none', //                                        [1,-2][2,-2][3,-2]
          [{ x: 0, y: 0 }, { x: 1, y: 0 }], //                    [2,-3][3,-3]
          new MootRule() //                                [3,-4]
        ),
        new Room('', 'corridor', 'mirror', [{ x: -1, y: 0 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: -1, y: 1 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 0, y: 1 }], new MootRule()),
        new Room('', 'outdoor', 'mirror', [{ x: 0, y: 2 }], new MootRule()),
        // prettier-ignore
        new Room('', 'specialty', 'mirror', [{ x: 1, y: 1 }], new MootRule()),
        new Room('', 'food', 'mirror', [{ x: 1, y: -1 }], subject),
        new Room('', 'corridor', 'mirror', [{ x: 1, y: -2 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 2, y: 0 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 2, y: -1 }], new MootRule()),
        // prettier-ignore
        new Room('', 'specialty', 'mirror', [{ x: 2, y: -2 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 2, y: -3 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 3, y: -1 }], new MootRule()),
        new Room('', 'food', 'mirror', [{ x: 3, y: -2 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 3, y: -3 }], new MootRule()),
        new Room('', 'corridor', 'mirror', [{ x: 3, y: -4 }], new MootRule()),
      ];
      repo = new RoomRepositoryService();
      testCase.forEach(v => repo.add(v));

      expect(repo.calculatePoints({ x: 1, y: -1 })).toBe(2);
    });
  });

  describe('certain room type', () => {
    let subject: AdjacentRule;
    beforeEach(() => {
      subject = new AdjacentRule(1, AllDirections, 'type', ['sleeping']);
    });

    it('should calculate for all directions', () => {
      const testCase = [
        //                                               [0,2]          [3,2]
        new Room( //                               [-1,1][0,1][1,1]     [3,1]     [5,1]
          'n', //                                  [-1,0][0,0  1,0][2,0][3,0][4,0][5,0]
          'throne', //                                      [1,-1][2,-1][3,-1]
          'none', //                                       [1,-2][2,-2][3,-2]
          [{ x: 0, y: 0 }, { x: 1, y: 0 }], //                   [2,-3][3,-3]
          new MootRule() //                               [3,-4]
        ),
        new Room('', 'corridor', 'mirror', [{ x: -1, y: 0 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: -1, y: 1 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 0, y: 1 }], new MootRule()),
        new Room('', 'outdoor', 'mirror', [{ x: 0, y: 2 }], new MootRule()),
        // prettier-ignore
        new Room('', 'specialty', 'none', [{ x: 1, y: 1 }], new MootRule()),
        new Room('', 'food', 'mirror', [{ x: 1, y: -1 }], new MootRule()),
        new Room('', 'corridor', 'mirror', [{ x: 1, y: -2 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 2, y: 0 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 2, y: -1 }], subject),
        // prettier-ignore
        new Room('', 'specialty', 'none', [{ x: 2, y: -2 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 2, y: -3 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 3, y: 0 }], new MootRule()),
        new Room('', 'living', 'mirror', [{ x: 3, y: 1 }], new MootRule()),
        new Room('', 'utility', 'mirror', [{ x: 3, y: 2 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 3, y: -1 }], new MootRule()),
        new Room('', 'food', 'mirror', [{ x: 3, y: -2 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 3, y: -3 }], new MootRule()),
        new Room('', 'corridor', 'mirror', [{ x: 3, y: -4 }], new MootRule()),
        new Room('', 'corridor', 'mirror', [{ x: 4, y: 0 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 5, y: 0 }], new MootRule()),
        new Room('', 'outdoor', 'mirror', [{ x: 5, y: 1 }], new MootRule()),
      ];
      repo = new RoomRepositoryService();
      testCase.forEach(v => repo.add(v));

      expect(repo.calculatePoints({ x: 2, y: -1 })).toBe(2);
    });

    it('should not calculate if none available', () => {
      const testCase = [
        //                                               [0,2]          [3,2]
        new Room( //                               [-1,1][0,1][1,1]     [3,1]     [5,1]
          'n', //                                  [-1,0][0,0  1,0][2,0][3,0][4,0][5,0]
          'throne', //                                      [1,-1][2,-1][3,-1]
          'none', //                                       [1,-2][2,-2][3,-2]
          [{ x: 0, y: 0 }, { x: 1, y: 0 }], //                   [2,-3][3,-3]
          new MootRule() //                               [3,-4]
        ),
        new Room('', 'corridor', 'mirror', [{ x: -1, y: 0 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: -1, y: 1 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 0, y: 1 }], new MootRule()),
        new Room('', 'outdoor', 'mirror', [{ x: 0, y: 2 }], new MootRule()),
        // prettier-ignore
        new Room('', 'specialty', 'none', [{ x: 1, y: 1 }], new MootRule()),
        new Room('', 'food', 'mirror', [{ x: 1, y: -1 }], new MootRule()),
        new Room('', 'corridor', 'mirror', [{ x: 1, y: -2 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 2, y: 0 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 2, y: -1 }], new MootRule()),
        // prettier-ignore
        new Room('', 'specialty', 'none', [{ x: 2, y: -2 }], subject),
        new Room('', 'downstairs', 'mirror', [{ x: 2, y: -3 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 3, y: 0 }], new MootRule()),
        new Room('', 'living', 'mirror', [{ x: 3, y: 1 }], new MootRule()),
        new Room('', 'utility', 'mirror', [{ x: 3, y: 2 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 3, y: -1 }], new MootRule()),
        new Room('', 'food', 'mirror', [{ x: 3, y: -2 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 3, y: -3 }], new MootRule()),
        new Room('', 'corridor', 'mirror', [{ x: 3, y: -4 }], new MootRule()),
        new Room('', 'corridor', 'mirror', [{ x: 4, y: 0 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 5, y: 0 }], new MootRule()),
        new Room('', 'outdoor', 'mirror', [{ x: 5, y: 1 }], new MootRule()),
      ];
      repo = new RoomRepositoryService();
      testCase.forEach(v => repo.add(v));

      expect(repo.calculatePoints({ x: 3, y: 1 })).toBe(0);
    });
  });

  describe('when the original room is the same type as well', () => {
    let subject: AdjacentRule;
    it('should not calculate itself', () => {
      subject = new AdjacentRule(1, AllDirections, 'hanging', ['painting']);
      const testCase = [
        //                                               [0,2]
        new Room( //                               [-1,1][0,1][1,1]
          'n', //                                  [-1,0][0,0  1,0][2,0]
          'throne', //                                      [1,-1][2,-1][3,-1]
          'none', //                                        [1,-2][2,-2][3,-2]
          [{ x: 0, y: 0 }, { x: 1, y: 0 }], //                    [2,-3][3,-3]
          new MootRule() //                                [3,-4]
        ),
        new Room('', 'corridor', 'crest', [{ x: -1, y: 0 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: -1, y: 1 }], subject),
        new Room('', 'sleeping', 'mirror', [{ x: 0, y: 1 }], new MootRule()),
        new Room('', 'outdoor', 'none', [{ x: 0, y: 2 }], new MootRule()),
        // prettier-ignore
        new Room('', 'specialty', 'mirror', [{ x: 1, y: 1 }], new MootRule()),
        new Room('', 'food', 'painting', [{ x: 1, y: -1 }], new MootRule()),
        new Room('', 'corridor', 'painting', [{ x: 1, y: -2 }], new MootRule()),
        new Room('', 'sleeping', 'painting', [{ x: 2, y: 0 }], new MootRule()),
        new Room('', 'downstairs', 'painting', [{ x: 2, y: -1 }], subject),
        // prettier-ignore
        new Room('', 'specialty', 'none', [{ x: 2, y: -2 }], new MootRule()),
        // prettier-ignore
        new Room('', 'downstairs', 'crest', [{ x: 2, y: -3 }], new MootRule()
        ),
        // prettier-ignore
        new Room('', 'downstairs', 'crest', [{ x: 3, y: -1 }], new MootRule()
        ),
        new Room('', 'food', 'torch', [{ x: 3, y: -2 }], new MootRule()),
        // prettier-ignore
        new Room('', 'downstairs', 'crest', [{ x: 3, y: -3 }], new MootRule()
        ),
        new Room('', 'corridor', 'mirror', [{ x: 3, y: -4 }], new MootRule()),
      ];
      repo = new RoomRepositoryService();
      testCase.forEach(v => repo.add(v));

      expect(repo.calculatePoints({ x: 2, y: -1 })).toBe(3);
    });
  });

  describe('hanging type', () => {
    let subject: AdjacentRule;
    beforeEach(() => {
      subject = new AdjacentRule(1, AllDirections, 'hanging', ['painting']);
      const testCase = [
        //                                               [0,2]
        new Room( //                               [-1,1][0,1][1,1]
          'n', //                                  [-1,0][0,0  1,0][2,0]
          'throne', //                                      [1,-1][2,-1][3,-1]
          'none', //                                        [1,-2][2,-2][3,-2]
          [{ x: 0, y: 0 }, { x: 1, y: 0 }], //                    [2,-3][3,-3]
          new MootRule() //                                [3,-4]
        ),
        new Room('', 'corridor', 'crest', [{ x: -1, y: 0 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: -1, y: 1 }], subject),
        new Room('', 'sleeping', 'mirror', [{ x: 0, y: 1 }], new MootRule()),
        new Room('', 'outdoor', 'none', [{ x: 0, y: 2 }], new MootRule()),
        // prettier-ignore
        new Room('', 'specialty', 'mirror', [{ x: 1, y: 1 }], new MootRule()),
        new Room('', 'food', 'painting', [{ x: 1, y: -1 }], new MootRule()),
        new Room('', 'corridor', 'painting', [{ x: 1, y: -2 }], new MootRule()),
        new Room('', 'sleeping', 'painting', [{ x: 2, y: 0 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 2, y: -1 }], subject),
        // prettier-ignore
        new Room('', 'specialty', 'painting', [{ x: 2, y: -2 }], new MootRule()),
        new Room(
          '',
          'downstairs',
          'painting',
          [{ x: 2, y: -3 }],
          new MootRule()
        ),
        new Room(
          '',
          'downstairs',
          'painting',
          [{ x: 3, y: -1 }],
          new MootRule()
        ),
        new Room('', 'food', 'painting', [{ x: 3, y: -2 }], new MootRule()),
        new Room(
          '',
          'downstairs',
          'painting',
          [{ x: 3, y: -3 }],
          new MootRule()
        ),
        new Room('', 'corridor', 'mirror', [{ x: 3, y: -4 }], new MootRule()),
      ];
      repo = new RoomRepositoryService();
      testCase.forEach(v => repo.add(v));
    });

    it('should calculate only selected', () => {
      expect(repo.calculatePoints({ x: 2, y: -1 })).toBe(6);
    });

    it('should calculate when none found', () => {
      expect(repo.calculatePoints({ x: -1, y: 1 })).toBe(0);
    });
  });
});
