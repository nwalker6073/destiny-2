export class StreamBuffer {
  private state: number;

  constructor(seed: number = 61) {
    this.state = seed;
  }

  handle_engine(count: number): number {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 61) % 997;
    }
    return result;
  }
}

const obj = new StreamBuffer();
console.log(obj.handle_engine(61));
