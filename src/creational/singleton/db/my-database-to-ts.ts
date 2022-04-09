import { User } from '../interfaces/user';

export class MyDatabaseToTs {
  private static _instance: MyDatabaseToTs | null = null;
  private users: User[] = [];

  private constructor() {}

  static get instance(): MyDatabaseToTs {
    if (this._instance === null) {
      this._instance = new MyDatabaseToTs();
    }

    return this._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}

// It is some object
const db1 = MyDatabaseToTs.instance;
const db2 = MyDatabaseToTs.instance;
console.log(db1 === db2);

// It isn't some object
const any1 = new Number(5);
const any2 = new Number(5);
console.log(any1 === any2, '\n');
