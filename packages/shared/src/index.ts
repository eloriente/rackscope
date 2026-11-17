export interface Metric { name: string; value: number; unit: string; timestamp: string }
export interface Host { id: string; name: string; status: "online" | "offline" | "unknown"; metrics: Metric[] }
export interface Guest { id: string; name: string; kind: "vm" | "lxc"; hostId: string; status: string }
export interface Container { id: string; name: string; image: string; state: string; guestId?: string }
export interface Snapshot { hosts: Host[]; guests: Guest[]; containers: Container[] }

export interface Provider {
  readonly name: string;
  getStatus(): Promise<Partial<Snapshot>>;
}
