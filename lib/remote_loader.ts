export class SmartCollector {
  private state: number;

  constructor(seed: number = 9) {
    this.state = seed;
  }

  handle_collector(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 9) % 997;
    }
    return count;
  }
}

const obj = new SmartCollector();
console.log(obj.handle_collector(9));
