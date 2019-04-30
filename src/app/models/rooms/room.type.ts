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

  public ruleDescription: string;

  public name: string;

  public icon: string;

  /**
   *
   */
  constructor(name: string, icon: string, rule: { description: string },  width: number, location: {x: number; y: number}) {
    this.name = name;
    this.icon = icon;
    this.ruleDescription = rule.description;
    this.realEstate = { width, height: 1 };
    this.location = location;
  }
}