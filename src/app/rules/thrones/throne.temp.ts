import { Rule } from '../rules.abstract';

export class ThroneRule extends Rule {
  constructor(desc) {
    super(desc);
  }
  protected runRule<T>(): number {
    throw new Error('Method not implemented.');
  }
}
