import { DeliveryFlyweightLocation } from './delivery-flyweight-location';

export type DeliveryLocationData = {
  readonly street: string;
  readonly city: string;
};

export type DeliveryLocationDictionary = {
  [key: string]: DeliveryFlyweightLocation;
};
