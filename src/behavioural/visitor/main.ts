import { AlcoholicDrink } from './alcoholic-drink';
import { BrazilTax } from './brazil-tax';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { USATax } from './usa-tax';

const food = new Food(10);
const cigarrete = new Cigarette(5);
const alcoholicDrink = new AlcoholicDrink(5);

const brazilTax = new BrazilTax();
const usaTax = new USATax();

const cart = [food, cigarrete, alcoholicDrink];
const total = cart.reduce((sum, item) => item.price + sum, 0);
const totalWithTaxesBrazil = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(brazilTax) + sum,
  0,
);
const totalWithTaxesUSA = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(usaTax) + sum,
  0,
);
console.log(total);
console.log(totalWithTaxesBrazil);
console.log(totalWithTaxesUSA);
