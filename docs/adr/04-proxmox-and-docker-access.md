# 0004. Proxmox and Docker access

- Status: Accepted
- Date: 2026-11-17

## Context
The test environment is a Proxmox server. The Proxmox API reports host, VM and LXC state, but cannot see Docker containers running inside VMs. Host temperatures are also usually not in the API.

## Decision
- **Proxmox:** consume its REST API with a `PVEAuditor` (read-only) token. The token lives only in the backend.
- **Docker:** `dockerode` against the socket of each VM running Docker, via local socket, TCP with TLS or SSH. A read-only proxy (for example `docker-socket-proxy`) is recommended.
- **Host:** `systeminformation` where the backend can run. For temperatures, `lm-sensors` on the host.
- A minimal agent or an OpenTelemetry Collector remains an option for additional machines (phase 3).

## Rejected alternatives
- **Proxmox API only:** gives no visibility into Docker.
- **Instrumenting Node with the OpenTelemetry SDK:** it traces the application itself, not the state of other machines' containers.

## Consequences
- There are two kinds of source: external (Proxmox API) and internal (inside each VM).
- Access to the Docker socket is equivalent to root on that machine: the documentation must require TLS or a filtered proxy, and never expose it unprotected.
- The README must state that temperatures require extra setup.