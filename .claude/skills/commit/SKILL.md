---
name: commit
description: Stages, commits, and pushes changes to the main branch with a conventional commit message. Use when changes are ready to commit, after completing a task, or when the user asks to commit or save changes.
---

# Committing changes

## Workflow

- [ ] Step 1: Check status and diff
- [ ] Step 2: Stage relevant files
- [ ] Step 3: Commit with conventional message
- [ ] Step 4: Push to main

## Step 1: Check status and diff

```bash
git status
git diff
```

## Step 2: Stage relevant files

Stage by file or directory — never `git add -A` (risk of including secrets or unrelated files).

## Step 3: Commit

Commit message format enforced by commitlint:

```
<type>(<optional scope>): <description>

<optional body — wrap at 70 chars>
```

Valid types: `build` `chore` `ci` `docs` `feat` `fix` `perf` `refactor` `revert` `routine` `style` `test`

Rules:
- First line ≤ 50 chars, imperative mood ("add" not "added")
- No period at end of subject
- Body lines ≤ 70 chars, explains *why*, not *what*

**Examples:**

```
feat(auth): add JWT token refresh on expiry
```

```
fix(price-check): handle missing ticker symbol gracefully

Previously the routine crashed when the API returned null for
delisted tickers. Now logs a warning and skips the symbol.
```

```
routine(price-check): weekly run 2026-05-23
```

Pass the message via heredoc to avoid shell quoting issues:

```bash
git commit -m "$(cat <<'EOF'
type(scope): description

Optional body here.
EOF
)"
```

## Step 4: Push

```bash
git push origin main
```

## Gotchas

- `commit-msg` hook runs commitlint — message must match the format or the commit fails
- `pre-commit` hook may not be installed in cloud environments; formatting won't run automatically
- Never use `--no-verify`
