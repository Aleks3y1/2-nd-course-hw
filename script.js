// Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);
// Задание 2
let firstIphone = 2007;
alert(firstIphone);
// Задание 3
let creatorJS = 'Brendon Eich';
alert(creatorJS);
// Задание 4
let num1 = 10;
let num2 = 2;
alert(+(num1) + +(num2));
alert(+(num1) - +(num2));
alert(+(num1) * +(num2));
alert(+(num1) / +(num2));
// Задание 5
let result = 2**5;
alert(result);
// Задание 6
a = 9;
b = 2;
alert(a % b);
// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);
// Задание 8
let age = prompt("Сколько вам лет?");
// Задание 9.0
const user = {
    name : 'Пётр',
    age: 21,
    isAdmin: true
}
// 9.1
user['city of residence'] = 'Moscow';
// 9.2
user.age = 23;
// 9.3
delete user['city of residence'];
// 9.4
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);
// 10
let name = prompt('Name?');
alert(`Привет, ${name}!`);

