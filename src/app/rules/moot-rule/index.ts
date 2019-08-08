import { Rule } from '../rules.abstract';

export class MootRule extends Rule {
  constructor() {
    // https://www.reddit.com/r/whoselineisitanyway/comments/24zh7o/i_really_miss_drews_thats_right_the_points_are/
    super(`where the points don't matter`);
  }
  protected runRule(): number {
    return 0;
  }
}
