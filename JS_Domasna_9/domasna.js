class Car {
  constructor(make, model, year, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
  }

  start() {
    console.log("Engine Starter");
  }

  drive(distance) {
    console.log(this.mileage + distance);
  }

  getMileage() {
    console.log(this.mileage);
  }
}

const myCar = new Car("Seat", "leon", 2010, 223000);

myCar.start();
myCar.getMileage();
myCar.drive(30);

// Задача 2.
// Да се креира класа Animal која што ќе има барем две својства и два методи. Потоа да се направи класа Dog која што ќе наследува од класата Animal. Дополнително, класата Dog да има барем плус уште едно својство и уште еден метод. Да се направат инстанци од двете класи и да се повикаат соодветните методи. Својствата и методите ги дефинирате вие сами.

class Animal {
  constructor(species, breed) {
    this.species = species;
    this.breed = breed;
  }
  animalSpicies() {
    console.log(`This animal is ${this.species}`);
  }
  animalBreed() {
    console.log(`This animal is ${this.species} and its ${this.breed}`);
  }
}

class Dog extends Animal {
  constructor(species, breed, name) {
    super(species, breed);
    this.name = name;
  }
  dogName() {
    console.log(`Dog's name is ${this.name}`);
  }
}

const animalCat = new Animal("cat", "Siamese");
animalCat.animalSpicies();
animalCat.animalBreed();
const newDog = new Dog("dog", "Golden Retriver", "Oskar");
newDog.dogName();

// Задача 3.
// Да се дефинира класа Rectangle со следните атрибути и методи:

// color
// width - приватна променлива
// height - приватна променлива
// Статичен метод getShapeType() кој што ќе враќа “Rectangle”
// Гетери и сетери за атрибутите width и height
// Метод getArea() кој што ќе ја пресметува плоштината
// Метод describe() koj што ќе ги принта бојата, ширината и висината на правоаголникот.
// Да се направат неколку инстанци од оваа класа и да се употребат соодветните методи.

class Rectangle {
  constructor(color, width, height) {
    this.color = color;
    this.width = width;
    this.height = height;
  }

  static getShapeType() {
    return "Rectangle";
  }
  get getWidth() {
    return this.width;
  }

  get getHeight() {
    return this.height;
  }

  set setWidth(newWidth) {
    this.width = newWidth;
  }

  set setHeight(newHeight) {
    this.height = newHeight;
  }

  getArea() {
    return this.height * this.width;
  }

  describe() {
    console.log(
      `Color: ${this.color}, Width: ${this.width}, Height: ${this.height}`
    );
  }
}

const rectangle1 = new Rectangle("Blue", 5, 10);
const rectangle2 = new Rectangle("Red", 3, 7);
console.log(Rectangle.getShapeType());
console.log(rectangle1);

rectangle1.describe();
rectangle2.describe();

console.log(rectangle1.getArea());
console.log(rectangle2.getArea());

// Дефинирајте класа на банкарска сметка(BankAccount) со следните атрибути и методи:

// Атрибути: accountNumber, accountHolder, balance
// Методи: deposit(amount), withdraw(amount), getBalance()
// Спроведете валидација во методот на повлекување(withdraw) за да се осигурате дека износот за повлекување не го надминува тековното салдо(balance).

// Креирајте два примероци од класата BankAccount и извршете некои трансакции (депозити и повлекувања).

class BankAccount {
  constructor(accountNumber, accountHolder, balance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amaunt) {
    return (this.balance += amaunt);
  }

  withdraw(amaunt) {
    if (this.balance >= amaunt) {
      this.balance -= amaunt;
    } else {
      console.log(`You can't withdraw.`);
    }
  }

  getBalance() {
    return this.balance;
  }
}

const newBankAkaunt = new BankAccount(
  200000541658,
  "Aleksandar Stevkovski",
  100000
);

newBankAkaunt.deposit(10000);
console.log(newBankAkaunt);
newBankAkaunt.withdraw(5000);
console.log(newBankAkaunt.getBalance());
newBankAkaunt.withdraw(200000);
console.log(newBankAkaunt.getBalance());
