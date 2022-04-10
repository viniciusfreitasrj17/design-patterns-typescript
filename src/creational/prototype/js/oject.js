const person = {
  firstName: 'Luiz',
  lastName: 'Miranda',
  age: 30,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(person);
console.log(anotherPerson);
anotherPerson.firstName = 'Joana';
console.log(anotherPerson.fullName());
console.log(anotherPerson);
console.log(person.fullName());
