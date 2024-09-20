// What is git stash?
// -------------------
// `git stash` is a command in Git that allows you to temporarily save changes that are not ready to be committed.
// It "stashes" your uncommitted changes so you can work on something else, and then you can return to those changes later.

// How to Use git stash:
// ----------------------
// 1. Stash your changes:
// If you have uncommitted changes that you want to save temporarily, run:
// git stash
// This will save your changes and revert your working directory to the last committed state.

// 2. View stashed changes:
// To see a list of all stashed changes, use:
// git stash list
// This will show a list of stashes along with their identifiers (e.g., stash@{0}).

// 3. Apply stashed changes:
// To apply the most recent stash without removing it from the stash list, run:
// git stash apply
// If you want to apply a specific stash, use its identifier:
// git stash apply stash@{0}

// 4. Drop a stash:
// If you no longer need a specific stash, you can remove it using:
// git stash drop stash@{0}

// 5. Pop a stash:
// To apply the most recent stash and remove it from the stash list in one command, use:
// git stash pop
// This is useful when you want to apply your changes and clean up the stash at the same time.

// Example Scenario:
// ------------------
// 1. You are working on a feature and realize you need to switch branches to fix a bug.
// 2. Instead of committing unfinished work, you can stash your changes:
//    git stash
// 3. Switch to the bug-fix branch and make your changes.
// 4. Once done, switch back to your feature branch and apply your stashed changes:
//    git checkout feature-branch
//    git stash apply

// When to use git stash?
// ------------------------
// 1. When you need to switch branches but have uncommitted changes that you don't want to commit yet.
// 2. When you want to save your progress temporarily while you work on something else.
// 3. When you need to pull changes from the remote but have local changes that are not ready for commit.

// When NOT to use git stash?
// ---------------------------
// 1. If your changes are complete and ready, consider committing them instead of stashing.
// 2. Avoid using stash for significant changes that require detailed tracking; consider creating a separate branch.
// 3. Be cautious with stashes, as they can accumulate and clutter your stash list over time.

// Summary:
// --------
// - `git stash` temporarily saves uncommitted changes and reverts your working directory to the last commit.
// - Use it when you need to switch contexts without committing unfinished work.
// - Remember to apply or pop your stashed changes when you're ready to return to your work.
