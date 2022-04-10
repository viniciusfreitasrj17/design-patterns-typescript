function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const person = {
  firstName: 'Luiz',
  lastName: 'Miranda',
  age: 30,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// Pega o prototype
Person.prototype = Object.create(person);
// Pega o constructor
Person.prototype.constructor = Person;
// Trabalhando com Herança
function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = 'Hello';
}
SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person1 = new Person('Luiz', 'Miranda', 30);
console.log(person1);
console.log(person1.fullName());

const person2 = new SubPerson('Helena', 'Vieira', 30);
console.log(person2);
console.log(person2.fullName());
