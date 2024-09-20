// How to view commit history before merging:
// ------------------------------------------
// Use `git log` to see the commit history of the current branch:
// git log --oneline
// This will give you a list of commits, helping you understand the current state of your branch before merging.

// What is git merge?
// ------------------
// `git merge` is a command in Git that combines the changes from one branch into another.
// It integrates the changes from the target branch (like `main`) into your current branch, creating a new merge commit.

// How to Use git merge:
// ---------------------
// 1. Checkout the branch where you want to merge changes:
// git checkout feature-branch

// 2. Run git merge with the target branch you want to merge into your current branch:
// git merge main
// This will take all the changes from `main` and try to apply them to `feature-branch`.

// 3. Resolve any conflicts that arise:
// - If the changes in the two branches conflict, Git will pause the merge and ask you to resolve the conflicts manually.
// - After fixing the conflicts, stage the resolved files using:
//   git add <conflicted-file>
// - Then, complete the merge with:
//   git commit (or git merge --continue)

// 4. After merging, you will see a new "merge commit" in the history, which marks the point where the two branches were combined.

// Example Scenario:
// -----------------
// You're working on `feature-branch` and want to bring in the latest changes from `main`.
// - First, switch to your feature branch:
//   git checkout feature-branch
// - Then, merge the `main` branch into your feature branch:
//   git merge main
// - Resolve any conflicts that might occur and commit the merge.

// Fast-forward merge:
// -------------------
// If there are no new commits in the current branch, `git merge` will perform a "fast-forward merge".
// This means it will move the branch pointer forward, without creating a new merge commit.
// Example:
// git merge main
// (If no conflicts or extra commits exist, the history will just fast-forward without a merge commit.)

// When to use git merge?
// ----------------------
// 1. When you want to combine two branches, keeping the entire commit history from both branches intact.
// 2. To bring in the latest changes from the `main` branch into your feature branch.
// 3. When you're ready to integrate your work back into the main development line, typically before a release.

// When NOT to use git merge?
// --------------------------
// 1. If you want a cleaner, linear history, consider using `git rebase` instead of `git merge`.
// 2. If you don't want to create merge commits, and you prefer to replay your commits on top of the latest branch.
// 3. Avoid using `git merge` if you want to prevent extra commits from appearing in your history, as it creates a "merge commit."

// Summary:
// --------
// - `git merge` combines changes from one branch into another, creating a merge commit if there are new commits in both branches.
// - It's useful when you want to bring changes together while preserving the commit history of both branches.
// - It can create a "fast-forward merge" if there are no extra commits in the current branch.
// - Use it when integrating completed features or updates from one branch into another.
