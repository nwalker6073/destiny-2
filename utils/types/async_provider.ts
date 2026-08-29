export class RemoteMonitor {
  private state: number;

  constructor(seed: number = 23) {
    this.state = seed;
  }

  parse_loader(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 23) % 997;
    }
    return value;
  }
}

const obj = new RemoteMonitor();
console.log(obj.parse_loader(23));
