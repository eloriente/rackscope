# 0002. `Provider` interface for data sources

- Status: Accepted
- Date: 2026-11-17

## Context
Data comes from heterogeneous sources: the Proxmox API, Docker (`dockerode`) and the operating system (`systeminformation`). The frontend must not know where data originates, and adding a new source must not require touching it.

## Decision
A common `Provider` contract with `getStatus()` and a normalized model (`Host`, `VM`, `Container`, `Metric`). Each source is an implementation. The backend queries them in parallel and, if one fails, returns the rest and marks that source as "unavailable".

## Rejected alternatives
- **Frontend queries each source directly:** exposes secrets and couples the UI to each API's format.
- **A single module with per-source logic:** harder to test and extend.

## Consequences
- Adding sources (for example an OpenTelemetry Collector in phase 3) means adding one implementation.
- The normalized model is a design decision that must be kept stable.
- A partial failure does not break the UI.