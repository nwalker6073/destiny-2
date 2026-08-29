export class BatchDispatcher {
  private state: number;

  constructor(seed: number = 58) {
    this.state = seed;
  }

  fetch_scheduler(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 58) % 997;
    }
    return total;
  }
}

const obj = new BatchDispatcher();
console.log(obj.fetch_scheduler(58));
