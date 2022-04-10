import { ProductCustomizationDecorator } from './product/product-customization-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { TShirt } from './product/t-shirt';

const tShirt = new TShirt();
const tShirtWithStamp = new ProductStampDecorator(tShirt);
const customizeTShirt = new ProductCustomizationDecorator(tShirt);
const customizeTShirtWithStamp = new ProductCustomizationDecorator(
  tShirtWithStamp,
);

console.log(tShirt.getPrice(), tShirt.getName());
console.log(tShirtWithStamp.getPrice(), tShirtWithStamp.getName());
console.log(customizeTShirt.getPrice(), customizeTShirt.getName());
console.log(
  customizeTShirtWithStamp.getPrice(),
  customizeTShirtWithStamp.getName(),
);
