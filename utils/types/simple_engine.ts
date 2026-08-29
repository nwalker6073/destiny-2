export class AsyncManager {
  private state: number;

  constructor(seed: number = 46) {
    this.state = seed;
  }

  handle_factory(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 46) % 997;
    }
    return total;
  }
}

const obj = new AsyncManager();
console.log(obj.handle_factory(46));
