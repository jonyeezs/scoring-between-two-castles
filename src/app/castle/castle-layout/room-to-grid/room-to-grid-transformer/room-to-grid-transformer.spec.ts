import { RoomToGridTransformer } from './room-to-grid-transformer';
import { rooms as testCaseRooms, expectedConversion,
         startupRooms, expectedStartupConversion } from './room-to-grid-transformer.test-case.spec';
import { Room } from '../../../../models/rooms/room.type';

describe('RoomToGridTransformer', () => {

  describe('transform', () => {
    [
      {case: testCaseRooms, expected: expectedConversion},
      {case: startupRooms, expected: expectedStartupConversion}
    ].forEach(test => {
        let subject: RoomToGridTransformer;
        let rooms;
        beforeEach(() => {
          rooms = test.case.map(r => ({location: r}));
          subject = new RoomToGridTransformer(rooms);
        });

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
            const scenario = `room [${room.location.x},${room.location.y}] -> widget [${test.expected[i].left},${test.expected[i].top}]`;

            const converted = result(room);
            expect(converted.top).toBe(test.expected[i].top, `on top [${subject.top_marker}] wrt ${scenario}`);
            expect(converted.left).toBe(test.expected[i].left, `on left [${subject.left_marker}] wrt ${scenario}`);
          });
        });
    });
  });
});
