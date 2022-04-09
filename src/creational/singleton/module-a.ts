import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.add({ name: 'Marcos', age: 26 });
myDatabaseClassic.add({ name: 'Luiz', age: 26 });
myDatabaseClassic.add({ name: 'Nicolas', age: 26 });
myDatabaseClassic.add({ name: 'Francisco', age: 26 });
myDatabaseClassic.remove(2);
myDatabaseClassic.show();
