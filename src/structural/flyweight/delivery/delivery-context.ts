import { DeliveryFlyweightFactory } from './delivery-flyweight-factory';

export const deliveryContext = (
  factory: DeliveryFlyweightFactory,
  name: string,
  number: number,
  street: string,
  city: string,
): void => {
  const location = factory.makeLocation({ street, city });
  location.deliver(name, number);
};
