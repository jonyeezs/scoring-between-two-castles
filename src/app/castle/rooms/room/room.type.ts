import { Type } from '@angular/core';

export class Room {
  public location: {
    x: number;
    y: number;
  };

  public realEstate: {
    width: number;
    height: number;
  };

  public component: Type<any>;

  /**
   *
   */
  constructor(width: number, location: {x: number; y: number}, component: Type<any>) {
    this.realEstate = { width, height: 1 };
    this.location = location;
    this.component = component;
  }
}