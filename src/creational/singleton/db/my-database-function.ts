import { User } from '../interfaces/user';

export const MyDatabaseFunction = (() => {
  const users: User[] = [];

  return {
    add(user: User): void {
      users.push(user);
    },

    remove(index: number): void {
      users.splice(index, 1);
    },

    show(): void {
      for (const user of users) {
        console.log(user);
      }
    },
  };
})();

// It is some object
const db1 = MyDatabaseFunction;
const db2 = MyDatabaseFunction;
console.log(db1 === db2);

// It isn't some object
const any1 = new Number(5);
const any2 = new Number(5);
console.log(any1 === any2, '\n');
