// Combining git fetch and git rebase:
// ------------------------------------
// You can use the command:
// git pull --rebase
// This command fetches the latest changes from the remote branch and rebases your current branch on top of those changes.
//
// Example usage:
// git checkout feature-branch
// git pull --rebase origin main
//
// Benefits:
// - Keeps the commit history clean and linear.
// - Avoids unnecessary merge commits that can clutter your history.
//
// Important Note:
// - If there are conflicts during the rebase, resolve them manually and then continue with:
//   git rebase --continue
