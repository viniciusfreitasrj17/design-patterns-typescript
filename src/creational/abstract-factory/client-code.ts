import { EnterpriseVehicleCustomerFactory } from './factories/enterprise-customer-vehicle-factory';
import { IndividualVehicleCustomerFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseVehicleCustomerFactory();
const individualFActory = new IndividualVehicleCustomerFactory();

const car1 = enterpriseFactory.createVehicle('Fusca', 'João');
const car2 = individualFActory.createVehicle('Celta', 'Helena');

car1.pickUp();
car2.pickUp();
