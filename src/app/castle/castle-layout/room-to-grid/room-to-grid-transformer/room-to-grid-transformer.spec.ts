import { RoomToGridTransformer } from './room-to-grid-transformer';
import { rooms as testCaseRooms, expectedConversion } from './room-to-grid-transformer.test-case.spec';
import { Room } from '../../../rooms/room/room.type';

describe('RoomToGridTransformer', () => {
  let subject: RoomToGridTransformer;
  let rooms;
  beforeEach(() => {
    rooms = testCaseRooms.map(r => ({location: r}));
    subject = new RoomToGridTransformer(rooms);
  });

  describe('transform', () => {
    it('should return a function to do the transformation', () => {
      const result = subject.getTransformer();
      rooms.forEach((room: Partial<Room>, i: number) => {
        // tslint:disable-next-line: max-line-length
        const scenario = `room [${room.location.x},${room.location.y}] -> widget [${expectedConversion[i].left},${expectedConversion[i].top}]`;

        const converted = result(room);
        expect(converted.top).toBe(expectedConversion[i].top, `on top [${subject.top_marker}] wrt ${scenario}`);
        expect(converted.left).toBe(expectedConversion[i].left, `on left [${subject.left_marker}] wrt ${scenario}`);
      });
    });
  });
});
