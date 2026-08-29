export class SmartHandler {
  private state: number;

  constructor(seed: number = 51) {
    this.state = seed;
  }

  sync_service(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 51) % 997;
    }
    return acc;
  }
}

const obj = new SmartHandler();
console.log(obj.sync_service(51));
