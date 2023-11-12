// 1. а. Декларирајте низа со име fruits и доделете ѝ низа од најмалку три различни имиња на овошје (на пр., „apple“, „banana“, „orange“). Да се испринта вториот елемент од низата Да се додаде уште едно овошје во низата

let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[1]);
fruits.push("Pineapple");
// console.log(fruits);

// б. Декларирајте објект со име person со следниве својства: name: Your name age: Your age city: Your city

// Да се испринта градот Да се смени вредноста на age

// На крај да се испринтаат во конзола fruits & person

let person = {
  name: "Aleksandar",
  age: 35,
  city: "Skopje",
};

console.log(person.city);
console.log(person["city"]);

person.age = 36;

console.log(fruits, person);

//2 а. Да се напише jамка (for loop) кој што ќе итерира броеви од 0 до 10. Броевите да се испечатат во конзола.

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//б. Декларирајте две променливи start и end и доделете им нумерички вредности (на пр., 3 и 10). Користете јамка(for loop) за повторување низ броевите од почеток до крај. Внатре во јамката, проверете дали моменталниот број е парен. Ако е парен, додајте го во вкупниот број. По јамката, испечатете го збирот на парни броеви.

let start = 3;
let end = 10;
let sum = 0;

for (let i = start; i <= end; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log(sum);

// в. Декларирајте објект со име person со следниве својства: name: Your name age: Your age city: Your city

// Користете јамка (for-in) за да итерирате низ својствата на објектот на person и да ги испечатите во следниот формат: property: value

let person1 = {
  name: "Aleksandar",
  age: 35,
  city: "Skopje",
};

for (let x in person1) {
  console.log(x + ":" + " " + person1[x]); //text += x + person1[x] + " ";
}

// г. Декларирајте низа со име colors со најмалку три различни имиња на бои (на пр., "red", "green", "blue"). Користете јамка (for-of) за повторување низ низата бои и печатење на имињата на боите заедно со бројот на карактери што ги содржи бојата.

let colors = ["red", "green", "blue"];

for (let x of colors) {
  console.log(x + "-" + x.length + " characters");
}

// a. Да се декларира променлива count на која што ќе и доделите нумеричка вредност 5. Користете јамка (while) за да ги испечатите броевите од count надолу до 1.

let count = 5;

while (count <= 5) {
  console.log(count);
  if (count === 1) {
    break;
  }
  count--;
}

// б. Напишете програма што одбројува од 10 до 1. Користете јамка do-while и вклучете услов да излезе од циклусот кога одбројувањето ќе достигне 5. Испечатете го секој број во конзолата.
let number = 10;

do {
  console.log(`The number is ${number}`);
  number--;
} while (number >= 5);

// 4 a. Function declaration: Дефинирајте функција со име multiply која ќе прима два параметри и ќе го враќа нивниот производ.

function multiply(num1, num2) {
  let resault = num1 * num2;
  return resault;
}

// б. Function expression Дефинирајте променлива divide и доделете ѝ израз на функција којa ќе има два параметри и ќе го враќа нивниот количник.

let divide = function (num1, num2) {
  let resault = num1 / num2;
  return resault;
};

// в. Аrrow function Дефинирајте arrow function subtract која ќе прима два параметри и ќе ја враќа нивната разлика.

let subtract = (num1, num2) => {
  let resault = num1 - num2;
  return resault;
};

//Во сите од овие функции, внатре во нив декларирајте променлива result чија вредност ќе биде поставена на 0. Функциите треба да ја враќаат променливата result со точната вредност од операциите. На крај, повикајте ја секоја функција со соодветни аргументи и испечатете ги резултатите во конзола.

console.log(multiply(2, 5), divide(10, 2), subtract(10, 4));

// Задача 5.
// a. Да се дефинира функција која што ќе се вика calculateArraySum која што ќе прима еден параметар numbersArray. Внатре во телото на функцијата да се напише логика која што ќе го пресмета збирот на броевите од низата и ќе го врати резултатот. Да се повика функцијата со соодветниот аргумент и да се испринта резултатот во конзола.
let numbersArray = [1, 2, 3, 4, 5];
function calculateArraySum(numbersArray) {
  // const sum = numbersArray.reduce((partialSum, a) => partialSum + a, 0);
  // return sum;
  let resault = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    resault += numbersArray[i];
  }
  return resault;
}

console.log(calculateArraySum(numbersArray));

//Да се креира низа со име students која што ќе има најмалку два објекти кои што во себе ќе ги содржат следниве својства

let students = [];

let student1 = {
  name: "Petko",
  surname: "Petkovski",
  age: 35,
  address: {
    city: "Skopje",
    street: {
      name: "Nikola Petrov",
      number: 9,
    },
    zipCode: 1000,
  },
};
students.push(student1);

let student2 = {
  name: "Cvetko",
  surname: "Cvetkovski",
  age: 25,
  address: {
    city: "Ohrid",
    street: {
      name: "Kliment Ohridski",
      number: 25,
    },
    zipCode: 8000,
  },
};

students.push(student2);
//Да се испечати името на градот во кој што живее првиот студент со помош на (dot notation) синтакса и да се испечати името на улицата на вториот студент со помош на (bracket notation) синтакса.

console.log(student1.address.city);
console.log(student2["address"]["street"]["name"]);

//7 a. Да се напише функција која што ќе има еден параметар number која што ќе користи console.log за печатење во конзола со следниве услови. За броеви деливи со 3, да го отпечати зборот „Fizz“ за броеви деливи со 5 (а не со 3), да се отпечати зборот „Buzz“, а за броеви кои се деливи и со 3 и со 5 да се испечати зборот “FizzBuzz”. Доколку внесениот аргумент не исполнува ниту еден од овие услови, да се испечати самиот број во конзола.

function mathMethod(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0 && number % 3 !== 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
}

mathMethod(44);

//б. Да се декларира функција која што ќе има еден параметар month. Внатре во функцијата да се искористи switch услов кој што за даден месец како аргумент, ќе го враќа бројот на денови од тој месец. За Февруари да се претпостави дека секогаш ќе има 28 дена. Доколку се внесе вредност која што не е месец, да се испринта “Invalid input” во конзолата. Пр. Input: “June”, Output: 30

function daysInMonth(month) {
  month = month.toLowerCase();
  switch (month) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
      console.log(`The month ${month} have 31 days`);
      break;
    case "april":
    case "june":
    case "september":
    case "november":
      console.log(`The month ${month} have 30 days`);
      break;
    case "february":
      console.log(`The month ${month} have 28 days`);
      break;
    default:
      console.log("Inavlid Input");
  }
}

daysInMonth("june");

//Задача 8.
// Да се креира:

// a. објект кој што опишува книга
let book = {
  name: "The Lord Of The Rings",
  author: "J.R.R. Tolkien",
  year: 2012,
  price: {
    regularPrice: "$20",
    discount: "$2",
    shippring: "$1",
  },
  review:
    "An extraordinary work—pure excitement. — New York Times Book Review ",
};

// б. објект кој што опишува автомобил

let car = {
  brand: "Volkswagen",
  model: "Golf",
  generation: "Golf 8",
  performanceSpecs: {
    fuelTtLowSpeed: "11.1 l/100 km",
    fuelTtMediumSpeed: "7.8 l/100 km",
    fuelTtHightSpeed: "6.7 l/100 km",
  },
  technology: ["eTSI", "gtd", "tdi", "tsi"],
};

// в. објект кој што опишува студент

let student3 = {
  name: "Aleksandar",
  surname: "Stevkovski",
  age: 35,
  grades: [10, 10, 10, 8, 9, 6],
  academy: "Semos Education",
  subjects: {
    primary: "JavaScript",
    secondary: "React",
    third: "Node.js",
  },
};

//Задача 9.
// а. Да се направи for циклус кој што ќе го печати секој втор непарен број од 1 до 100.
let firstOdd = 3;
let reminder = firstOdd % 4;
for (let i = 1; i <= 100; i++) {
  if (i % 4 === reminder) {
    console.log(i);
  }
}

// б. Да се направи for циклус кој што ќе го испечати секој парен број од 1 до 50.

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
