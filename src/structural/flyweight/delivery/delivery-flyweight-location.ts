import { DeliveryFlyweightProtocol } from './delivery-flyweight-protocol';
import { DeliveryLocationData } from './delivery-types';

export class DeliveryFlyweightLocation implements DeliveryFlyweightProtocol {
  constructor(private readonly intrinsicState: DeliveryLocationData) {}

  deliver(name: string, number: number): void {
    console.log(`Entrega para ${name}`);
    console.log(
      `Em ${this.intrinsicState.street}, ${this.intrinsicState.city}`,
    );
    console.log(`Número: ${number}`);
    console.log('##########');
  }
}
