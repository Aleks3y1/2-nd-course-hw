//h1
const num = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
    if (num[i] === 10) {
        break;
    }
}

//h2
const num1 = [1, 5, 4, 10, 0, 3];
console.log(num.indexOf(4));

//h3
const num2 = [1, 3, 5, 10, 20];
num2.join(' ');

//h4
const num3 = [];
for (let i = 0; i < 3; i++) {
    num3[i] = [];
    for (let a = 0; a < 3; a++) {
        num3[i][a] = 1;
    }
}

//h5
const num4 = [1, 1, 1];
for (let i = 0; i < 3; i++) {
    num4.push(2);
}

//h6
const num5 = [9, 8, 7, 'a', 6, 5];
let indexDelete = num5.indexOf('a');
num5.splice(indexDelete, 1);
num5.sort();

//h7
const num6 = [9, 8, 7, 6, 5];
let question = +(prompt('Угадайте число, которое содержится в массике.', 1));

let answer = (num6.indexOf(question) >= 0) ? 'Угадал' : 'Не угадал';

console.log(answer);

//h8
let stringAlphabet = 'abcdef';
const num7 = stringAlphabet.split('');
num7.reverse();
stringAlphabet = num7.join('');

console.log(stringAlphabet);

//h9
const num8 = [[1, 2, 3,], [4, 5, 6]];
const newArray = num8.flat();

console.log(newArray);

//h10
const newArray1 = [1, 2, 4, 6, 5];

for (let i = 0; i < newArray1.length; i++) {
    console.log(i <= (newArray1.length - 2) ? newArray1[i] + newArray1[i + 1] : newArray1[i]);
}

//h11
//1 способ
const doubleNum = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i] *= array[i];
    }
    return array;
}
//2 способ
const doubleNum1 = (array) => {
    array = array.map(x => x * x);
    return array;
}
doubleNum1([2, 4, 6]);

//h12
const stringLength = (array) => {
    array = array.map(x => x.length);
    return array;
}

//h13
function filterPositive(array) {
    return array = array.filter(x => x < 0);
}

//h14
const newArray14 = [];
const evenNumber = [];

for (let i = 0; i < 10; i++) {
    newArray14[i] = Math.round(Math.random() * 10);
    if (newArray14[i] % 2 == 0) {
        evenNumber.push(newArray14[i]);
    }
}

console.log(newArray14);
console.log(evenNumber);

//h15
const newArray15 = [];
let result = 0;

for (let i = 0; i < 6; i++) {
    newArray15[i] = Math.round(Math.random() * 9 + 1);
    result += newArray15[i];
}
console.log(result);
console.log(result / newArray15.length);
