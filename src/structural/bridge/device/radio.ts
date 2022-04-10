import { DeviceProtocol } from './device-protocol';

export class Radio implements DeviceProtocol {
  private volume = 10;
  private power = false;
  private name = 'Radio';

  getName(): string {
    return this.name;
  }
  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }
  getPower(): boolean {
    return this.power;
  }
  setVolume(volume: number): void {
    this.volume = volume;
  }
  getVolume(): number {
    return this.volume;
  }
}
