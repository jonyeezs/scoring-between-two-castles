import { Room } from '../../../../models/rooms/room.type';
import { Widget } from '../../models/WidgetPosition';

export const rooms: Partial<Room>[] = [
  new Room('n', 'i', [{ x: 0, y: 0 }, { x: 1, y: 0 }], {
    description: '',
  }),
  new Room('n', 'i', [{ x: -1, y: 0 }], { description: '' }), //                         [2,3]
  new Room('n', 'i', [{ x: 2, y: 0 }], { description: '' }), //                          [2,2]
  new Room('n', 'i', [{ x: 2, y: 1 }], { description: '' }), //                 [0,1]    [2,1]
  new Room('n', 'i', [{ x: 2, y: 3 }], { description: '' }), //     [-2,0][-1,0][0,0|1,0][2,0]
  new Room('n', 'i', [{ x: 0, y: 1 }], { description: '' }), //    [-2,-1][-1,-1]
  new Room('n', 'i', [{ x: 2, y: 2 }], { description: '' }), //    [-2,-2]
  new Room('n', 'i', [{ x: -2, y: -1 }], { description: '' }),
  new Room('n', 'i', [{ x: -2, y: -2 }], { description: '' }),
  new Room('n', 'i', [{ x: -1, y: -1 }], { description: '' }),
];

export const expectedConversion: Widget[] = [
  { position: { left: 3, top: 4, width: 2, height: 1 } }, //
  { position: { left: 2, top: 4, width: 1, height: 1 } }, //   always               [5,1]
  { position: { left: 5, top: 4, width: 1, height: 1 } }, //    [1,1] <-here        [5,2]
  { position: { left: 5, top: 3, width: 1, height: 1 } }, //              [3,3]     [5,3]
  { position: { left: 5, top: 1, width: 1, height: 1 } }, //    [1,4][2,4][3,4     ][5,4]
  { position: { left: 3, top: 3, width: 1, height: 1 } }, //    [1,5][2,5]
  { position: { left: 5, top: 2, width: 1, height: 1 } }, //    [1,6]
  { position: { left: 1, top: 5, width: 1, height: 1 } },
  { position: { left: 1, top: 6, width: 1, height: 1 } },
  { position: { left: 2, top: 5, width: 1, height: 1 } },
];

export const startupRooms: Partial<Room>[] = [
  new Room('n', 'i', [{ x: 0, y: 0 }, { x: 1, y: 0 }], {
    description: '',
  }), //                        [0,1]
  new Room('n', 'i', [{ x: 0, y: 1 }], { description: '' }), //                   [-1,0][0,0|1,0][2,0]
  new Room('n', 'i', [{ x: -1, y: 0 }], { description: '' }), //                        [0,-1][1,-1]
  new Room('n', 'i', [{ x: 0, y: -1 }], { description: '' }),
  new Room('n', 'i', [{ x: 1, y: -1 }], { description: '' }),
  new Room('n', 'i', [{ x: 2, y: 0 }], { description: '' }),
];

export const expectedStartupConversion: Widget[] = [
  { position: { left: 2, top: 2, width: 2, height: 1 } }, //         [2,1]
  { position: { left: 2, top: 1, width: 1, height: 1 } }, //    [1,2][2,2     ][4,2]
  { position: { left: 1, top: 2, width: 1, height: 1 } }, //         [2,3][3,3]
  { position: { left: 2, top: 3, width: 1, height: 1 } }, //
  { position: { left: 3, top: 3, width: 1, height: 1 } },
  { position: { left: 4, top: 2, width: 1, height: 1 } },
];
