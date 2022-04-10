import { CarFactory } from './factories/car-factory';
import { randomCarAlgothm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';
import { Car } from './vehicles/car';

// No Factory
const fusca = new Car('Fusca');
fusca.pickUp('Joana');
fusca.stop();
const celta = new Car('Celta');
celta.pickUp('Marcos');
celta.stop();
console.log();

// With Factory
const carFactory = new CarFactory();
const fusca2 = carFactory.getVehicle('Fusca');
fusca2.pickUp('Joana');
fusca2.stop();
const celta2 = carFactory.getVehicle('Fusca');
celta2.pickUp('Marcos');
celta2.stop();
console.log();

// With Factory Random
const customerNames = ['Ana', 'Joana', 'Helena', 'João'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgothm();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  console.log('---');
}
