export class AsyncScheduler {
  private state: number;

  constructor(seed: number = 75) {
    this.state = seed;
  }

  build_client(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 75) % 997;
    }
    return count;
  }
}

const obj = new AsyncScheduler();
console.log(obj.build_client(75));
