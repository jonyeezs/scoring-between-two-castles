import { ImmediatePointsRule } from './index';
import { RoomRepositoryService } from '@app/core/room-repository.service';
import { Room } from '@app/models/rooms/room.type';
import { ThroneRule } from '../thrones/throne.temp';
import { MootRule } from '../moot-rule';

describe('ImmediatePointsRule', () => {
  let testCase: Room[];
  let repo: RoomRepositoryService;

  beforeEach(() => {
    testCase = [
      new Room(
        'n',
        'throne',
        [{ x: 0, y: 0 }, { x: 1, y: 0 }],
        new ThroneRule('some rule')
      ),
      new Room('some other room', 'corridor', [{ x: 1, y: 1 }], new MootRule()),
    ];
    repo = new RoomRepositoryService();
    testCase.forEach(v => repo.add(v));
  });

  it('should calculate correctly', () => {
    repo.add(
      new Room(
        '5 pt room',
        'living',
        [{ x: -1, y: 0 }],
        new ImmediatePointsRule(5)
      )
    );
    expect(repo.calculatePoints({ x: -1, y: 0 })).toBe(5);
  });
});
