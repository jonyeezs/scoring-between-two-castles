import { RoomToGridTransformer } from './room-to-grid-transformer';
import { rooms as testCaseRooms, expectedConversion } from './room-to-grid-transformer.test-case.spec';
import { Room } from '../../../../models/rooms/room.type';

describe('RoomToGridTransformer', () => {
  let subject: RoomToGridTransformer;
  let rooms;
  beforeEach(() => {
    rooms = testCaseRooms.map(r => ({location: r}));
    subject = new RoomToGridTransformer(rooms);
  });

  describe('transform', () => {
    it('should center a lone throne room on a 3 x 4 grid', () => {
      const singleThroneTransfomerSubject = new RoomToGridTransformer(
        [{location: { x: 0, y: 0 }}]);

      const result = singleThroneTransfomerSubject.getTransformer();
      const converted = result({realEstate: { height: 1, width: 2 }, location: { x: 0, y: 0 } });

      expect(converted.left).toBe(3);
      expect(converted.top).toBe(2);
    });

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
