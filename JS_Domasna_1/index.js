let hasCoffee = true;
let hasTea = false;
let hasMilk = true;

// a. Does the student have either tea or milk?
let teaOrMilk = hasTea || hasMilk;
console.log("The stident have tea or milk - " + teaOrMilk);

// b. Does the student have both coffee and tea?
let coffeeAndTea = hasCoffee && hasTea;

console.log("The student have caffee and tea - " + coffeeAndTea);

// c. Is it true that the student doesn't have tea?
let notTea = !hasTea;
console.log("Its " + notTea + " that the student doesn't have tea");

// d. Does the student have either coffee or milk, but not both?

let notBoth = (hasCoffee && !hasMilk) || (!hasCoffee && hasMilk);

console.log(
  "The student have either coffee or milk, but not both - " + notBoth
);

// e. Is it true that the student has either tea and milk, or coffee and tea?

let chooseTwo = (hasTea && hasMilk) || (hasCoffee && hasTea);

console.log(
  "It's " +
    chooseTwo +
    " that the student has either tea and milk, or coffee and tea"
);

// f. Does the student have neither coffee nor tea?

let neither = !hasCoffee && !hasTea;

console.log("It's " + neither + " the student have neither coffee nor tea");

const num1 = 10;
const num2 = 5;
const num3 = 8;
const num4 = 2;
const num5 = 12;
const num6 = 4;
const num7 = 3;

const result = ((num1 + num2) * (num3 - num4)) / num5 + num6 * num7;
console.log("First reasult is" + " " + result);

const resault1 = (num5 + num2 - num7) * num6 - num1 / (num4 + num3);

console.log("Second resault is" + " " + resault1);

const resault2 = (num1 + (num5 - num6)) * num2 + num4 / (num3 % num7);

console.log("Third resault is" + " " + resault2);

const resault3 = num5 + (num7 - num4) - ((num6 * num1) % num2) + num3;

console.log("Fourth resault is" + " " + resault3);

const resault4 = num7 / num2 + num5 + num4 * (num1 + num3 - num6);

console.log("Fifth resault is" + " " + resault4);

let nam1 = 12;
let nam2 = 4;

let sum;
let diff;
let mult;
let div;
let rem;

sum = nam1 + nam2;
diff = nam1 - nam2;
mult = nam1 * nam2;
div = nam1 / nam2;
rem = nam1 % nam2;

console.log("Rezultatot na sobiranje e " + sum);
console.log("Rezultatot na odzemanje e " + diff);
console.log("Rezultatot na mnozenje e " + mult);
console.log("Rezultatot na delenje e " + div);
console.log("Ostatokot e " + rem);
