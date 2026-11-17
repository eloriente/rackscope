# 0001. Phase 1: live status, no database

- Status: Accepted
- Date: 2026-11-17

## Context
Rackscope must show the current state of the host, VMs, LXCs and containers, and later a searchable history. These are different needs: current state needs no persistence; history does. The project is open source and also serves as a learning exercise and portfolio, so it should deliver value early and justify each component with a real need.

## Decision
Phase 1 uses no database. The backend queries the sources on demand, keeps the result in an in-memory cache with a short TTL, and holds a ring buffer with the last N hours of metrics to draw charts. Persistent storage is decided in phase 2 (see 0003).

## Rejected alternatives
- **Elasticsearch and OpenTelemetry from the start:** they add RAM, one more component per host and an external data schema before we know which queries are needed.
- **APM:** it traces application performance; it does not monitor infrastructure.

## Consequences
- Minimal install: a single process.
- History is lost when the backend restarts until phase 2 ships.
- The cache protects the Proxmox API from repeated browser requests.
- The in-memory buffer lets us build the trends view before choosing storage.