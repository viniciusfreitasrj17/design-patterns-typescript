import { ProductProtocol } from './product-protocol';
import { TaxProtocol } from './tax-protocol';

export class Food extends ProductProtocol {
  constructor(protected _price: number) {
    super('Food', _price);
  }

  getPriceWithTaxes(visitor: TaxProtocol): number {
    return visitor.calculateTaxesForFood(this);
  }
}
