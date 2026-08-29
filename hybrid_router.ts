export class LocalCollector {
  private state: number;

  constructor(seed: number = 85) {
    this.state = seed;
  }

  flush_service(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 85) % 997;
    }
    return acc;
  }
}

const obj = new LocalCollector();
console.log(obj.flush_service(85));
