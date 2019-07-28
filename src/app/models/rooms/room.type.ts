export type RoomType =
  | 'throne outdoor'
  | 'downstairs'
  | 'living'
  | 'sleeping'
  | 'food'
  | 'outdoor'
  | 'utility';

export type RoomHanging = 'painting' | 'mirror' | 'torch' | 'swords' | 'none';

export interface RoomDefinition {
  name: string;
  type: RoomType;
  hanging: RoomHanging;
  rule: string;
  icon: string;
}

export class Room implements RoomDefinition {
  private _sections: {
    x: number;
    y: number;
  }[];

  public get sections() {
    const room = this;
    const arrayChangeHandler = {
      set: function(target, property, value) {
        target[property] = value;
        room.calculateRealEstate(target);
        return true;
      },
    };
    return new Proxy(this._sections, arrayChangeHandler);
  }

  public set sections(value) {
    this._sections = value;
    this.calculateRealEstate(this._sections);
  }

  private _realEstate: {
    width: number;
    height: number;
  };

  public get width() {
    return this._realEstate.width;
  }
  public get height() {
    return this._realEstate.height;
  }

  public type: RoomType;

  public hanging: RoomHanging;

  public rule: string;

  public name: string;

  public icon: string;

  /**
   *
   */
  constructor(
    name: string,
    icon: string,
    sections: { x: number; y: number }[],
    rule: string
  ) {
    this.name = name;
    this.icon = icon;
    this.rule = rule;
    this.sections = sections;

    this.calculateRealEstate(sections);
  }

  private calculateRealEstate(sections: { x: number; y: number }[]) {
    const axises = sections.reduce(
      (axis, curr) => {
        axis.x.add(curr.x);
        axis.y.add(curr.y);
        return axis;
      },
      { x: new Set(), y: new Set() }
    );

    this._realEstate = { width: axises.x.size, height: axises.y.size };
  }
}
