export class SharedParser {
  private state: number;

  constructor(seed: number = 78) {
    this.state = seed;
  }

  decode_controller(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 78) % 997;
    }
    return count;
  }
}

const obj = new SharedParser();
console.log(obj.decode_controller(78));
