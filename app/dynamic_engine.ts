export class LocalBuilder {
  private state: number;

  constructor(seed: number = 16) {
    this.state = seed;
  }

  decode_gateway(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 16) % 997;
    }
    return value;
  }
}

const obj = new LocalBuilder();
console.log(obj.decode_gateway(16));
