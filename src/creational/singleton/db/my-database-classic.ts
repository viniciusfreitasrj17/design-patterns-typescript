import { User } from '../interfaces/user';

export class MyDatabaseClassic {
  private static instance: MyDatabaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  public static getInstance(): MyDatabaseClassic {
    if (this.instance === null) {
      this.instance = new MyDatabaseClassic();
    }

    return this.instance;
  }

  public add(user: User): void {
    this.users.push(user);
  }

  public remove(index: number): void {
    this.users.splice(index, 1);
  }

  public show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}

// It is some object
const db1 = MyDatabaseClassic.getInstance();
const db2 = MyDatabaseClassic.getInstance();
console.log(db1 === db2);

// It isn't some object
const any1 = new Number(5);
const any2 = new Number(5);
console.log(any1 === any2, '\n');
