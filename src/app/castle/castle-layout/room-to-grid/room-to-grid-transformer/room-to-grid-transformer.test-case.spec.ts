export const rooms: {x: number, y: number}[] = [
  { x: 0, y: 0 },     //
  { x: -1, y: 0 },    //
  { x: -2, y: 0 },   //                           [2,3]
  { x: 1, y: 0 },     //                           [2,2]
  { x: 2, y: 0 },     //                 [0,1]     [2,1]
  { x: 2, y: 1 },     //     [-2,0][-1,0][0,0][1,0][2,0]
  { x: 2, y: 3 },     //    [-2,-1][-1,-1]
  { x: 0, y: 1 },     //    [-2,-2]
  { x: 2, y: 2 },     //
  { x: -2, y: -1 },
  { x: -2, y: -2 },
  { x: -1, y: -1 }
];

export const expectedConversion: {top: number, left: number}[] = [
  { left: 3, top: 4 },     //
  { left: 2, top: 4 },     //   always
  { left: 1, top: 4 },     //    [1,1] <-here        [5,1]
  { left: 4, top: 4 },     //                        [5,2]
  { left: 5, top: 4 },     //              [3,3]     [5,3]
  { left: 5, top: 3 },     //    [1,4][2,4][3,4][4,4][5,4]
  { left: 5, top: 1 },     //    [1,5][2,5]
  { left: 3, top: 3 },     //    [1,6]
  { left: 5, top: 2 },     //
  { left: 1, top: 5 },
  { left: 1, top: 6 },
  { left: 2, top: 5 }
];
