export class SimpleContext {
  private state: number;

  constructor(seed: number = 29) {
    this.state = seed;
  }

  fetch_cache(count: number): number {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 29) % 997;
    }
    return result;
  }
}

const obj = new SimpleContext();
console.log(obj.fetch_cache(29));
