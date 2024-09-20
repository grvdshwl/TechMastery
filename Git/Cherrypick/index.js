// How to find the commit hash:
// ----------------------------
// You can use `git log` to find the commit hash of the specific commit you want to cherry-pick:
// git log --oneline
// This will show a list of commits with their short hash and commit messages.
// Example output:
// e8a1f23 Add feature X
// 45b2a9d Fix bug Y

// What is git cherry-pick?
// ------------------------
// `git cherry-pick` allows you to take a specific commit from one branch and apply it to your current branch.
// It's useful when you need certain changes from another branch, but don't want to merge the entire branch.

// How to Use git cherry-pick:
// ---------------------------
// 1. Find the commit hash using `git log --oneline`.
// Example: e8a1f23

// 2. Run git cherry-pick with the commit hash to apply that commit to your current branch:
// git cherry-pick e8a1f23

// 3. Resolve any conflicts if they arise:
// - If there are conflicts, Git will stop and ask you to fix them manually.
// - After resolving the conflicts, run the following to continue:
//   git add <conflicted-file>
//   git cherry-pick --continue

// 4. Once finished, the changes from the picked commit will be applied to your current branch,
//    and a new commit will be created with those changes.

// Example Scenario:
// -----------------
// Let's say you're working on `feature-branch` and notice a useful change in `main` that you need in your branch.
// Instead of merging the entire `main` branch, you cherry-pick a specific commit:
// git cherry-pick e8a1f23

// When to use git cherry-pick?
// ----------------------------
// 1. When you want to apply a specific change from another branch without merging all its changes.
// 2. For applying bug fixes or small feature commits from another branch.
// 3. When merging is unnecessary, and you just need one or a few commits from another branch.

// When NOT to use git cherry-pick?
// --------------------------------
// 1. Avoid cherry-picking when the commit is part of a larger feature with many dependencies.
//    Cherry-picking just one commit from a series may break things.
// 2. If a commit depends on other commits to work properly, cherry-picking may cause issues.
// 3. If you're dealing with a large feature, it's often better to merge the branch instead of cherry-picking individual commits.

// Summary:
// --------
// - `git cherry-pick` allows you to take a specific commit and apply it to your current branch.
// - It’s useful when you only want specific changes from another branch without merging the entire branch.
// - Be cautious when cherry-picking commits that are part of a larger, dependent feature, as it may introduce bugs.
