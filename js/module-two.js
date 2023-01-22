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
        console.log('Чётное число:' + ' ' + orders[i]);
    }
}

console.log('Сумма чётных чисел:' + ' ' + totalEvenValue);

// 15.1 Task 3.1
totalEvenValue = 0;

for (let evenValueOrder of orders) {
    if (evenValueOrder % 2 === 0) {
        totalEvenValue += evenValueOrder;
        console.log(`Чётное число: ${evenValueOrder}`);
    }
}

console.log('Сумма чётных чисел:' + ' ' + totalEvenValue);

// 15.2 Task 3.2
totalEvenValue = 0;

for (const evenValueOrder of orders) {
    if (evenValueOrder % 2 !== 0) {
        continue;
    }

    totalEvenValue += evenValueOrder;
}

console.log('Сумма чётных чисел:' + ' ' + totalEvenValue);

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
        message = `Пользователь ${loginToFind} найден.`;
        break;
    }
    message = `Пользователь ${loginToFind} не найден!`;
}

console.log(message);

// 16.1 Task 4.1
console.log(`Task 4.1`);
const loginToFindTwo = 'Oleksii';
message = `Пользователь ${loginToFindTwo} не найден!`;

for (let i = 0; i < logins.length; i += 1) {
    const login = logins[i];

    console.log(`Login: `, login);
    console.log(`${loginToFindTwo} === ${login}: `, loginToFindTwo === login);
    
    if (loginToFindTwo === login) {
        message = `Пользователь ${loginToFindTwo} найден.`;
        break;
    }
}

console.log(message);

// 16.2 Task 4.2 for of
console.log(`Task 4.2`);
const loginToFindThree = 'Ivan';
message = `Пользователь ${loginToFindThree} не найден!`;

for (const login of logins) {

    console.log(`Login: `, login);
    console.log(`${loginToFindThree} === ${login}: `, loginToFindThree === login);

    if (loginToFindThree === login) {
        message = `Пользователь ${loginToFindThree} найден.`;
        break;
    }
}

console.log(message);

// 16.3 Task 4.3 includes
console.log(`Task 4.3`);
const loginToFindFore = 'Andrey';
message = `Пользователь ${loginToFindFore} не найден!`;

if (logins.includes(loginToFindFore)) {
    console.log(logins.includes(loginToFindFore));
    message = `Пользователь ${loginToFindFore} найден.`;
}

console.log(message);

// 16.4 Task 4.4 Тернарный оператор

console.log(`Task 4.4`);
message = logins.includes(loginToFindFore)
    ? message = `Пользователь ${loginToFindFore} найден.`
    : `Пользователь ${loginToFindFore} не найден!`;

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
    //     console.log(`Эта буква в нижнем регистре - `, letter);
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
console.log(`Исходный текст.`)
console.log(title);

const normalizedTitle = title.toLowerCase();
console.log(`Текст, приведенный к нижнему регистру ("нормализированный")`);
console.log(normalizedTitle);

const wordsTitle = normalizedTitle.split(' ');
console.log(`Массив слов заголовка`);
console.log(wordsTitle);

for (let i = 0; i < wordsTitle.length; i += 1) {
    wordsTitle[i] += '-';
}

console.log(wordsTitle);

console.log(`Объединяем элементы мвассива в строку.`);
let slugTitle = wordsTitle.join('');
console.log(slugTitle);

console.log(`Отрезаем лишний символ "-" в конце заголовка`);
slugTitle = slugTitle.slice(0, slugTitle.length - 1);
console.log(slugTitle);

// 20.1 Task 8.1 Slug, toLowerCase(), split(); join()
console.log(`Task 8.1`);

const titleTwo = 'A piece of the pie';

console.log(`Исходный текст.`)
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