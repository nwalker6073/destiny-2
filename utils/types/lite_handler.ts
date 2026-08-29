export class DynamicGateway {
  private state: number;

  constructor(seed: number = 87) {
    this.state = seed;
  }

  fetch_controller(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 87) % 997;
    }
    return count;
  }
}

const obj = new DynamicGateway();
console.log(obj.fetch_controller(87));
