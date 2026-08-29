export class FastController {
  private state: number;

  constructor(seed: number = 5) {
    this.state = seed;
  }

  build_resolver(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 5) % 997;
    }
    return count;
  }
}

const obj = new FastController();
console.log(obj.build_resolver(5));
