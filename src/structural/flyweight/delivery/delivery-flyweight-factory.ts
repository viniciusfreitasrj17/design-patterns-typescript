import { DeliveryFlyweightLocation } from './delivery-flyweight-location';
import { DeliveryFlyweightProtocol } from './delivery-flyweight-protocol';
import {
  DeliveryLocationData,
  DeliveryLocationDictionary,
} from './delivery-types';

export class DeliveryFlyweightFactory {
  private locations: DeliveryLocationDictionary = {};

  private createKey(data: DeliveryLocationData): string {
    return Object.values(data)
      .map((item) => item.replace(/\s+/, '').toLowerCase())
      .join('_');
  }

  makeLocation(
    intrinsicState: DeliveryLocationData,
  ): DeliveryFlyweightProtocol {
    const key = this.createKey(intrinsicState);
    if (key in this.locations) return this.locations[key];
    this.locations[key] = new DeliveryFlyweightLocation(intrinsicState);
    return this.locations[key];
  }

  getLocations(): DeliveryLocationDictionary {
    return this.locations;
  }
}
