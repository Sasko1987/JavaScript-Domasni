// Задача 1.
// Да се дефинира функција printFunc koja што ќе прима еден параметар seconds. Оваа функција треба да печати "Coding is not that hard!" во конзола после специфицираните секунди. Доколку ја повикаме функцијата со аргумент кој што не е број, функцијата треба да испечати "Please enter number". Исто така потребно е да го лимитираме бројот на секунди да биде едноцифрен број. Доколку аргументот не е едноцифрен број, треба да се испечати: "Please enter one digit number" Пр. Ако аргументот е бројот 3, "Coding is not that hard!" ќе се испринта во конзола после 3 секунди.

function printFunc(seconds) {
  setTimeout(() => {
    if (seconds < 10 && seconds >= 0) {
      console.log("Coding is not that hard");
    } else if (typeof seconds !== "number") {
      console.log("Please enter a number");
    } else if (seconds >= 10) {
      console.log("Please enter a digit number");
    }
  }, seconds * 1000);
}

printFunc(0);

// Задача 2.
// Напишете 5 функции кои враќаат Promise
let isOpen = false;
function store(isOpen) {
  return new Promise((resolve, reject) => {
    if (isOpen) {
      resolve("Its Open");
    } else {
      reject("Its Closed");
    }
  });
}

function acceptedType(word) {
  return new Promise((resolve, reject) => {
    if (typeof word === "string") {
      resolve("You entered a string");
    } else {
      reject("Invalid input, Try again");
    }
  });
}
let number = Math.floor(Math.random() * 10);
function randomNumber(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number % 2 === 0) {
        resolve("Success! its Even number");
      } else {
        reject("Error, its Odd number");
      }
    }, 2000);
  });
}

function userData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userInfo = { name: "Sasko", lastName: "Stevkovski" };
      resolve(userInfo);
    }, 3000);
  });
}
let ms = 5000;
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise resolved after ${ms} milliseconds`);
    }, ms);
  });
}

// а. да се повикаат истите со .then() и .catch()

store(isOpen)
  .then((message) => console.log(message))
  .catch((message) => console.error(message));

acceptedType(2)
  .then((message) => console.log(message))
  .catch((message) => console.error(message));

randomNumber(number)
  .then((message) => console.log(message))
  .catch((message) => console.error(message));
console.log(number);

userData()
  .then((message) => console.log(message))
  .catch((error) => console.error("error occured", error));

delay(ms)
  .then((message) => console.log(message))
  .catch((error) => console.error("error occured", error));

// б. да се повикаат истите со async await каде што ќе ги употребите и блоковите try и catch

async function storeOpenOrClosed() {
  try {
    const isItOpen = await store();
    console.log(isItOpen);
  } catch (error) {
    console.error(error);
  }
}

storeOpenOrClosed();

async function types() {
  try {
    const stringTypes = await acceptedType("sasko");
    console.log(stringTypes);
  } catch (error) {
    console.error(error);
  }
}

types();

async function random() {
  try {
    const evenNumber = await randomNumber();
    console.log(evenNumber);
  } catch (error) {
    console.error(error);
  }
}

random();

async function addedUserData() {
  try {
    const fetchUserData = await userData();
    console.log(fetchUserData);
  } catch (error) {
    console.error("Error occured", error);
  }
}

addedUserData();

async function delayMs() {
  try {
    const delayedMs = await delay(ms);
    console.log(delayedMs);
  } catch (error) {
    console.error("error occured", error);
  }
}

delayMs();

// Задача 3.
// Да се креира функција checkNumber која што ќе прима еден параметар number. Оваа функција треба да враќа Promise со тоа што доколку бројот е парен, треба да се направи resolve и да се испринта пораката “The number is even” a ако бројот е непарен, да се направи reject со пораката “The number is odd”.

function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve("This number is Even");
    } else {
      reject("This number is Odd");
    }
  });
}

// Да се дефинира функција handleSuccess koja што ќе има еден параметар message и ќе го принта во конзола
function handleSuccess(message) {
  console.log(message);
}

// Да се дефинира функција handleError која што ќе има еден параметар error и ќе го принта во конзола

function handleError(error) {
  console.log(error);
}

// Да се повика функцијата checkNumber со неколку различни аргументи и соодветно во .then() и .catch да се повикаат handleSuccess и handleError

checkNumber(10).then(handleSuccess).catch(handleError);
checkNumber(5).then(handleSuccess).catch(handleError);
checkNumber(2).then(handleSuccess).catch(handleError);

// Задача 4.
// Во продолжение е дадена функција која што симулира API повик:

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "John Doe",
        age: 30,
        email: "john@example.com",
      });
    }, 2000);
  });
}
// Ваша задача е да дефинирате асинхрона функција displayUserDetails која што ќе ги испечати податоците во конзола. Да се употребат try/catch блокови.

async function displayUserDetails() {
  try {
    const userDetails = await fetchData();
    console.log(userDetails);
  } catch (error) {
    console.log(error);
  }
}
displayUserDetails();

// Задача 5.
// Во продолжение е дадена парцијално напишана функција со испуштени клучни зборови:

// function calculateSquareRoot(number) {
//     // {
//     // (number < 0) {
//     // new Error("Cannot calculate square root of a negative number")
//     // }
//     // return Math.sqrt(number)
//     // } (error) {
//     // new Error("Error occurred during square root calculation")
//     // } {
//     // console.log("Square root calculation completed.")
//     // }
//     // }

//     console.log(calculateSquareRoot(10))
// Ваша задача е да ги употребите правилните клучни зборчиња на соодветното место за да може да се изврши самата функцијата.

function calculateSquareRoot(number) {
  try {
    if (number < 0) {
      throw new Error("Cannot calculate square root of a negative number");
    }
    return Math.sqrt(number);
  } catch (error) {
    new Error("Error occurred during square root calculation");
    console.log(error);
  } finally {
    console.log("Square root calculation completed.");
  }
}

console.log(calculateSquareRoot(-5));
