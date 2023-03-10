"use strict";

// 1. arrays

const animals = ["cat", "dog", "bird", "tiger"];

console.log(animals);

// 2. table of array
console.table(animals);

// 3. a last index of an array
const lastIndex = animals.length - 1;
console.log(lastIndex);

// the index of an array
console.log(animals[2]);
console.log(animals[4]);

// 4.
animals[2] = "turtle";
console.log(animals);

// 5. add an index to an array
animals[4] = "pig";
console.log(animals);

// 6.
let a = 10;
let b = a;

console.log(a, b);

a = 20;

console.log(a, b);

// 7.
const c = [1, 2, 3];
const d = c;

console.log("c = ", c);
console.log("d = ", d);

c[0] = 22;

console.log("c = ", c);
console.log("d = ", d);

d[1] = 11;

console.log("c = ", c);
console.log("d = ", d);

const e = d;

console.log("e = ", e);

// 8.
console.log(c === d);
console.log([1, 2, 3] === [1, 2, 3]);

// 9.
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);
console.log(animals[3]);
console.log(animals[4]);

for (let i = 0; i <= animals.length - 1; i += 1) {
    console.log(animals[i]);
}

// 10.
for (let i = 0; i <= lastIndex + 1; i += 1) {
    animals[i] += '-1';
}

console.table(animals);

// 11. for of
for (const animal of animals) {
    console.log(animal);
}

// 12.
const arr = [1];
arr[40] = 39;
console.log(arr.length);
console.log(arr[1]);
console.log(arr[40]);
console.log(arr[0]);
console.log(arr[5]);

const array = [1, 2, 3];
console.log(array.length);
array.length = 4;
console.log(array.length);
console.log(array[3]);

// 13. Task 1
console.log('Task 1');

const orders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = 0;

for (let i = 0; i < orders.length; i += 1) {
    total += orders[i];
}

console.log('answer 1.1:' + ' ' + total);

// 13.1
total = 0;

for (let order of orders) {
    total += order;
}

console.log('answer 1.2:' + ' ' + total);

// 14. Task 2
total = 0;

for (let i = 0; i < orders.length; i += 1) {
    total += Math.round(orders[i] * 1.1);
}

console.log('answer 2' + ' ' + total);

// 15. Task 3
let totalEvenValue = 0;

for (let i = 0; i <= orders.length; i += 1) {
    if (orders[i] % 2 === 0) {
        totalEvenValue += orders[i];
        console.log('???????????? ??????????:' + ' ' + orders[i]);
    }
}

console.log('?????????? ???????????? ??????????:' + ' ' + totalEvenValue);

// 15.1 Task 3.1
totalEvenValue = 0;

for (let evenValueOrder of orders) {
    if (evenValueOrder % 2 === 0) {
        totalEvenValue += evenValueOrder;
        console.log(`???????????? ??????????: ${evenValueOrder}`);
    }
}

console.log('?????????? ???????????? ??????????:' + ' ' + totalEvenValue);

// 15.2 Task 3.2
totalEvenValue = 0;

for (const evenValueOrder of orders) {
    if (evenValueOrder % 2 !== 0) {
        continue;
    }

    totalEvenValue += evenValueOrder;
}

console.log('?????????? ???????????? ??????????:' + ' ' + totalEvenValue);

// 16. Task 4
console.log(`Task 4`);
const logins = ['Aleksey', 'Andrey', 'Ivan', 'Roman'];
const loginToFind = 'Aleksey';
let message = '';

for (let i = 0; i < logins.length; i += 1) {
    const login = logins[i];

    console.log(`Login: `, login);
    console.log(`${loginToFind} === ${login}: `, loginToFind === login);
    
    if (loginToFind === login) {
        message = `???????????????????????? ${loginToFind} ????????????.`;
        break;
    }
    message = `???????????????????????? ${loginToFind} ???? ????????????!`;
}

console.log(message);

// 16.1 Task 4.1
console.log(`Task 4.1`);
const loginToFindTwo = 'Oleksii';
message = `???????????????????????? ${loginToFindTwo} ???? ????????????!`;

for (let i = 0; i < logins.length; i += 1) {
    const login = logins[i];

    console.log(`Login: `, login);
    console.log(`${loginToFindTwo} === ${login}: `, loginToFindTwo === login);
    
    if (loginToFindTwo === login) {
        message = `???????????????????????? ${loginToFindTwo} ????????????.`;
        break;
    }
}

console.log(message);

// 16.2 Task 4.2 for of
console.log(`Task 4.2`);
const loginToFindThree = 'Ivan';
message = `???????????????????????? ${loginToFindThree} ???? ????????????!`;

for (const login of logins) {

    console.log(`Login: `, login);
    console.log(`${loginToFindThree} === ${login}: `, loginToFindThree === login);

    if (loginToFindThree === login) {
        message = `???????????????????????? ${loginToFindThree} ????????????.`;
        break;
    }
}

console.log(message);

// 16.3 Task 4.3 includes
console.log(`Task 4.3`);
const loginToFindFore = 'Andrey';
message = `???????????????????????? ${loginToFindFore} ???? ????????????!`;

if (logins.includes(loginToFindFore)) {
    console.log(logins.includes(loginToFindFore));
    message = `???????????????????????? ${loginToFindFore} ????????????.`;
}

console.log(message);

// 16.4 Task 4.4 ?????????????????? ????????????????

console.log(`Task 4.4`);
message = logins.includes(loginToFindFore)
    ? message = `???????????????????????? ${loginToFindFore} ????????????.`
    : `???????????????????????? ${loginToFindFore} ???? ????????????!`;

console.log(message);

// 17. Task 5
console.log(`Task 5`);
const numbers = [25, 687, 26, 67, 75, 367, 126, 69, 39, 40, 12];
let minNumber = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
    if (minNumber > numbers[i]) {
        minNumber = numbers[i];
    }
}

console.log(minNumber);

// 17.1 Task 5.1 for of
console.log(`Task 5.1`);
minNumber = numbers[0];

for (const number of numbers) {
    if (minNumber > number) {
        minNumber = number;
    }
}

console.log(minNumber);

// 18 Task 6
console.log(`Task 6`);
let stringAnimals = '';

for (const animal of animals) {
    stringAnimals += animal + ', ';
}

console.log(stringAnimals.slice(0, stringAnimals.length - 2));
console.log(stringAnimals);

stringAnimals = stringAnimals.slice(0, stringAnimals.length - 2);
console.log(stringAnimals);

// 18.1 Task 6.1
console.log(`Task 6.1`);
stringAnimals = animals.join(', ');
console.log(stringAnimals);

// 19 Task 7
const string = 'Java Script';
const letters = string.split('');

let invertedString = '';

console.log(letters);

for (const letter of letters) {
    console.log(letter);

    // if (letter === letter.toLowerCase()) {
    //     console.log(`?????? ?????????? ?? ???????????? ???????????????? - `, letter);
    //     invertedString += letter.toUpperCase();
    // } else {
    //     invertedString += letter.toLowerCase();
    // }

    invertedString += letter === letter.toLowerCase() ?
        letter.toUpperCase() : letter.toLowerCase();

}

console.log(invertedString);

// 20 Task 8 Slug, toLowerCase(), split(), for, length, join()
console.log('Task 10');

const title = 'A piece of the pie';
console.log(`???????????????? ??????????.`)
console.log(title);

const normalizedTitle = title.toLowerCase();
console.log(`??????????, ?????????????????????? ?? ?????????????? ???????????????? ("??????????????????????????????????")`);
console.log(normalizedTitle);

const wordsTitle = normalizedTitle.split(' ');
console.log(`???????????? ???????? ??????????????????`);
console.log(wordsTitle);

for (let i = 0; i < wordsTitle.length; i += 1) {
    wordsTitle[i] += '-';
}

console.log(wordsTitle);

console.log(`???????????????????? ???????????????? ???????????????? ?? ????????????.`);
let slugTitle = wordsTitle.join('');
console.log(slugTitle);

console.log(`???????????????? ???????????? ???????????? "-" ?? ?????????? ??????????????????`);
slugTitle = slugTitle.slice(0, slugTitle.length - 1);
console.log(slugTitle);

// 20.1 Task 8.1 Slug, toLowerCase(), split(); join()
console.log(`Task 8.1`);

const titleTwo = 'A piece of the pie';

console.log(`???????????????? ??????????.`)
console.log(titleTwo);

const normalizedTitleTwo = titleTwo.toLowerCase();
console.log(normalizedTitleTwo);

const wordsTitleTwo = normalizedTitle.split(' ');
console.log(wordsTitleTwo);

const slugTitleTwo = wordsTitleTwo.join('-');
console.log(slugTitleTwo);

// 20.2 Task 8.2 Chaining, slug, toLowerCase(), split(), join()
console.log(`Task 8.2`);
const titleThree = 'A piece of the pie';

const slugTitleThree = titleThree.toLowerCase().split(' ').join('-');
console.log(slugTitleThree);

// 21 Task 9 concat(), for of
console.log(`Task 9`);

const array1 = [2, 36, 47, 6, 94];
const array2 = [74, 36, 91, 31, 52, 4];

const numbersArrays = array1.concat(array2);
console.log(numbersArrays);

let totalArrays = 0;

for (const numberArray of numbersArrays) {
    totalArrays += numberArray;
}

console.log(totalArrays);

// 22 splice(), indexOf()
const cards = [
    'Card-1',
    'Card-2',
    'Card-3',
    'Card-4',
    'Card-5'
];

console.table(cards);

/*
 * Remove by index
*/
const cardToRemove = 'Card-1';
let index = cards.indexOf(cardToRemove);

console.log(`Index of an array element.`);
console.log(index);

console.log(`Remove an array element by index.`);
cards.splice(index, 2);
console.table(cards);

/*
 * Add/insert by index
*/

console.log(`Add/insert an array element by index`);
const cardToAddOne = 'Card-1';
const cardToAddTwo = 'Card-2';
cards.splice(index, 0, cardToAddOne, cardToAddTwo);
console.table(cards);

/*
 * Update an array element by index
*/
const cardToUpdate = 'Card-5';
index = cards.indexOf(cardToUpdate);
console.log(`Index of an array element.`);
console.log(index);

cards.splice(index, 1, 'Card-5.1');
console.table(cards);

// Task 14 Module two
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
const lastThreeEls = fruits.slice(fruits.length - 3);

console.log(firstTwoEls);

// Lesson 4(2)
const add = function (a, b) {
    console.log(`Added`);
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`${a} + ${b} =`, a + b);
    return a + b;
};

// Function declaration
add(2, 3);
console.log(add);

const add1 = add(1, 2);
console.log(`Result:`, add1);

const multiplay = function (a, b) {
    return a * b;
};

multiplay(2, 2);
console.log(multiplay(3, 3));

// Call stack
const FnA = function () {
    console.log('Function A executed');

    FnB();
};

const FnB = function () {
    console.log('Function B executed');

    FnC();
};

const FnC = function () {
    console.log('Function C executed');
}

// Catch errors
const FnD = function () {
    console.log('Function D executed');

    // console.log(value);

    FnE();
};

const FnE = function () {
    console.log('Function E executed');

    FnF();
};

const FnF = function () {
    console.log('Function F executed');

    // console.log(value);
}

FnD();

// Task 1. Functions
console.log(`Task 1. Functions`);

const calculateTotalPrice = function (items) {
    console.log(items);
    let totalPrice = 0;

    for (const item of items) {
        totalPrice += item;
    }

    return totalPrice;
};

const FnCalc = calculateTotalPrice([1, 2, 3]);
console.log(FnCalc);

console.log(calculateTotalPrice([5, 10, 15, 20]));
console.log(calculateTotalPrice([100, 200, 300, 400, 500]));

// Task 2 Functions
console.log('Task 2 Functions');

const logItems = function (items) {
    for (const item of items) {
        console.log(item);
    }
};

console.log(logItems([10, 11]));

// Task 3 Functions
console.log('Task 3 Functions');

const findLogin = function (allLogins, login) {
    return allLogins.includes(login)
        ? `User ${login} found.`
        : `User ${login} undefound.`;
};

console.log(findLogin([
    'Andrey', 'Ivan', 'Artiom', 'Aleksey', 'Konstantin', 'Sergey'
], 'Aleksey'));

// Task 3.1 Functions
console.log('Task 3.1');
const findLoginTwo = function (logins, loginToFind) {
    for (const login of logins) {
        if (loginToFind === login) {
            return `User ${loginToFind} found.`;
        }
    }
    return `User ${loginToFind} undefound.`;
};

console.log(findLoginTwo([
    'Andrey', 'Ivan', 'Artiom', 'Aleksey', 'Konstantin', 'Sergey'
], 'Aleksey'));

// Task 4 Functions

const findSmallesNumber = function (numbers) {
    let minNumber = numbers[0];
    for (let i = 1; i < numbers.length; i += 1) {
        if (minNumber > numbers[i]) {
            minNumber = numbers[i];
        }
    }
    return minNumber;
};

console.log(findSmallesNumber([598, 389, 658, 9463, 325, 82651, 55, 687, 36, -683]));

// Task 5 Function

console.log('Task 5 Functions');

const changeCase = function (string) {
    const letters = string.split('');
    console.log(letters);

    let invertedString = '';

    for (const letter of letters) {
        if (letter === letter.toLowerCase()) {
            invertedString += letter.toUpperCase();
        } else {
            invertedString += letter.toLowerCase();
        }
    }
    return invertedString
};

console.log(changeCase('jAVAsCRIPT'));

console.log('Task 5.1 Function');

const changeCaseTwo = function (string) {
    let letters = string.split('');
    let invertedString = '';

    for (const letter of letters) {
        const isInLowerCase = letter === letter.toLowerCase();

        invertedString += isInLowerCase
            ? letter.toUpperCase()
            : letter.toLowerCase();
    }

    return invertedString;
};

console.log(changeCaseTwo('jAVAsCRIPT'));

// Task 6 Slug Functions
console.log('Task 6 Slug Function');

const slugify = function (string) {
    const normalizedTitle = string.toLowerCase();
    const wordsTitle = normalizedTitle.split(' ');
    const slug = wordsTitle.join('-');

    return slug;
}

console.log(slugify('Rain cats and dogs'))

// arguments
const fn = function () {
    console.log(arguments);

    const args = Array.from(arguments);
    console.log(args);

    for (const argument of arguments) {
        console.log(argument);
    }
};

fn();
fn(1, 2, 3);
fn(1, 2, 3, 4, 5);
fn(1, 2, 3, 4, 5, 6, 7, 8);

// function (...args) {}
const fn1 = function (...args) {
    console.log(args);
}

fn1();
fn1(3, 2, 1);
fn1(5, 4, 3, 2, 1);
fn1(8, 7, 6, 5, 4, 3, 2, 1);

// function (...args) {}
const fn2 = function (a, b, c, d, ...args) {
    console.log(`${a}, ${b}`, c, d);
    console.log(args);
};

fn2('cat', 8, 'fish', 9, '', 1, 2, 3, 4, 5);

// Task 7 ...args Functions
console.log('Task 7 ...args Functions');

const add2 = function (...args) {
    console.log(args);

    let total = 0;

    for (const arg of args) {
        total += arg;    
    }

    return total;
};

console.log(add2(1, 2, 3));
console.log(add2(1, 2, 3, 4, 5));

// Task 8 ...args Functions
console.log('Task 8 ...args Functions');

const filterNumbers = function (array, ...args) {
    console.log(array);
    console.log(args);

    let newArray = [];

    for (const item of array) {
        console.log(item);

        if (args.includes(item)) {
            console.log(`Item ${item} is in arrays.`);
            newArray.push(item);
        }
    }

    return newArray;
}

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));