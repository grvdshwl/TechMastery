// What is git rebase?
// -------------------
// `git rebase` is a Git command that moves your commits to the top of another branch.
// It allows you to take the changes in your branch and apply them on top of another branch, like `main`.
// This avoids creating extra merge commits and gives a clean, linear history.

// How to Use git rebase:
// ----------------------
// 1. Checkout your feature branch:
// git checkout feature-branch

// 2. Rebase onto the main branch:
// git rebase origin/main
// This moves all your commits to the top of the `main` branch's latest state.

// 3. Resolve any conflicts that may happen during rebase.
// If Git finds conflicts, it will pause the rebase and allow you to fix them manually.

// After resolving conflicts:
// - git add <file-with-conflict>
// - git rebase --continue

// 4. Push your rebased branch using --force, since the history has changed:
// git push --force

// Why should you use git rebase?
// ------------------------------
// 1. Clean History: `git rebase` keeps your commit history clean and simple, without extra merge commits.
// 2. Sync Your Work: It lets you incorporate the latest changes from `main` without creating a mess in the commit log.

// Example:
// --------
// If you are working on a `feature-branch` while the `main` branch has new changes:
// 1. Switch to your feature branch:
//    git checkout feature-branch

// 2. Rebase on top of main:
//    git rebase main

// 3. Resolve conflicts if any arise, and continue the rebase.

// 4. Push your branch using force push:
//    git push --force

// When to use git rebase?
// -----------------------
// - Use it when you want to avoid creating extra merge commits and keep the history linear.
// - Before merging your feature branch into `main`, you can rebase it to include the latest changes.
// - It's good for personal branches that no one else is working on.

// When NOT to use git rebase?
// ---------------------------
// - Don't rebase a branch that is shared with others, as it changes commit history and can confuse others.
// - Avoid rebasing after you've already pushed the branch and others may have pulled it.

// Summary:
// --------
// - `git rebase` moves your changes on top of another branch, making the commit history clean.
// - It's useful for avoiding merge commits and keeping your work up to date with the latest changes.
// - Use it for personal branches, but avoid it for shared branches.
