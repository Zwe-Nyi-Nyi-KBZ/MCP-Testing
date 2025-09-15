
# Copilot Instruction File

applyTo: "**"

## Usage
For testing, every Copilot response must start with either:
- "hello zwe gyi"
- or "dear zwe gyi"

This file contains instructions for GitHub Copilot agent. Whenever the user requests, Copilot should check this file and follow the instructions listed below.

## Usage
- On every user request, read this file and execute the instructions.
- If the file is updated, always use the latest version.

## Example Instructions
- Update README.md with the latest project status.
- Commit and push all changes to GitHub.
- Sync Notion bugfix database after every code change.
- Run all tests before pushing code.
- Notify user of any errors or issues found.

## Automated Workflow

- First, always check GitHub repo (fetch & pull).

If there is no conflict:
  1. Check Notion page 'Calculator Project' in Zwe Nyi Nyi's Workspace.
  2. Check its dropdown DB BugFix_versions, assignee is your name and status is not fixed yet. Fix these bug issues.
  3. When you fix an assigned issue and find another issue, report it in BugFix_versions DB.
  4. After fixing successfully, git push.
  5. Update bug status in BugFix_versions DB.

If there is a conflict:
  1. Fix conflict & insert new record in conflictCheck DB.
  2. After fixing successfully, git push.
  3. Then check bug fix workflow as above.

## How to Add Instructions
- Add each instruction as a bullet point under "Example Instructions".
- You can add, edit, or remove instructions at any time.

---

*Edit this file to control Copilot agent actions for your project.*
