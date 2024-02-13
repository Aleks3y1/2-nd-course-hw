//h1
let elem = 'строка EMPTY'.toUpperCase();

//h2
function filterString(str, startsWith) {
    return str.filter(item =>
        item.toLowerCase().startswith(startsWith.toLowerCase()));
}
//h3
let num = Math.floor(32.58884);
num = Math.ceil(32.58884);
num = Math.round(32.58884);

//h4
Math.min(52, 53, 49, 77, 21, 32);
Math.max(52, 53, 49, 77, 21, 32);

//h5
const randomNumber = () => Math.round(Math.random() * (10 - 1) + 1);

//h6
const randomNumberArray = (a) => Array.from({ length: a / 2 }, (x) => Math.round(Math.random() * a));

//h7
const randomNumb = (a, b) => Math.round(Math.random() * (Math.max(a, b) - Math.min(a, b)) + Math.min(a, b));

//h8
let currentDate = new Date();
console.log(currentDate);

//h9
let setDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 73, currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds());
console.log(setDay);

//h10
const day = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const currentDateInRu = (currentDate) => {
    return (`Дата: ${currentDate.getDate()} ${month[currentDate.getMonth()]} ${currentDate.getFullYear()} - это ${day[currentDate.getDay()]}.
    Время: ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`);
}

//h11
const fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

const wordsGame = () => {
    fruits.sort(() => Math.random() - 0.5);
    alert(fruits);
    let answer1 = prompt('Чему равнялся первый элемент массива?');
    let answer2 = prompt('Чему равнялся последний элемент массива?');

    switch (true) {
        case answer1 === fruits[0] && answer2 === fruits[fruits.length - 1]:
            alert('Поздравляем! Вы угадали первый элемент массива и последний элемент массива!');
            break;
        case answer2 === fruits[fruits.length - 1] || answer1 === fruits[0]:
            alert('Вы были близки к победе!');
            break;
        default:
            alert('Увы. Вы ошиблись. Попробуйте еще раз.');
            break;
    }
}