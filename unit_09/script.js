// TASK 1.  Напишите функцию func_1, которая присваивает p.u-1 ширину 200px.Проверьте ее работу.Допишите возможность присваивать высоту равную 100px;

function func_1() {
    let p = document.querySelector('.u-1');

    p.style.width = '200px';
    p.style.height = '100px';
    p.style.backgroundColor = 'red';
}

func_1();
// TASK 2. Напишите функцию func_2, которая будучи запущенной присваивает блоку p.u-2 класс css-1. Задайте данному классу через CSS зеленый цвет фона.

function func_2() {
    let p = document.querySelector('.u-2');

    p.classList.add('css-1');
}

func_2();
// TASK 3. Используя цикл, добавьте на все блоки p.u - 3 событие onclick.По клику запускайте функцию func_3, которая окрашивает элемент, на котором произошло событие в красный цвет фона.Для обращения внутри функции к такому элементу используйте this.
let p2 = document.querySelectorAll('.u-3');

for (let i = 0; i < p2.length; i++) {
    p2[i].onclick = func_3;
}

function func_3() {
    this.style.background = 'red';
}

// TASK 4. Используя цикл, добавьте на все блоки p.u - 4 событие onclick.По клику запускайте функцию func_4, которая присваивает элементу, на котором произошло событие, класс css - 2. Для обращения внутри функции к такому элементу используйте this.
let p4 = document.querySelectorAll('.u-4');

for (let i = 0; i < p4.length; i++) {
    p4[i].onclick = func_4;
}

function func_4() {
    this.classList.add('css-2');
}

// TASK 5. C помощью цикла, повесьте на блоки p.u - 5 функцию func_5, которая при клике будет удалять класс css - 3 с элемента, на котором произошло событие.
let p5 = document.querySelectorAll('.u-5');

for (let i = 0; i < p5.length; i++) {
    p5[i].onclick = func_5;
}

function func_5() {
    this.classList.remove('css-3');
}

// TASK 6. Есть кнопка.u - 6. Напишите функцию, которая при клике делает toggle классу.active для данной кнопки.
let btn6 = document.querySelector('.u-6');
btn6.onclick = func_6;

function func_6() {
    this.classList.toggle('active');
}

// TASK 7. Напишите функцию func - 7, которая будучи запущенной возвращает количество элементов с классом css-3.

function func_7() {
    console.log('******************* Task 7 *****************');
    console.log(document.querySelectorAll('.css-3').length);
}

func_7();

// TASK 8. Напишите функцию func - 8, которая будучи запущенной, присваивает всем элементам p.u - 1 атрибут title со значением test - data.

function func_8() {
    let p7 = document.querySelectorAll('.u-1');

    for (let i = 0; i < p7.length; i++) {
        p7[i].setAttribute('title', 'test-data');
    }
}

func_8();

// TASK 9. С помощью цикла получите кнопки.u - 9. Добавьте на них событие onclick которое запускает функцию func - 9. Функция возращает data атрибут элемента, по которому кликнули.
let btn9 = document.querySelectorAll('.u-9');

for (let i = 0; i < btn9.length; i++) {
    btn9[i].onclick = func_9;
}

function func_9() {
    console.log(this.getAttribute('data'));
}

// TASK 10. Напишите функцию func - 10, которая при клике на кнопке.u -10__button читает атрибут валюты data - currency и на основании этого выводит в p.u -10__out коэффициент данной валюты по отношению к доллару.Коэффициент возьмите приблизительно из интернета.Считается, что пользователь всегда вводит валюту в долларах.
let out = document.querySelector('.u-10__out');
let btn10 = document.querySelectorAll('.u-10__button');

for (let i = 0; i < btn10.length; i++) {
    btn10[i].onclick = func_10;
}

function func_10() {
    switch (this.getAttribute('data-currency')) {
        case 'euro':
            out.innerHTML = '0.9';
            break;
        case 'usd':
            out.innerHTML = '0';
            break;
        case 'rub':
            out.innerHTML = '64.4';
            break;
    }
}

// TASK 11.Напишите функцию func - 11, которая при клике на кнопке.u -11__button читает атрибут валюты data - currency и на основании этого выводит в p.u -11__out перевод валюты введенной пользователем в input.u -11__input в указанную валюту.Считается, что пользователь всегда вводит валюту в долларах. 
let btn11 = document.querySelectorAll('.u-11__button');
let out11 = document.querySelector('.out-11');
let input11 = +document.querySelector('.u-11_out').value;

for (let i = 0; i < btn11.length; i++) {
    btn11[i].onclick = func_11;
}

function func_11() {
    switch (this.getAttribute('data-currency')) {
        case 'euro':
            out11.innerHTML = input11 * 0.9;
            break;
        case 'usd':
            out11.innerHTML = input11 * 1;
            break;
        case 'rub':
            out11.innerHTML = Math.floor(input11 * 64.4);
            break;
    }
}

// TASK  12. Создайте функцию func - 12, которая создает через createElement элемент div, присваивает ему класс css - 4 и возвращает данный элемент

function func_12() {
    let div = document.createElement('div');

    div.classList.add('css-4');
    return div;
}
console.log('******************* Task 12 *****************')
console.log(func_12());

// TASK  13.Создайте функцию func - 13, которая создает элемент span.span - 13 с текстом 13 через createElement и вставляет его в p.u - 13(append).

function func_13() {
    let p = document.querySelector('.u-13');
    let span = document.createElement('span');

    span.classList.add('span-13');
    span.innerHTML = ' 13';
    p.append(span);
}

func_13();

// TASK  14. Создайте функцию func - 14, которая создает элемент span.span - 14 с текстом 14 через createElement и вставляет его в p.u - 14(prepend).

function func_14() {
    let span = document.createElement('span');
    let p = document.querySelector('.u-14');

    span.classList.add('span-14');
    span.innerHTML = '14 ';
    p.prepend(span);
}

func_14();

// TASK 15. Создайте функцию func - 15, которая создает элемент span.span - 15 с текстом 15 через createElement и вставляет его в p.u - 15(before)

function func_15() {
    let p = document.querySelector('.u-15');
    let span = document.createElement('span');

    span.classList.add('span-15');
    span.innerHTML = '15 ';
    p.before(span);
}

func_15();

// TASK    16. Создайте функцию funct - 16, которая создает элемент button.u - 16 c текстом Push.Повесьте на данный элемент событие onclick со стрелочной функцией, которая в консоль выводит текст u - 16. И после добавления события добавьте данный элемент на страницу в div.u -16__out.Проверьте работоспособность события.

function func_16() {
    let btn16 = document.createElement('button');

    btn16.innerHTML = 'Push';
    btn16.classList.add('u-16');
    btn16.onclick = () => {
        console.log('************************ Task 16 ******************');
        console.log(btn16.innerHTML);
    }
    document.querySelector('.u-16__out').append(btn16);
}

func_16();

// TASK 17. Создайте функцию, funct - 17, которая при запуске создаст элемент p c текстом 17 и заменит этим элементом div.u - 17

function func_17() {
    let p = document.createElement('p');

    p.innerHTML = '17';
    document.querySelector('.u-17').replaceWith(p);
}

func_17();

// TASK 18. C помощью цикла повесьте на div.out - 18 функцию func - 18. Данная функция дожна удалять элемент, на котором произошел клик из DOM.Функция должна возвращать удаленный элемент
let div18 = document.querySelectorAll('.out-18');

for (let i = 0; i < div18.length; i++) {
    div18[i].onclick = func_18;
}

function func_18() {
    console.log(this);
    this.remove();
}
// TASK   19. Создайте функцию func - 19, которая принимает параметр текст.Создает элемент li, вставляет в него указанный текст, и добавляет на страницу в ul.u - 19 в конец списка.

function func_19(text) {
    let li = document.createElement('li');

    li.innerHTML = text;
    document.querySelector('.u-19').append(li);
}

func_19('Hello');
// TASK 20. Доработайте предыдущее задание.Допишите функцию func - 20 которая может принимать текст от пользователя и вставлять в список ul.u - 20. Также добавьте checkbox - важное, при этом созданный li получает класс.css - 5.

function func_20(text) {
    let li = document.createElement('li');
    let input = document.querySelector('.checkbox');

    li.innerHTML = text;
    document.querySelector('.u-20').append(li);

    input.onclick = () => {
        if (input.checked) {
            li.classList.add('css-5');
        } else {
            li.classList.remove('css-5');
        }
    }
}

func_20('Hello');





