import { Type } from '@angular/core';

export interface RoomDefinition {
  name: string;
  ruleDescription: string;
  icon: string;
}

export class Room implements RoomDefinition {
  public sections: {
    x: number;
    y: number;
  }[];

  private _realEstate: {
    width: number;
    height: number;
  };

  public get width() { this.calculateRealEstate(this.sections); return this._realEstate.width; }
  public get height() { this.calculateRealEstate(this.sections); return this._realEstate.height; }
  
  public ruleDescription: string;

  public name: string;

  public icon: string;

  /**
   *
   */
  constructor(name: string, icon: string, sections: {x: number; y: number}[], rule: { description: string }) {
    this.name = name;
    this.icon = icon;
    this.ruleDescription = rule.description;
    this.sections = sections;

    this.calculateRealEstate(sections);
  }

  private calculateRealEstate(sections: {x: number, y: number}[]) {
    const sectionsValues = sections.reduce((values, curr) => {
      return {
        xs: values.xs < curr.x ? curr.x : values.xs,
        xl: values.xl >= curr.x ? curr.x : values.xl,
        ys: values.ys < curr.y ? curr.y : values.ys,
        yl: values.yl >= curr.y ? curr.y : values.yl
      };
    }, { xs: 0, xl: 0, ys: 0, yl: 0 });

    this._realEstate.width = sectionsValues.xl - sectionsValues.xs;
    this._realEstate.height = sectionsValues.yl - sectionsValues.ys;
  }
}