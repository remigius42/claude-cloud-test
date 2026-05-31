# Security news check

## Rules

- Favor established security news outlets like <https://www.heise.de/security>
- For each security issue, make sure it's confirmed by at least two independent
  sources
- To increase the signal, also consider social media outlets
- For each security issue, determine the CVE incl. URL and the score
- Only include security issues without CVE scores if it's a major security
  incident
- Don't add issues which are already in the
  - [handled issues](./security-issues-handled.md)
  - [ignored issues](./security-issues-ignored.md)
- Before adding a new issue, check if it is implicitly covered by a
  `security-issues-handled.md` entry (e.g. applied patch level ≥ required, or
  installed version ≥ required). If so, add it to the **"Handled automatically"**
  table in `security-issues.md` with a `comment` naming the covering entry,
  instead of the main table.
- Only write to [security-issues.md](./security-issues.md) — the handled and
  ignored files are maintained by the user

## Output format

- `added`: YYYY-MM-DD, the date you are running the check
- `reported`: YYYY-MM-DD, date of first public report
- `topic`: the topic this issues fits in. If multiple apply, use the main topic
- `issue`: issue label with source URL — use the common name the issue is
  referred by if one exists, otherwise summarize yourself
- `CVE`: CVE key with link
- `CVE score`: score, `n/a` if not available (yet)
- `mitigation`: shortest actionable fix, e.g. "upgrade to OpenSSH 10.3+", "disable X", "no fix yet"
- `sources`: comma-separated URLs confirming the issue (min. 2 independent
  sources)

## Tasks

1. Research for high impact security issues reported in the last 3 months among the topics
   - Android
   - Claude Code
   - ESPHome
   - Linux Kernel
   - Node.js / npm
   - openclaw
   - openspec
   - Raspberry Pi
   - SSH
   - tailscale
   - TLS / SSL
1. Add a row each to [security-issues.md](./security-issues.md) respecting the
   [§ Rules](#rules).
1. Send a notification if there are new critical security issues, per [§
   Notification](#notification)

## Notification

- Notify if there are **new** **critical** security issues via `SLACK_POST_URL` (see AGENTS.md)
- Include for each issue:
  - Issue name with URL to source
  - CVE incl. score
