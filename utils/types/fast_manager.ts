export class RemoteService {
  private state: number;

  constructor(seed: number = 30) {
    this.state = seed;
  }

  render_parser(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 30) % 997;
    }
    return total;
  }
}

const obj = new RemoteService();
console.log(obj.render_parser(30));
