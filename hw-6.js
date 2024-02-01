//h1
const num = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < num.length; i++) {
    if (num[i] === 10) {
        break;
    }
    console.log(num[i]);
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

let answer = (num6.indexOf(question) >= 0) ? 'Угадал': 'Не угадал';

console.log(answer);

//h8
let stringAlphabet = 'abcdef';
const num7 = stringAlphabet.split('');
num7.reverse();
stringAlphabet = '';
for (let el of num7) {
    stringAlphabet += el;
}
console.log(stringAlphabet);

//h9
const num8 = [[1, 2, 3,],[4, 5, 6]];
const newArray = [];

for (let i of num8) {
    for (let b of i) {
        newArray.push(b);
    }
}
console.log(newArray);

//h10
const newArray1 = [1, 2, 4, 6, 5];

for (let i = 0; i < newArray1.length; i++) {
    console.log(i <= (newArray1.length - 2) ? newArray1[i] + newArray1[i + 1]: newArray1[i]);
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
    const newArray = array.map(function (nums) {
    return nums * nums;
    })
    return newArray;
}

//h12
const stringLength = (array) => {
    const newArray = [];
    let i = 0;
    for (let elem of array) {
        newArray[i] = elem.length;
        i++;
    }
    return newArray;
}

//h13
function filterPositive(array) {
    const newArray = [];
    let i = 0;
    for (let elem of array) {
        if (elem < 0) {
            newArray[i] = elem;
            i++
        }
    }
    return newArray;
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
