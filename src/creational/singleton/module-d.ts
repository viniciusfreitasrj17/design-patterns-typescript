import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Lucas', age: 26 });
myDatabaseClassic.add({ name: 'Paulo', age: 26 });
myDatabaseClassic.add({ name: 'Antonio', age: 26 });
myDatabaseClassic.add({ name: 'Leonardo', age: 26 });
myDatabaseClassic.remove(2);
myDatabaseClassic.show();
