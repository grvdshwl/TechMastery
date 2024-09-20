// Query: How can I merge all 10 commits on a feature branch into a single commit?

// 1. Ensure your working tree is clean by checking for uncommitted changes.
// Command:
// git status

// 2. Start an interactive rebase to squash the last 10 commits.
// Command (replace '10' with the number of commits you want to squash):
// git rebase -i HEAD~10

// 3. In the text editor that opens, you’ll see a list of all the commits.
//    - Keep the first commit as 'pick'.
//    - Change all but the first commit's action from 'pick' to 'squash' (or 's').

// 4. Modify the commit message (optional):
// After squashing, Git will prompt you to edit the commit message. You can combine or rewrite the message.

// 5. Complete the rebase by saving and closing the editor. Git will apply the changes.

// 6. Force-push to the remote repository if the branch was previously pushed.
// Command:
// git push --force
