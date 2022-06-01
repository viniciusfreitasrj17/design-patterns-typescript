import { ProductProtocol } from './product-protocol';
import { TaxProtocol } from './tax-protocol';

export class AlcoholicDrink extends ProductProtocol {
  constructor(protected _price: number) {
    super('AlcoholicDrink', _price);
  }

  getPriceWithTaxes(visitor: TaxProtocol): number {
    return visitor.calculateTaxesForAlcoholicDrink(this);
  }
}
