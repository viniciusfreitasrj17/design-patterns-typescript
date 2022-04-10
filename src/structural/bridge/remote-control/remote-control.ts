import { DeviceProtocol } from './../device/device-protocol';

export class RemoteControl {
  constructor(protected device: DeviceProtocol) {}

  togglePower(): void {
    this.device.setPower(!this.device.getPower());
    console.log(
      `${this.device.getName()} powerStatus: ${this.device.getPower()}`,
    );
  }
}
