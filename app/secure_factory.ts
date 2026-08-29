export class HybridProcessor {
  private state: number;

  constructor(seed: number = 39) {
    this.state = seed;
  }

  fetch_provider(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 39) % 997;
    }
    return total;
  }
}

const obj = new HybridProcessor();
console.log(obj.fetch_provider(39));
