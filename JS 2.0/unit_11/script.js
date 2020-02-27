// Task 1.
// Создайте пустой массив arr1, input.u-1, кнопку button.u-2__push. При нажатии кнопки, функция читает
// содержимое input и добавляет содержимое в массив, после чего выводит содержимое массива в div.out-1.
let arr1 = [];
let input1 = document.querySelector('.i-1');
let out1 = document.querySelector('.out-1');

document.querySelector('.btn-1').onclick = () => {
    if (!input1.value.length === 0 || input1.value.trim()) {
        arr1.push(input1.value);
        out1.innerHTML = arr1;
        input1.value = '';

    } else {
        alert('Empty string');
    }
}

// Task 2.
// Добавьте к предыдущему заданию кнопку button.u-2__pop, при нажатии которой, к массиву arr1 применяется метод pop, после чего массив выводится в div.out-1

document.querySelector('.btn-2').onclick = () => {
    arr1.pop();
    out1.innerHTML = arr1;
}

// Task 3.
// Добавьте к заданию 1 кнопку button.u-3__shift, которая применяет к массиву arr1 метод shift ( читать за метод shift). После применения shift, массив arr1 выподится в div.out-1.

document.querySelector('.btn-3').onclick = () => {
    arr1.shift();
    out1.innerHTML = arr1;
}

// Task 4
// Добавьте к заданию 1 кнопку button.u -4__unshift, которая применяет к массиву arr1 метод unshift(читать за метод unshift).После применения unshift, массив arr1 выподится в div.out - 1. Надеюсь, вы догадаетесь проверять input на пустоту перед применением unshift.Надеюсь, вы это сделали и в первой задаче ?

document.querySelector('.btn-4').onclick = () => {
    if (!input1.value.length === 0 || input1.value.trim()) {
        arr1.unshift(input1.value);
        out1.innerHTML = arr1;
        input1.value = '';
    } else {
        alert('Empty string');
    }
}

// Task 5.
// Обьявите массив arr5, добате два элемента input, в первый пользователь может ввести индекс элемента, во второй - количество.Добавьте кнопку, по нажатию на которую к массиву arr5 применяется метод splice.Результат применения выводите в div.out - 5.

let arr5 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];

document.querySelector('.btn-5').onclick = () => {
    arr5.splice(+document.querySelector('.i-5_1').value, +document.querySelector('.i-5_2').value);
    document.querySelector('.out-5').innerHTML = arr5;
}

// Task 6.
// Напишите функцию funcPush, которая эмулирует работу метода push, функция, по нажатию кнопки:
// читает содержимое input в переменную
// вычисляет длину массива
// присваивает массиву новый элемент, а в качестве индекса указывает длину массива
// Выводит массив на страницу
let arr6 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];

document.querySelector('.btn-6').onclick = funcPush;

function funcPush() {
    let input = document.querySelector('.i-6');
    if (!input.value.length === 0 || input.value.trim()) {
        arr6[arr6.length] = input.value;
        document.querySelector('.out-6').innerHTML = arr6;
        input.value = '';
    } else {
        alert('Empty string');
    }
}

// Task 7.
// Напишите функцию funcPop, которая эмулирует работу метода pop, функция, по нажатию кнопки:
// удаляет последний элемент массива
// Выводит массив на страницу
let arr7 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];
let length = arr7.length;

document.querySelector('.btn-7').onclick = funcPop;

function funcPop() {
    delete arr7[length - 1];
    document.querySelector('.out-7').innerHTML = arr7;
}

// Task 8.
// Напишите функцию funcShift, которая эмулирует работу метода shift, функция, по нажатию кнопки:
// Создает новый массив где нулевым элементом выступает первый элемент исходного массива
// Выводит массив на страницу
let arr8 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];

document.querySelector('.btn-8').onclick = funcShift;

function funcShift() {
    let newArr = [];

    newArr[0] = arr8[1];
    document.querySelector('.out-8').innerHTML = newArr;
}

// Task 9.
// Напишите функцию funcUnShift, которая эмулирует работу метода unshift, функция, по нажатию кнопки:
// читает содержимое input в переменную
// создает новый массив где нулевым элементов задает считанную из input строку
// дописывает остальные значения старого массива в новый
// Выводит массив на страницу
let arr9 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];

document.querySelector('.btn-9').onclick = funcUnshift;

function funcUnshift() {
    let input = document.querySelector('.i-9');
    let newArr = [];

    newArr[0] = input.value;
    newArr.splice(1, 0, arr9.splice(1, arr9.length));

    document.querySelector('.out-9').innerHTML = newArr;
}

// Task 10.
// Создайте массив arr10, примените к массиву метод reverse ( читать за метод reverse). После применения reverse, массив arr10 выподится в div.out-10.
let arr10 = [2, 4, 6, 8, 10, 'hello'];

document.querySelector('.btn-10').onclick = () => {
    arr10.reverse();

    document.querySelector('.out-10').innerHTML = arr10;
}

//Task 11.
// Создайте input.u-11__input и кнопку button.u-11__button. Объявите массив arr11. По нажатию на кнопку, читайте содержимое input.u-11__input в переменную u11. Потом примените к массиву arr11 метод indexOf ( читать за метод indexOf). Результат применения indexOf выводите на страницу в div.out-11. Последовательно проверьте программу вводя в input числа 1, 3, 5, 12.
let arr11 = [0, 2, 3, 7, 8, 5, 11];

document.querySelector('.btn-11').onclick = () => {
    let u11 = document.querySelector('.i-11');

    document.querySelector('.out-11').innerHTML = arr11.indexOf(+u11.value);
}

//  Task 12.
// Напишите функцию funcIndexOf, которая эмулирует работу метода indexOf. Программа должна:
// читает содержимое input в переменную
// Запускать цикл по массиву и сравнивать каждый элемент массива с введенным.
// Если совпадение есть - останавливать цикл и выводить номер индекса на котором произошло совпадение.
// Если совпадения нет выводить -1.
let arr12 = [0, 2, 3, 7, 8, 5, 11];

document.querySelector('.btn-12').onclick = funcIndexOf;

function funcIndexOf() {
    let input = document.querySelector('.i-12');
    let out = document.querySelector('.out-12');

    for (let i = 0; i < arr12.length; i++) {
        if (arr12[i] === +input.value) {
            out.innerHTML = i;
            break;
        } else {
            out.innerHTML = -1;
        }
    }
}

// Task 13.
// Напишите функцию funcReverse, которая эмулирует работу метода reverse. Программа должна:
// Создать новый пустой массив
// Перебирать старый массив с конца (массив создайте сами)
// По очереди по элементу присвоить значения в новый массив.
// Вывести новый массив.
let arr13 = [0, 2, 3, 7, 8, 5, 11];

document.querySelector('.btn-13').onclick = funcReverse;

function funcReverse() {
    let newArr = [];
    let j = 0;

    for (let i = arr13.length - 1; i >= 0; i--) {
        newArr[j] = arr13[i];
        j++;
    }

    document.querySelector('.out-13').innerHTML = newArr;
}

// Task 14.
// Создайте инпут, куда пользователь может ввести число элементов в массиве. Создайте функцию, которая прочитает введенное число и создаст массив такой длины, причем каждый элемент - это случайное число от 0 до 100. Массивы выведите на страницу.
document.querySelector('.btn-14').onclick = () => {
    let input = document.querySelector('.i-14');
    let arr = [];
    let length = +input.value;

    for (let i = 0; i < length; i++) {
        arr[i] = Math.floor(0 - 0.5 + Math.random() * (100 - 0 + 1));
    }

    document.querySelector('.out-14').innerHTML = arr;
};

// Task 15.
// Создайте массив arr15. Напишите функцию, которая создаст новый массив, в который входят только четные элементы массива arr15 (элементы с четным индексом). Выведите на экран.
let arr15 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];

document.querySelector('.btn-15').onclick = () => {
    let newArr = [];

    for (let i = 0; i < arr15.length; i++) {
        if (i % 2 === 0) {
            newArr.push(arr15[i]);
        }
    }

    document.querySelector('.out-15').innerHTML = newArr;
}

// Task 16.
// Создайте button.u-16__button. Объявите массив arr16_1 и arr16_2. По нажатию на кнопку примените к массивам метод concat ( читать за метод concat). Результат применения concat выводите на страницу в div.out-16.
let arr16_1 = [3, 5, 7];
let arr16_2 = [2, 4, 6];

document.querySelector('.btn-16').onclick = () => {
    document.querySelector('.out-16').innerHTML = arr16_1.concat(arr16_2);
}

// Task 17.
// Напишите функцию funcConcat, которая эмулирует работу метода concat. Программа должна:
// Перебирает второй массив и его элементы добавляет в первый массив.
// Выводит массив на страницу.
let arr17_1 = [3, 5, 7];
let arr17_2 = [2, 4, 6];

document.querySelector('.btn-17').onclick = funcConcat;

function funcConcat() {
    for (let i = 0; i < arr17_2.length; i++) {
        arr17_1.push(arr17_2[i]);
    }

    document.querySelector('.out-17').innerHTML = arr17_1;
}

// Task 18.
// Создайте button.u-18__button и input.u-18__input. Объявите массив arr18 . По нажатию на кнопку примените к массивам метод includes, который проверяет есть ли в массиве значение введенное в input. ( читать за метод includes). Результат применения includes выводите на страницу в div.out-18.
let arr18 = [3, 5, 7, 11, 12, 13, 14];

document.querySelector('.btn-18').onclick = () => {
    let input = document.querySelector('.i-18');

    document.querySelector('.out-18').innerHTML = arr18.includes(+input.value);
    input.value = '';
}

// Task 19.
// Напишите функцию funcIncludes, которая эмулирует работу метода includes. Программа должна:
// Перебирает второй массив и сравнивать если введенный элемент совпал с текущим - прекращать работу цикла и выводить true.
// Если совпадений нет - false.
let arr19 = [3, 5, 7, 11, 12, 13, 14];

document.querySelector('.btn-19').onclick = () => {
    let input = document.querySelector('.i-19');
    let out = document.querySelector('.out-19');

    for (let i = 0; i < arr19.length; i++) {
        if (arr19[i] === +input.value) {
            out.innerHTML = true;
            input.value = '';
            break;
        } else {
            input.value = '';
            out.innerHTML = false;
        }

    }
}

// Task 20.
// Объявите массив arr20. Создайте кнопку, по нажатию которую к массиву применяется метод join ( читать за метод join). Результа выведите на страницу.
let arr20 = [3, 5, 7, 11, 12, 13, 14];

document.querySelector('.btn-20').onclick = () => {
    document.querySelector('.out-20').innerHTML = arr20.join('*');
}