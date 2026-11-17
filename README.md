# Rackscope
## Description
Rackscope is an open source dashboard for people who run their own servers (Proxmox, Ubuntu Server with Docker, Raspberry Pi). It shows the live state of your host, virtual machines, LXC containers and Docker containers in one place, and doubles as a homepage with links to your self-hosted services.

Features

Live status of hosts, VMs, LXCs and containers: CPU, memory, disk and uptime.
Homepage with links to your services, configured in a simple YAML file.
No database required to get started: a single Node process and a React interface.
Resilient by design: if one source is unreachable, the rest keeps working.
Read-only access to your infrastructure, using a least-privilege Proxmox token.

Roadmap

Metrics history and trends, backed by a pluggable storage layer (Elasticsearch first, lightweight SQLite option later).
Unified search across logs, metrics, containers and VMs.
Alerts via ntfy, with Telegram and webhooks to follow.
Optional agent or OpenTelemetry Collector for additional machines.
Natural-language search with a local LLM.

Stack: React, TypeScript, Node.js. Architecture decisions are documented in [docs/adr](./docs/adr/).

## Architecture Decision Records

Architecture decisions for Rackscope. Format: Context, Decision, Rejected alternatives, Consequences.

| # | Decision | Status |
|---|----------|--------|
| [0001](./docs/adr/01-live-status-without-database.md) | Phase 1: live status, no database | Accepted |
| [0002](/docs//adr/02-provider-interface.md) | `Provider` interface for data sources | Accepted |
| [0003](/docs/adr/03-elasticsearch-for-history.md) | Elasticsearch for history, behind `StorageAdapter` | Proposed |
| [0004](/docs/adr/04-proxmox-and-docker-access.md) | Proxmox and Docker access | Accepted |
| [0005](/docs/adr/05-ntfy-for-alerts.md) | ntfy as the alert channel | Accepted |
| [0006](/docs/adr/06-links-in-yaml.md) | Homepage links in YAML | Accepted |