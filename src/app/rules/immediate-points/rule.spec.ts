import { ImmediatePointsRule } from './index';
import { RoomRepositoryService } from '@app/core/room-repository.service';
import { Room } from '@app/models/rooms/room.type';
import { MootRule } from '../moot-rule';

describe('ImmediatePointsRule', () => {
  let testCase: Room[];
  let repo: RoomRepositoryService;

  beforeEach(() => {
    testCase = [
      new Room(
        'n',
        'throne',
        'none',
        [{ x: 0, y: 0 }, { x: 1, y: 0 }],
        new MootRule()
      ),
      // prettier-ignore
      new Room('some other room', 'corridor', 'painting', [{ x: 1, y: 1 }], new MootRule()),
    ];
    repo = new RoomRepositoryService();
    testCase.forEach(v => repo.add(v));
  });

  it('should calculate correctly', () => {
    repo.add(
      new Room(
        '5 pt room',
        'living',
        'crest',
        [{ x: -1, y: 0 }],
        new ImmediatePointsRule(5)
      )
    );
    expect(repo.calculatePoints({ x: -1, y: 0 })).toBe(5);
  });
});
