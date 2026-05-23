# security-news-check

A Claude Routine that monitors security news for a set of topics, logs
confirmed high-impact CVEs with mitigations, and sends a Slack notification
for critical findings.

## Files

| File | Purpose |
| -- | -- |
| [`prompt.md`](./prompt.md) | Instructions for running the routine |
| [`security-issues.md`](./security-issues.md) | Log of tracked issues |
| [`security-issues-handled.md`](./security-issues-handled.md) | Issues that have been mitigated |
| [`security-issues-ignored.md`](./security-issues-ignored.md) | Issues out of scope or not applicable |
