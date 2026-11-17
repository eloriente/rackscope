# 0006. Homepage links in YAML

- Status: Accepted
- Date: 2026-11-17

## Context
Rackscope also works as a homepage with links to the user's services. These are configuration, not telemetry, and do not belong in Elasticsearch.

## Decision
In phase 1, a `links.yml` file that the backend reads at startup. Later, auto-discovery through Docker labels (`rackscope.name`, `rackscope.url`).

## Rejected alternatives
- **Storing them in Elasticsearch:** couples simple configuration to a heavy service.
- **SQLite just for this:** introduces a database before it is needed.

## Consequences
- Hand-editable and versionable in Git.
- No editing from the UI in phase 1.
- Auto-discovery reduces manual upkeep, at the cost of agreeing on a label format.