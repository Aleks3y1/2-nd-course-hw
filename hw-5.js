"use strict";
//h1
const minimumNumber = (a, b) => {
    return Math.min(a, b);
}

//h2
const evenOrOdd = (a) => {
    return (a % 2 == 0) ? 'Число четное' : 'Число нечетное';
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
    return (!isNaN(a) && !isNaN(b)) ? a * b : 'Одно или оба значения не являются числом';
}

//h6
const cube = () => {
    let num = prompt('Введите число, которое нужно возвести в квадрат.');
    return (!isNaN(num)) ? `${num} в кубе равняется ${num *= num}` :
        'Переданный параметр не является числом';
}

//h7
function getAreaResult() {
    return (Math.PI * (this.radius ** 2));
}

function getPerimeterResult() {
    return (2 * Math.PI * this.radius);
}

const circle1 = {
    radius: 3,

    getArea: getAreaResult,
    getPerimeter: getPerimeterResult,
}

const circle2 = {
    radius: 3,

    getArea: getAreaResult,
    getPerimeter: getPerimeterResult,
}

//h8

function seasonsGame() {
    let monthNumber = +(prompt('Ведите число от 1 до 12'));

    if (monthNumber === 1 || monthNumber === 2 || monthNumber === 12) {
        return 'Зима';
    } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
        return 'Весна';
    } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
    return 'Лето';
    } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
        return 'Осень';
    } else {
        return 'Поддерживается только числа от 1 до 12!';
    }
}