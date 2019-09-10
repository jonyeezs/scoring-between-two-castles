# Contributing

## Getting started

1. `npm ci`
2. `npm i -g commitzen`
3. [Fork the repo](https://help.github.com/en/articles/fork-a-repo)
4. Create a branch, with the naming convention
   * `feat/some-description` for new features, refactors, and stylistic changes.
   * `bug/some-description` for bug fixes and resolving issues.
5. Commit with `git cz`, with either type
   * `feat` for new features and UX improvements.
   * `fix` for bug fixes
   * `style` for visual changes that don't impact UX. eg: heading size.
   * _Any other commit types will not be added into the change log._
6. Create PR.
7. When merge, merge all commits. So please do keep your commit messages user friendly.

## Deploying

Once a PR is merged, its time to release it to everyone (yay)!
Commits marked as feat, fix or style will be added to the [CHANGELOG](./CHANGELOG.md). The file will eventually get into the hands of our users.123

1. PR merge done!
2. `git checkout master`
3. `git pull`
4. `npm run release`
5. `git push --follow-tags`
6. Watch the CI does its thing 🚀.