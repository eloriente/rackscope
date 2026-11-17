# 0005. ntfy as the alert channel

- Status: Accepted
- Date: 2026-11-17

## Context
Rackscope needs to notify about outages and spikes. The audience is self-hosted and homelab users.

## Decision
ntfy as the initial channel: it can be self-hosted, a plain HTTP `POST` is enough, and it needs no bot. Channels are modeled behind an interface so Telegram and generic webhooks can be added later.

## Rejected alternatives
- **Telegram:** works well, but requires a bot and depends on an external service. Left for later.
- **Email:** requires SMTP configuration.

## Consequences
- Minimal integration with no new dependencies.
- Delivery depends on the ntfy server being reachable from the backend.
- Alerts belong to phase 3, after history.