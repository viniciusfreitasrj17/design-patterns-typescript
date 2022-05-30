import { Seller } from './seller';
import { SellerProduct } from './seller-product';

export class Mediator {
  private sellers: Seller[] = [];

  addSeller(...sellers: Seller[]): void {
    sellers.forEach((seller) => {
      this.sellers.push(seller);
      seller.setMediator(this);
    });
  }

  buy(id: string): SellerProduct | void {
    let product;

    for (let i = 0; i < this.sellers.length; i++) {
      product = this.sellers[i].sell(id);

      if (product) {
        console.log(
          `Aqui está o produto ${product.id}, ${product.name}, ${product.price}`,
        );
        return;
      }
    }

    console.log(`Não há produto com o id ${id}`);
  }

  showProducts(): void {
    this.sellers.forEach((seller) => seller.showProducts());
  }
}
