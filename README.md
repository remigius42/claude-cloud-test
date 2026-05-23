# [claude-cloud-test](https://github.com/remigius42/claude-cloud-test)

Copyright 2026 [Andreas Remigius Schmidt](https://github.com/remigius42)

A playground for testing [Claude
Routines](https://code.claude.com/docs/en/routines) — Anthropic's feature for
running scheduled, API-triggered, or event-driven Claude Code sessions on
managed cloud infrastructure.

## Evaluation

This repo explores what Claude Routines are good at in practice:

- Can they replace lightweight cron jobs without custom infra?
- How well do they handle research + structured output tasks?
- What prompt patterns produce reliable, low-noise results?

Each routine in this repo is a self-contained experiment. The goal is not
production tooling but honest evaluation of the capability.

See the [announcement](https://claude.com/blog/introducing-routines-in-claude-code)
and the [official docs](https://code.claude.com/docs/en/routines) for
background.

## Usage

Each routine lives in `routines/<name>/` and contains a `prompt.md` with
self-contained instructions. To run a routine manually, open the prompt in
Claude Code and execute it. To schedule it, wire it up as a [Claude Code
Routine](https://claude.ai/code/routines) via
the Claude Code web UI.

**Prerequisite:** in Claude Code Web, enable the
GitHub Integration [Connector](https://claude.ai/customize/connectors) before
setting up the cloud environment — without it, you won't be able to select a
GitHub repo, which is required to run any routine.

Routines use `SLACK_POST_URL` for notifications — set this in your environment
or `.env` file before running.

| Routine | What it does |
| -- | -- |
| [price-check](./routines/price-check/) | Tracks Raspberry Pi 5 prices and predicts short-term price trends |
| [security-news-check](./routines/security-news-check/) | Monitors CVEs and security incidents across a set of topics |

## Engagement

This is a personal exploration project with best-effort maintenance. Responses
to issues or pull requests may be slow, and changes that don't align with the
project's direction are unlikely to merge.
