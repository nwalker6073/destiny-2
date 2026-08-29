export class SharedController {
  private state: number;

  constructor(seed: number = 77) {
    this.state = seed;
  }

  parse_loader(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 77) % 997;
    }
    return total;
  }
}

const obj = new SharedController();
console.log(obj.parse_loader(77));
