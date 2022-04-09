import { MyDatabaseModule } from './db/my-database-module';

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: 'Felipe', age: 26 });
myDatabaseClassic.add({ name: 'Rafael', age: 26 });
myDatabaseClassic.add({ name: 'Carlos', age: 26 });
myDatabaseClassic.add({ name: 'Mateus', age: 26 });
myDatabaseClassic.remove(2);
myDatabaseClassic.show();
