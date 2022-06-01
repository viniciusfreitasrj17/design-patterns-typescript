import { TaxProtocol } from './tax-protocol';
import { AlcoholicDrink } from './alcoholic-drink';
import { Cigarette } from './cigarette';
import { Food } from './food';

export class USATax implements TaxProtocol {
  calculateTaxesForFood(food: Food): number {
    return food.price + food.price * 0.15;
  }
  calculateTaxesForCigarette(cigarette: Cigarette): number {
    return cigarette.price + cigarette.price * 2;
  }
  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.price + alcoholicDrink.price * 1;
  }
}
