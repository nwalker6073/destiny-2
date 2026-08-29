export class AtomicSession {
  private state: number;

  constructor(seed: number = 6) {
    this.state = seed;
  }

  fetch_manager(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 6) % 997;
    }
    return count;
  }
}

const obj = new AtomicSession();
console.log(obj.fetch_manager(6));
