import { Rule } from '../rules.abstract';

export class ImmediatePointsRule extends Rule {
  constructor(public points: number) {
    super(`immediate ${points} pts`);
  }
  protected runRule(): number {
    return this.points;
  }
}
