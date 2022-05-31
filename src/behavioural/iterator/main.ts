import { MyDataStructure } from './my-data-structure';
import { MyReverseIterator } from './my-reverse-iterator';

const dataStructre = new MyDataStructure();
dataStructre.addItem('A', 'B', 'C', 'D', 'E', 'F');

const [a, b] = dataStructre;
console.log(a, b);
const [c, ...rest] = dataStructre;
console.log(c, rest);
console.log();

dataStructre.resetIterator();
for (const data of dataStructre) {
  console.log(data);
}
console.log();
dataStructre.changeIterator(new MyReverseIterator(dataStructre));

for (const data of dataStructre) {
  console.log(data);
}
console.log();

dataStructre.resetIterator();
for (const data of dataStructre) {
  console.log(data);
}
console.log();
