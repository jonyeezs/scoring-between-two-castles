import { ConsecutiveRule } from './index';
import { RoomRepositoryService } from '@app/core/room-repository.service';
import { Room } from '@app/models/rooms/room.type';
import { MootRule } from '../moot-rule';

describe('ConsecutiveRule', () => {
  let repo: RoomRepositoryService;

  describe('calculate base on given points', () => {
    let subject: ConsecutiveRule;
    beforeEach(() => {
      subject = new ConsecutiveRule(2, 'below', 2, 'type', 'food');
    });

    it('should calculate by given points', () => {
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
        new Room('', 'downstairs', 'mirror', [{ x: 2, y: -1 }], new MootRule()),
        // prettier-ignore
        new Room('', 'specialty', 'none', [{ x: 2, y: -2 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 2, y: -3 }], new MootRule()),
        new Room('', 'food', 'mirror', [{ x: 3, y: 0 }], new MootRule()),
        new Room('', 'food', 'mirror', [{ x: 3, y: 1 }], new MootRule()),
        new Room('', 'utility', 'mirror', [{ x: 3, y: 2 }], subject),
        new Room('', 'food', 'mirror', [{ x: 3, y: -1 }], new MootRule()),
        new Room('', 'food', 'mirror', [{ x: 3, y: -2 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 3, y: -3 }], new MootRule()),
        new Room('', 'corridor', 'mirror', [{ x: 3, y: -4 }], new MootRule()),
        new Room('', 'corridor', 'mirror', [{ x: 4, y: 0 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 5, y: 0 }], new MootRule()),
        new Room('', 'outdoor', 'mirror', [{ x: 5, y: 1 }], new MootRule()),
      ];
      repo = new RoomRepositoryService();
      testCase.forEach(v => repo.add(v));

      expect(repo.calculatePoints({ x: 3, y: 2 })).toBe(4);
    });
  });

  describe('2 below', () => {
    let subject: ConsecutiveRule;
    beforeEach(() => {
      subject = new ConsecutiveRule(1, 'below', 2, 'type', 'food');
    });

    it('should calculate to its max', () => {
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
        new Room('', 'downstairs', 'mirror', [{ x: 2, y: -1 }], new MootRule()),
        // prettier-ignore
        new Room('', 'specialty', 'none', [{ x: 2, y: -2 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 2, y: -3 }], new MootRule()),
        new Room('', 'food', 'mirror', [{ x: 3, y: 0 }], new MootRule()),
        new Room('', 'food', 'mirror', [{ x: 3, y: 1 }], new MootRule()),
        new Room('', 'utility', 'mirror', [{ x: 3, y: 2 }], subject),
        new Room('', 'food', 'mirror', [{ x: 3, y: -1 }], new MootRule()),
        new Room('', 'food', 'mirror', [{ x: 3, y: -2 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 3, y: -3 }], new MootRule()),
        new Room('', 'corridor', 'mirror', [{ x: 3, y: -4 }], new MootRule()),
        new Room('', 'corridor', 'mirror', [{ x: 4, y: 0 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 5, y: 0 }], new MootRule()),
        new Room('', 'outdoor', 'mirror', [{ x: 5, y: 1 }], new MootRule()),
      ];
      repo = new RoomRepositoryService();
      testCase.forEach(v => repo.add(v));

      expect(repo.calculatePoints({ x: 3, y: 2 })).toBe(2);
    });

    it('should calculate only availabe rooms', () => {
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
        new Room('', 'downstairs', 'mirror', [{ x: 2, y: -1 }], new MootRule()),
        // prettier-ignore
        new Room('', 'specialty', 'none', [{ x: 2, y: -2 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 2, y: -3 }], new MootRule()),
        new Room('', 'utility', 'mirror', [{ x: 3, y: 0 }], new MootRule()),
        new Room('', 'food', 'mirror', [{ x: 3, y: 1 }], new MootRule()),
        new Room('', 'utility', 'mirror', [{ x: 3, y: 2 }], subject),
        new Room('', 'food', 'mirror', [{ x: 3, y: -1 }], new MootRule()),
        new Room('', 'food', 'mirror', [{ x: 3, y: -2 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 3, y: -3 }], new MootRule()),
        new Room('', 'corridor', 'mirror', [{ x: 3, y: -4 }], new MootRule()),
        new Room('', 'corridor', 'mirror', [{ x: 4, y: 0 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 5, y: 0 }], new MootRule()),
        new Room('', 'outdoor', 'mirror', [{ x: 5, y: 1 }], new MootRule()),
      ];
      repo = new RoomRepositoryService();
      testCase.forEach(v => repo.add(v));

      expect(repo.calculatePoints({ x: 3, y: 2 })).toBe(1);
    });

    it('should calculate when rooms are skipped', () => {
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
        new Room('', 'downstairs', 'mirror', [{ x: 2, y: -1 }], new MootRule()),
        // prettier-ignore
        new Room('', 'specialty', 'none', [{ x: 2, y: -2 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 2, y: -3 }], new MootRule()),
        new Room('', 'food', 'mirror', [{ x: 3, y: 0 }], new MootRule()),
        new Room('', 'living', 'mirror', [{ x: 3, y: 1 }], new MootRule()),
        new Room('', 'utility', 'mirror', [{ x: 3, y: 2 }], subject),
        new Room('', 'food', 'mirror', [{ x: 3, y: -1 }], new MootRule()),
        new Room('', 'food', 'mirror', [{ x: 3, y: -2 }], new MootRule()),
        new Room('', 'downstairs', 'mirror', [{ x: 3, y: -3 }], new MootRule()),
        new Room('', 'corridor', 'mirror', [{ x: 3, y: -4 }], new MootRule()),
        new Room('', 'corridor', 'mirror', [{ x: 4, y: 0 }], new MootRule()),
        new Room('', 'sleeping', 'mirror', [{ x: 5, y: 0 }], new MootRule()),
        new Room('', 'outdoor', 'mirror', [{ x: 5, y: 1 }], new MootRule()),
      ];
      repo = new RoomRepositoryService();
      testCase.forEach(v => repo.add(v));

      expect(repo.calculatePoints({ x: 3, y: 2 })).toBe(1);
    });
  });

  it('should calculate when no available rooms', () => {
    let subject = new ConsecutiveRule(1, 'below', 2, 'type', 'food');
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
      new Room('', 'downstairs', 'mirror', [{ x: 2, y: -1 }], new MootRule()),
      // prettier-ignore
      new Room('', 'specialty', 'none', [{ x: 2, y: -2 }], new MootRule()),
      new Room('', 'downstairs', 'mirror', [{ x: 2, y: -3 }], new MootRule()),
      new Room('', 'utility', 'mirror', [{ x: 3, y: 0 }], new MootRule()),
      new Room('', 'living', 'mirror', [{ x: 3, y: 1 }], subject),
      new Room('', 'food', 'mirror', [{ x: 3, y: 2 }], new MootRule()),
      new Room('', 'corridor', 'mirror', [{ x: 3, y: -1 }], new MootRule()),
      new Room('', 'downstairs', 'mirror', [{ x: 3, y: -2 }], new MootRule()),
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
