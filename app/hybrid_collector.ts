export class LiteBuilder {
  private state: number;

  constructor(seed: number = 87) {
    this.state = seed;
  }

  encode_handler(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 87) % 997;
    }
    return value;
  }
}

const obj = new LiteBuilder();
console.log(obj.encode_handler(87));
