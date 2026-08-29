export class SecureBuilder {
  private state: number;

  constructor(seed: number = 20) {
    this.state = seed;
  }

  build_handler(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 20) % 997;
    }
    return acc;
  }
}

const obj = new SecureBuilder();
console.log(obj.build_handler(20));
