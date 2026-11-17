# 0003. Elasticsearch for history, behind `StorageAdapter`

- Status: Proposed (confirmed when phase 2 starts)
- Date: 2026-11-17

## Context
History needs full-text search over logs, time-based aggregations and retention. A stated goal of the project is also to learn Elasticsearch. The audience includes low-resource users (Raspberry Pi).

## Decision
Implement an Elasticsearch adapter first, behind a `StorageAdapter` interface defined from the start. Define explicit mappings for documents (timestamp, host, type, payload) instead of relying on dynamic mapping. Later, SQLite with FTS5 as a lightweight adapter.

## Rejected alternatives
- **SQLite + FTS5 from the start:** valid and far lighter, but it does not serve the learning goal and aggregations are less convenient.
- **Prometheus / Loki:** good for metrics and logs separately, but they do not provide the unified search that differentiates the project.

## Consequences
- Requires about 4 GB of RAM at minimum, and Elasticsearch security must be enabled from the start.
- On Linux it requires `vm.max_map_count=262144` (handled by `setup.sh`).
- `StorageAdapter` makes a lightweight profile possible without rewriting the backend.
- Retention and index sizing must be defined so data does not grow unbounded.