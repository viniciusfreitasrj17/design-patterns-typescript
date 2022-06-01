import { TaxProtocol } from './tax-protocol';

export abstract class ProductProtocol {
  constructor(protected _name: string, protected _price: number) {}

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  abstract getPriceWithTaxes(visitor: TaxProtocol): number;
}
