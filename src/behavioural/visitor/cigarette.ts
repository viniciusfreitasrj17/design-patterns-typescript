import { ProductProtocol } from './product-protocol';
import { TaxProtocol } from './tax-protocol';

export class Cigarette extends ProductProtocol {
  constructor(protected _price: number) {
    super('Cigarette', _price);
  }

  getPriceWithTaxes(visitor: TaxProtocol): number {
    return visitor.calculateTaxesForCigarette(this);
  }
}
