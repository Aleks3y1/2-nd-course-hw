"use strict";
//h1
const minimumNumber = (a, b) => {
    return Math.min(a, b);
}

//h2
const evenOrOdd = (a) => {
    return (a % 2 == 0) ? 'Число четное': 'Число нечетное';
}

//h3
const squareConsole = (a) => {
    console.log(a *= a);
}

const square = (a) => {
    return a *= a;
}

//h4
const ageUser = () => {
    const age = +(prompt('Сколько вам лет?'));
    if (age >= 13) {
        alert('Добро пожаловать!');
    } else if (age > 0) {
        alert('Привет, друг!');
    } else {
        alert('Вы ввели неправильное значение');
    }
}

//h5
const numberOrNan = (a, b) => {
   return (!Number.isNaN(a) && !Number.isNaN(b)) ? a * b: 'Одно или оба значения не являются числом';
}

//