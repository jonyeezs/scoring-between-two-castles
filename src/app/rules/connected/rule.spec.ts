import { ConnectedRule } from './index';
import { RoomRepositoryService } from '@app/core/room-repository.service';
import { Room } from '@app/models/rooms/room.type';
import { ThroneRule } from '../thrones/throne.temp';
import { MootRule } from '../moot-rule';

describe('ConnectedRule', () => {
  let repo: RoomRepositoryService;

  describe('Connecting and non connecting', () => {
    let subject: ConnectedRule;
    beforeEach(() => {
      subject = new ConnectedRule(1, 'corridor');
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
        new Room('', 'food', 'none', [{ x: -1, y: 0 }], new MootRule()),
        new Room('', 'sleeping', 'none', [{ x: -1, y: 1 }], new MootRule()),
        new Room('', 'sleeping', 'none', [{ x: 0, y: 1 }], new MootRule()),
        new Room('', 'outdoor', 'none', [{ x: 0, y: 2 }], new MootRule()),
        // prettier-ignore
        new Room('', 'specialty', 'none', [{ x: 1, y: 1 }], new MootRule()),
        new Room('', 'corridor', 'none', [{ x: 1, y: -1 }], new MootRule()),
        new Room('', 'corridor', 'none', [{ x: 1, y: -2 }], new MootRule()),
        new Room('', 'corridor', 'none', [{ x: 2, y: 0 }], new MootRule()),
        new Room('', 'downstairs', 'none', [{ x: 2, y: -1 }], new MootRule()),
        // prettier-ignore
        new Room('', 'corridor', 'none', [{ x: 2, y: -2 }], new MootRule()),
        new Room('', 'corridor', 'none', [{ x: 2, y: -3 }], new MootRule()),
        new Room('', 'corridor', 'none', [{ x: 3, y: 0 }], new MootRule()),
        new Room('', 'living', 'none', [{ x: 3, y: 1 }], subject),
        new Room('', 'corridor', 'none', [{ x: 3, y: 2 }], new MootRule()),
        new Room('', 'corridor', 'none', [{ x: 3, y: -1 }], new MootRule()),
        new Room('', 'corridor', 'none', [{ x: 3, y: -2 }], new MootRule()),
        new Room('', 'downstairs', 'none', [{ x: 3, y: -3 }], new MootRule()),
        new Room('', 'corridor', 'none', [{ x: 3, y: -4 }], new MootRule()), // shouldn't count this
        new Room('', 'corridor', 'none', [{ x: 4, y: 0 }], new MootRule()),
        new Room('', 'corridor', 'none', [{ x: 5, y: 0 }], new MootRule()),
        new Room('', 'corridor', 'none', [{ x: 5, y: 1 }], new MootRule()),
      ];
      repo = new RoomRepositoryService();
      testCase.forEach(v => repo.add(v));

      expect(repo.calculatePoints({ x: 3, y: 1 })).toBe(12);
    });
  });
});
