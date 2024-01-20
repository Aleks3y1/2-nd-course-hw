// h1
let password = 'пароль';
let userPassword = String(prompt('Введите пароль', 'На русском'));

if (userPassword == password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неверно');
}

// h2
let c = 5;
if (c > 0 && c < 10) {
    alert('Верно');
} else {
    alert('Неверно');
}

// h3
let d = 10;
let e = 100;

let calculatingNumber = function (a, b) {
    if (a > 100 || b > 100) {
        alert('Верно');
    } else {
        alert('Неверно');
    }
}

calculatingNumber(d, e);

//h4
let a = '2';
let b = '3';
alert(+(a) + +(b));

//h5
let monthNumber = prompt('Ведите число от 1 до 12');

switch (monthNumber) {
    case '1':
        alert('Январь');
        break;
    case '2':
        alert('Февраль');
        break;
    case '3':
        alert('Март');
        break;
    case '4':
        alert('Апрель');
        break;
    case '5':
        alert('Май');
        break;
    case '6':
        alert('Июнь');
        break;
    case '7':
        alert('Июль');
        break;
    case '8':
        alert('Август');
        break;
    case '9':
        alert('Сентябрь');
        break;
    case '10':
        alert('Октябрь');
        break;
    case '11':
        alert('Ноябрь');
        break;
    case '12':
        alert('Декабрь');
        break;
    default: alert('Поддерживается только числа от 1 до 12!');
        break;
}

//h7
let usersNumber = +(prompt('Пожалуйста, введите любое число'));
if (isNaN(usersNumber)) {
    alert('Вы ввели не число!');
} else if ((usersNumber % 2) > 0) {
    alert('Число нечетное');
} else {
    alert('Число четное');
}

//h8
//1 вариант
let clientOS = Math.round(Math.random());
if (clientOS) {
    console.log('Установите версию приложения для Android по ссылке');
} else {
    console.log('Установите версию приложения для iOS по ссылке');
}
//2 вариант
/*const clientOS = navigator.userAgent.toLowerCase().match(/iphone/i);

if (!clientOS) {
    alert('Установите версию приложения для iOS по ссылке');
} else {
    alert('Установите версию приложения для Android по ссылке');
}
*/

//h9
let clientsOS = Math.round(Math.random());
let clientDeviceYear = +(prompt('Год выпуска вашего смартфона?', ''));

if (!clientsOS && clientDeviceYear >= 2015) {
    alert('Установите версию приложения для iOS по ссылке');
} else if (!clientsOS) {
    alert('Установите облегченную версию приложения для iOS по ссылке');
} else if (clientsOS && clientDeviceYear >= 2015) {
    alert('Установите версию приложения для Android по ссылке');
} else {
    alert('Установите облегченную версию приложения для Android по ссылке');
}
