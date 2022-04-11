import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFlyweightFactory } from './delivery/delivery-flyweight-factory';

const factoryDelivery = new DeliveryFlyweightFactory();
deliveryContext(factoryDelivery, 'Luiz', 20, 'Av Brasil', 'SP');
deliveryContext(factoryDelivery, 'Marcos', 20, 'Av Brasil', 'SP');
deliveryContext(factoryDelivery, 'Joana', 50, 'Av Brasil', 'SP');
deliveryContext(factoryDelivery, 'Eliana', 20, 'Av Brasil', 'RJ');
deliveryContext(factoryDelivery, 'Fernando', 20, 'Rua 4', 'RJ');
deliveryContext(factoryDelivery, 'Fábio', 50, 'Av Brasil', 'RJ');

console.log();
console.log(factoryDelivery.getLocations());
