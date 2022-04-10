import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());
mainDishBuilder.reset();
mainDishBuilder.makeDessert();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

const veganDishBuilder = new VeganDishBuilder();
veganDishBuilder.makeMeal().makeBeverage();
console.log(veganDishBuilder.getMeal());
console.log(veganDishBuilder.getPrice());
