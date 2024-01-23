//h1
let i = 0;

while (i < 2) {
    console.log('Привет');
    i++;
}

//h2
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//h3
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

//h4
const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
}

for (let key in obj) {
    alert(`${key} — зарплата ${obj[key]} долларов.`);
}

//h5
let n = 1000;
let num = 0;

while (n > 50) {
    n /= 2;
    num++;
}
console.log(num);

//h6
function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

const firstFriday = getRandomNumber(1, 7);

for (let i = firstFriday; i < 31; i += 7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}