import { Rule } from '@app/rules/rules.abstract';

export type RoomType =
  | 'outdoor special'
  | 'throne'
  | 'downstairs'
  | 'living'
  | 'sleeping'
  | 'food'
  | 'corridor'
  | 'outdoor'
  | 'utility'
  | 'none';

export type RoomHanging = 'painting' | 'mirror' | 'torch' | 'swords' | 'none';

export interface RoomDefinition {
  name: string;
  type: RoomType;
  hanging: RoomHanging;
  rule: Rule;
}

export class Room implements RoomDefinition {
  private _sections: {
    x: number;
    y: number;
  }[];

  get sections() {
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

  set sections(value) {
    this._sections = value;
    this.calculateRealEstate(this._sections);
  }

  private _realEstate: {
    width: number;
    height: number;
  };

  get width() {
    return this._realEstate.width;
  }
  get height() {
    return this._realEstate.height;
  }

  hanging: RoomHanging;

  icon: string;

  /**
   *
   */
  constructor(
    public name: string,
    public type: RoomType,
    sections: { x: number; y: number }[],
    public rule: Rule
  ) {
    this.icon = this.setIcon(type);
    this.sections = sections;

    this.calculateRealEstate(sections);
  }

  private setIcon(type: RoomType) {
    switch (type) {
      case 'outdoor special':
        return '⭐';
      case 'throne':
        return '👑';
      case 'downstairs':
        return '↘️';
      case 'living':
        return '🔥';
      case 'sleeping':
        return '💤';
      case 'food':
        return '🍷';
      case 'outdoor':
        return '🌳';
      case 'corridor':
        return '➖';
      case 'utility':
        return '🔨';
      case 'none':
        return '';
      default:
        throw new Error(`Unsupported room type ${type} to generate icon`);
    }
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
