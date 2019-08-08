import { RoomToGridTransformer } from './room-to-grid-transformer';
import {
  rooms as testCaseRooms,
  expectedConversion,
  startupRooms,
  expectedStartupConversion,
} from './room-to-grid-transformer.test-case.spec';
import { Room } from '../../../../models/rooms/room.type';
import { MootRule } from '@app/rules/moot-rule';

describe('RoomToGridTransformer', () => {
  describe('transform', () => {
    [
      { case: testCaseRooms, expected: expectedConversion },
      { case: startupRooms, expected: expectedStartupConversion },
    ].forEach(test => {
      let subject: RoomToGridTransformer;
      beforeEach(() => {
        subject = new RoomToGridTransformer(test.case);
      });

      it('should center a lone throne room on a 3 x 4 grid', () => {
        const singleThroneTransfomerSubject = new RoomToGridTransformer([
          new Room(
            'n',
            'throne',
            [{ x: 0, y: 0 }, { x: 1, y: 0 }],
            new MootRule()
          ),
        ]);

        const result = singleThroneTransfomerSubject.getTransformer();
        const converted = result(
          new Room(
            'n',
            'throne',
            [{ x: 0, y: 0 }, { x: 1, y: 0 }],
            new MootRule()
          )
        );

        expect(converted.position.left).toBe(3);
        expect(converted.position.top).toBe(2);
      });

      it('should return a function to do the transformation', () => {
        const result = subject.getTransformer();
        test.case.forEach((room: Room, i: number) => {
          // tslint:disable-next-line: max-line-length
          const scenario = `room [${room.sections
            .map(s => `{x: ${s.x}, y: ${s.y}}`)
            .join(',')}] -> widget [l: ${test.expected[i].position.left}, t: ${
            test.expected[i].position.top
          }]`;

          const { position: converted } = result(room);
          expect(converted.top).toBe(
            test.expected[i].position.top,
            `on top [${subject.top_marker}] wrt ${scenario}`
          );
          expect(converted.left).toBe(
            test.expected[i].position.left,
            `on left [${subject.left_marker}] wrt ${scenario}`
          );
        });
      });
    });
  });
});
