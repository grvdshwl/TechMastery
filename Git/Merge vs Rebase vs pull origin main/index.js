// How to view commit history before merging:
// ------------------------------------------
// Use `git log` to see the commit history of the current branch:
// git log --oneline
// This will give you a list of commits, helping you understand the current state of your branch before merging.

// 1. What is git merge?
// ------------------
// `git merge` is a command in Git that combines two branches.
// It keeps the history of both branches intact and creates a merge commit.
//
// How it works:
// - Suppose you have two branches: `feature-branch` and `main`.
// - Running `git merge main` on `feature-branch` brings all changes from `main` into `feature-branch`.
// - If there are no conflicts, Git creates a new merge commit. If conflicts arise, you resolve them manually.
//
// Example:
// git checkout feature-branch
// git merge main

// Pros:
// - Preserves the commit history from both branches.
// - Useful for showing when two branches were combined.

// 2. What is git rebase?
// ----------------------
// `git rebase` is used to replay commits from one branch on top of another.
// Instead of merging the entire branch history, it rewrites the commit history.
//
// How it works:
// - If you run `git rebase main` on `feature-branch`, it applies all commits from `feature-branch` on top of `main`.
// - This gives the appearance that your work started from the latest version of `main`.
//
// Example:
// git checkout feature-branch
// git rebase main

// Pros:
// - Keeps a linear history without extra merge commits.
// - Useful for keeping feature branches tidy.

// Important:
// - Resolve conflicts as you go during the rebase.
// - Avoid rebasing shared branches because it rewrites history.

// 3. What is git pull origin main?
// ---------------------------------
// `git pull origin main` is a combination of two commands: `git fetch` and `git merge`.
// It fetches the latest changes from the remote `main` branch and merges them into your current branch.
//
// Example:
// git checkout feature-branch
// git pull origin main

// Pros:
// - Automatically updates your branch with the latest changes from remote.
// - Convenient for staying in sync with other contributors.

// Key Differences:
// ----------------
// - **Merge**: Combines two branches, keeps both histories, creates a merge commit.
// - **Rebase**: Reapplies commits on top of another branch, creates a linear history, avoids merge commits.
// - **Pull**: Fetches remote changes and merges them into your current branch.

// When to use each:
// ------------------
// - Use `git merge` when you want to combine branches and maintain their history.
// - Use `git rebase` for a clean, linear history without merge commits.
// - Use `git pull origin main` to stay updated with the latest changes from the remote main branch.

// Summary in Example:
// --------------------
// 1. git merge:
// Combines `main` into your branch and creates a merge commit.
// Example:
// git checkout feature-branch
// git merge main

// 2. git rebase:
// Reapplies your commits on top of `main` for a clean history.
// Example:
// git checkout feature-branch
// git rebase main

// 3. git pull origin main:
// Fetches and merges changes from the remote main branch into your current branch.
// Example:
// git checkout feature-branch
// git pull origin main
