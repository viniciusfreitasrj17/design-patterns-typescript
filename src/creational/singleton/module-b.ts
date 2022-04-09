import { MyDatabaseToTs } from './db/my-database-to-ts';

const myDatabaseClassic = MyDatabaseToTs.instance;
myDatabaseClassic.add({ name: 'Vinicius', age: 26 });
myDatabaseClassic.add({ name: 'Thiago', age: 26 });
myDatabaseClassic.add({ name: 'Otávio', age: 26 });
myDatabaseClassic.add({ name: 'Fernando', age: 26 });
myDatabaseClassic.remove(2);
myDatabaseClassic.show();
