// Task 1
// Создайте массив содержащий строки, числа, булевы значения. Выведите его в консоль.

let arr1 = ['Hello', 23, true];
console.log(arr1);

// Task 2
// Создайте массив содержащий строки, числа, булевы значения. Выведите его в div. Совет. Попробуйте синтаксиc elem.innerHTML = ваш_массив.

let aar2 = ['Hello', 23, true];

document.querySelector('.out-2').innerHTML = aar2;

// Task 3.
// Создайте массив a. Выведите длину массива a.

const a = [2, 'hello', 17, 34, 'privet'];

document.querySelector('.out-3').innerHTML = a.length;

//Task 4.
// Создайте массив a. Выведите нулевой, третий, восьмой элемент массива a в консоль. Сделайте вывод о 8-м элементе.

document.querySelector('.out-4').innerHTML = a[0] + ' ' + a[3] + ' ' + a[8];

// Task 5.
// Создайте массив a. Выведите сумму нулевого, второго и третьего элементов массива.

document.querySelector('.out-5').innerHTML = a[0] + a[2] + a[3];

// Task 6.
// Создайте массив, который содержит ваше имя, знак зодиака, день рождения и месяц рождения. Выведите массив на страницу в div.

const yura = ['Yura', 'Diva', 15, 'September'];

document.querySelector('.out-6').innerHTML = yura;

//Task 7.
// Создайте массив b. Добавьте в него значения 'hi', 'foo', 'bar'. Вывести массив на страницу в элемент div.

let b = ['one', 1, 2, 'two'];


b[4] = 'hi';
b[5] = 'foo';
b[6] = 'bar';

document.querySelector('.out-7').innerHTML = b;

// Task 9.
// Создайте массив, который содержит 10 значений. Выведите 3-й и 7-й элемент. Выведите весь массив в консоль.
let arr8 = [1, 2, 3, 4, 5, 6, 'hello', true, 9, 10];

document.querySelector('.out-9').innerHTML = '3: ' + arr8[3] + '<br>' + '7: ' + arr8[7];

console.log('*******************  Task 9 ************************');
console.log(arr8);

// Task 10.
// Создайте массив содержащий только 1-й, 5-й и 10 элемент. Выведите его в консоль. Выведите его в div. Выведите длину данного массива.

let arr10 = [];

arr10[1] = 'Hello';
arr10[5] = true;
arr10[10] = 10;

document.querySelector('.out-10').innerHTML = arr10 + '<br>Length: ' + arr10.length;
console.log(arr10);

// Task 11.
// Создайте массив с, напишите функцию которая по клику на кнопке меняет первый и третий элемент местами. Под сменой мест понимается, что данные элементы поменяют значения - первый станет равный третьему, а третий - первому.
const c = [77, 88, 99, 66];

document.querySelector('.btn10').onclick = () => {
    let temp = c[1];
    c[1] = c[3];
    c[3] = temp

    document.querySelector('.out-11').innerHTML = c;
}

// Task 12.
// Напишите функцию, которая получает в качестве аргумента массив, и меняет нулевой и последний элемент массива местами. После чего выводит массив в консоль. Длина переданного массива может меняться. Небольшая подсказка - нам не нужно знать длину массива, поскольку мы можем ее посчитать через length.

function massChange(arr) {
    let temp = arr[0];

    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;

    console.log(arr);
}

massChange([1, 2, 3, 4, 5, 6, 7, 8]);

// Task 13.
// Используя цикл выведите элемента массива d на страницу. Разделитель - пробел.
let d = ['y', 4, 22, 'o'];

for (let i = 0; i < d.length; i++) {
    document.querySelector('.out-12').innerHTML += d[i] + ' ';
}

//Task 14.
// Используя цикл выведите на страницу массив e в обратном порядке. Разделитель - пробел.
let e = [1, 2, 3, 'hello', 66];
let result14 = '';
for (let i = e.length - 1; i >= 0; i--) {
    result14 += e[i] + ' ';
}
document.querySelector('.out-13').innerHTML = result14;

// Task 15.
// Используя цикл выведите на страницу элементы массива d, которые больше нуля. Разделитель - пробел.
let d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let result15 = '';

for (let i = 0; i < d15.length; i++) {
    if (d15[i] > 0) {
        result15 += d15[i] + ' ';
    }
    document.querySelector('.out-15').innerHTML = result15;
}

// Task 16.
// Выполните перебор массива d из предыдущей задачи. Четные элементы добавьте в массив a1, нечетные в a2. Выведите полученные массивы a1 и a2 на страницу.

let a1 = [],
    a2 = [];

for (let i = 0; i < d15.length; i++) {
    if (i % 2 === 0) {
        a1[i] = d15[i];
    } else {
        a2[i] = d15[i];
    }
}

document.querySelector('.out-16').innerHTML = 'Array a1 ' + a1 + ' Array a2 ' + a2;

//Task 17.
// Создайте массив e. Используя цикл и переменную счетчик - выведите количество элементов массива равных нулю.
let e17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
let counter = 0;

for (let i = 0; i < e17.length; i++) {
    if (e17[i] > 0) {
        counter++;
    }
}
document.querySelector('.out-17').innerHTML = 'Elements that are higher than 0 is ' + counter;

// Task 18.
// Используя предыдущий массив e и цикл - выведите максимальное значение из массива.
let max = e17[0];
for (let i = 0; i < e17.length; i++) {
    if (max < e17[i]) {
        max = e17[i];
    }
}

document.querySelector('.out-18').innerHTML = max;

// Task 19.
// Создайте массив f. С помощью цикла найдите индекс элемента с максимальным значением.
let f = [-3, 0, 45, 22, 123, -485, 98, 34];
let max19 = f[0];
let counter19 = 0;

for (let i = 0; i < f.length; i++) {
    if (max19 < f[i]) {
        max19 = f[i];
        counter19 = i;
    }
}

document.querySelector('.out-19').innerHTML = `Max array element index: ${counter19}`;

// Task 20.
// Используйте массив f. Используя цикл, посчитайте сумму элементов массива.
let sum = 0;

for (let i = 0; i < f.length; i++) {
    sum += f[i];
}

document.querySelector('.out-20').innerHTML = sum;
