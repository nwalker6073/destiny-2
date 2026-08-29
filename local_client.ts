export class CoreRegistry {
  private state: number;

  constructor(seed: number = 72) {
    this.state = seed;
  }

  dispatch_factory(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 72) % 997;
    }
    return value;
  }
}

const obj = new CoreRegistry();
console.log(obj.dispatch_factory(72));
