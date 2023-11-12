// 1 а. Дефинирајте една променлива globalNum која што ќе ја има вредноста 10. Креирајте функција која што ќе се вика checkScope и пробајте да ја испринтате вредноста на globalNum.

let globalNum = 10;
function checkScope() {
  let localNum = 10;
  console.log(globalNum);
}

checkScope();

//б. Во функцијата checkScope, декларирајте нова променлива localNum која што ќе ја има истата вредност како и променливата globalNum. Надвор од функцијата, со помош на console.log, споредете ги двете променливи со операторот “===”. Што добивте како резултат во конзолата?

//console.log(globalNum === localNum); //ReferenceError: localNum is not defined

// в. Да се декларира еден if услов како овој подолу:

// if(true){ let blockNum = 10; }

// Надвор од овој услов, со помош на typeof операторот пробајте да го испечатите типот на променливата blockNum. Што добивте како резултат во конзолата?
if (true) {
  let blockNum = 10;
}
console.log(typeof blockNum); // undefined

// 2 a. Да се декларира променлива number која што ќе има вредност 10. Под неа да се напише if-else кондиционал кој што ќе принта во конзола дали тој број е парен или непарен. Сменетe ја вредноста на number и со други броеви за да се осигурате дека условот работи коректно.

let number = 170;

if (number % 2 === 0) {
  console.log("This is a even number");
} else if (number % 2 !== 0) {
  console.log("This is an odd number");
}

// б. Декларирајте променлива age и инизијализирајте ја вредноста на 18. Под оваа променлива да се напише if-else услов кој што ќе принта во конзола дали личноста има право да гласа или не. За една личност да се здобие со право на гласање треба да има минимум 18 или повеќе години. Како и во предходната задача, менувајте ја вредноста на аge за да се осигурате дека условот работи правилно.

let age = 17;

if (age >= 18) {
  console.log("Лицето има право на гласање");
} else {
  console.log("Лицето нема право на гласање");
}

// в. Да се декларира променлива score koja што иницијално ќе има вредност од 78. Потоа да се напишат услови користејќи if, else if и else, такашто ќе ја одредите соодветната оценка врз основа на следната скала за оценување:

// 90 - 100: Grade: А
// 80 - 89: Grade: B
// 70 - 79: Grade: C
// 60 - 69: Grade: D
// 0 - 59: Grade: F

let score = 78;

if (score <= 100 && score >= 90) {
  console.log("Grade: A");
} else if (score < 90 && score >= 80) {
  console.log("Grade: B");
} else if (score < 80 && score >= 70) {
  console.log("Grade: C");
} else if (score < 70 && score >= 60) {
  console.log("Grade: D");
} else if (score >= 0 && score < 60) {
  console.log("Grade: F");
} else {
  console.log("Invalid score! Please enter a score between 0 and 100");
}

// г. Декларирајте променлива dayNumber и доделете ѝ нумеричка вредност помеѓу 1 и 7. (Да претпоставиме дека 1 е недела, 2 е понеделник и така натаму.) Користете switch за да го одредите соодветниот ден во неделата врз основа на дадениот dayNumber.

let dayNumber = 10;

switch (dayNumber) {
  case 1:
    console.log("The day is Sunday");
    break;
  case 2:
    console.log("The day is Monday");
    break;
  case 3:
    console.log("The day is Tuesday");
    break;
  case 4:
    console.log("The day is Wednesday");
    break;
  case 5:
    console.log("The day is Thursday");
    break;
  case 6:
    console.log("The day is Friday");
    break;
  case 7:
    console.log("The day is Saturday");
    break;
  default:
    console.log("Invalid day number. Please enter a number between 1 and 7.");
}

// Да се напишат 3 функции од кои што:
// првата функција потребно е да има три параметри(numbers) и да го враќа збирот од тие три броеви

function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(sum(2, 3, 5));

// втората функција потребно е да има еден параметар(string) и да го враќа истиот тој string
function myString(string) {
  return string;
}

console.log(myString("Sasko"));

let arrow = (arrowString) => {
  return arrowString;
};

console.log(arrow("Sasko"));

// третата функција потребно е да има два параметри(numbers) и да ги споредува истите. Ако броевите се исти, да ја испечати пораката "These numbers are equal" во спротивно да испечати "These numbers are not equal"

function comparation(num1, num2) {
  if (num1 === num2) {
    console.log("These numbers are equal");
  } else {
    console.log("These numbers are not equal");
  }
}

comparation(2, 2);
comparation(3, 5);
