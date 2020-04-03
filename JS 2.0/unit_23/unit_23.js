
// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */

function t1() {
    localStorage.setItem('5', 11);
}

// ваше событие здесь!!!
document.querySelector('.b-1').onclick = t1;
// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */
let a2 = [7, 6, 5];

function t2() {
    localStorage.setItem('a2', JSON.stringify(a2));
}

// ваше событие здесь!!!
document.querySelector('.b-2').onclick = t2;

// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */

function t3() {
    let arr = localStorage.getItem('a2');

    document.querySelector('.out-3').textContent = JSON.parse(arr);
}

// ваше событие здесь!!!
document.querySelector('.b-3').onclick = t3;

// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/
let a4 = {
    'hello': 'world',
    'hi': 'mahai'
};
function t4() {
    localStorage.setItem('a4', JSON.stringify(a4));
}

// ваше событие здесь!!!
document.querySelector('.b-4').onclick = t4;
// Task 5 ============================================
/*   При нажатии кнопки t5 выведите из LS сохранненный массив a24. Выведите в out-4 в формате ключ пробел значение перенос строки. */

function t5() {
    let a = localStorage.getItem('a4');
    let b = JSON.parse(a);
    let out = '';

    for (key in b) {
        out += key + ' ' + a4[key] + '<br>';
    }

    document.querySelector('.out-4').innerHTML = out;
}

// ваше событие здесь!!!
document.querySelector('.b-5').onclick = t5;
// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

function t6() {
    localStorage.clear();
}

// ваше событие здесь!!!
document.querySelector('.b-6').onclick = t6;

// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/

let a = [];
function t7() {
    let input = document.querySelector('.i-7');
    a.push(input.value);

    localStorage.setItem('a7', JSON.stringify(a));
}

// ваше событие здесь!!!
document.querySelector('.b-7').onclick = t7;
// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */

function t8() {
    a.pop();
    localStorage.setItem('a7', JSON.stringify(a));
}

// ваше событие здесь!!!
document.querySelector('.b-8').onclick = t8;

