export class LocalMonitor {
  private state: number;

  constructor(seed: number = 40) {
    this.state = seed;
  }

  sync_collector(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 40) % 997;
    }
    return acc;
  }
}

const obj = new LocalMonitor();
console.log(obj.sync_collector(40));
