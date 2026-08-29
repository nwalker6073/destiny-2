export class AtomicSession {
  private state: number;

  constructor(seed: number = 34) {
    this.state = seed;
  }

  decode_session(count: number): number {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 34) % 997;
    }
    return result;
  }
}

const obj = new AtomicSession();
console.log(obj.decode_session(34));
