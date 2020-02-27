// Task 1
// Создайте функцию func_1, которая возращает строку от нуля до 100 в формате
// 0 1 2. .100(после 100 тоже есть пробел)
// задание сделать с помощью while

function func_1() {
    let i = 0;
    let str = '';

    while (i <= 100) {
        str += i + ' ';
        i++;
    }
    console.log('****************** Task 1 ******************');
    console.log(str);
}

func_1();

// Task 2
// Создайте функцию func_2, которая принимает от пользователя 2 параметра числа и возращает строку от первого числа до второго с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 5 6 7
// считаем что второе число всегда больше первого. Решаем с помощью while

function func_2(a, b) {
    let str = '';
    let i = a;

    while (i >= a && i <= b) {
        str += i + ' ';
        i++;
    }

    console.log('****************** Task 2 ******************');
    console.log(str);
}

func_2(2, 7);

// Task 3
// Создайте функцию func_3, которая принимает от пользователя 2 параметра числа и возращает строку от большего числа меньшего с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 7 6 5
// Решаем с помощью while

function func_3(a, b) {
    let str = ''
    let i = b;

    while (i <= b && i >= a) {
        str += i + ' ';
        i--;
    }

    console.log('****************** Task 3 ******************');
    console.log(str);
}

func_3(3, 10);

// Task 4
// Создайте функцию func_4, которая принимает от пользователя 3 параметра(число, число и шаг) и возращает строку от большего числа меньшего с заданным. Разделитель пробел.
// Пример: пользователь ввел 1 5 2
// 5 3 1
// Решаем с помощью while

function func_4(a, b, c) {
    let str = '';
    let i = b;

    while (i <= b && i >= a) {
        str += i + ' ';
        i -= c;
    }

    console.log('****************** Task 4 ******************');
    console.log(str);
}

func_4(1, 20, 2);

// Task5
// С помощью цикла
// while создайте функцию func_5, считает и возвращает сумму чисел от 0 до 20.

function func_5() {
    let sum = 0;
    let i = 0;

    while (i <= 20) {
        sum += i;
        i++;
    }

    console.log('****************** Task 5 ******************');
    console.log(`Sum from 0 to 20 equal: ${sum}`);
}

func_5();

// Task 6
// C помощью цикла
// while создайте функцию func_6, которая принимает 2 параметра, и если второй параметр больше первого, то возвращает сумму чисел от первого до второго включительно. Если нет - то false.Считаем, что пользователь может ввести только числа.

function func_6(a, b) {
    if (b > a) {
        let i = a;
        let sum = 0;

        while (i >= a && i <= b) {
            sum += i;
            i++;
        }
        console.log('****************** Task 6 ******************');
        console.log(`Sum from a to b equal: ${sum}`);
    } else {
        console.log('****************** Task 6 ******************');
        console.log(false);
    }
}

func_6(1, 10);

// Task 7
// C помощью цикла
// while создайте функцию func_7, которая принимает 2 параметра, и если второй параметр больше первого, то возвращает произведение чисел от первого до второго включительно.Если нет - то false.Считаем, что пользователь может ввести только числа.

function func_7(a, b) {
    if (b > a) {
        let i = b;
        let multiply = 1;

        while (i <= b && i >= a) {
            multiply *= i;
            i--;
        }
        console.log('****************** Task 7 ******************');
        console.log(`Multiplying from a to b equal: ${multiply}`);
    } else {
        console.log('****************** Task 7 ******************');
        console.log(false);
    }
}

func_7(1, 5);

// Task 8
// У пользователя есть 333 монеты в кармане.Каждый день, начиная с первого количество монет увеличиваетя в 2 раза. Напишите функцию func_8, которая вернет день, в который количество монет станет больше или равно 1 000 000.

function func_8() {
    let i = 1;
    let coins = 333;

    while (i > 0) {
        coins *= 2;
        if (coins >= 1000000) {
            break;
        }
        i++;
    }

    console.log('****************** Task 8 ******************');
    console.log('Days: ' + i);
}

func_8();

// Task 9
// Создайте функцию func_9, которая принимает 2 параметра и возращает строку от первого до второго введенного параграфа, где все четные числа заменены на символ нуля(0).

function func_9(a, b) {
    let i = a;
    str = '';
    while (i >= a && i <= b) {
        if (i % 2 == 0) {
            str += '0 ';
        } else {
            str += `${i} `;
        }
        i++;
    }
    console.log('****************** Task 9 ******************');
    console.log(str);
}

func_9(1, 10);

// Task 10
// Cоздайте функцию func_10, которая вернет строку(решаем через
//         while):
//     **
//     *
//     **
//     *
//     **
//     *

function func_10() {
    let j = 0;
    let out = '';

    while (j < 3) {
        let i = 2;
        while (i > 0) {
            let k = 0;
            while (k < i) {
                out += '*';
                k++;
            }
            out += '\n';
            i--;
        }
        j++;
    }
    console.log('****************** Task 10 ******************');
    console.log(out);
}

func_10();

// Task 11
// Создайте функцию func_11, которая вернет следующую строку: 10 1 9 2 8 3. .0 10. Решаем через
// while.

function func_11() {
    let i = 1;
    let out = '';
    let k = 10;

    while (k > 0) {
        out += `${k} ${i} `;
        k--;
        i++;
    }
    console.log('****************** Task 11 ******************');
    console.log(out);
}

func_11();

// Task 12
// Прочитайте о цикле <a href = "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while"
// target = "_blank" >do while</a>. Напишите код:
// let a = 0;
// do
//     console.log('do while work');
// while (a < 0);

// let b = 0;
// while (b < 0) {
//     console.log('while work');
// }

// изучите вывод.Как видите, цикл do while срабатывает минимум один раз в любом случае.Т.е.вначале идет срабатывание, а потом проверка.

function func_12() {
    let a = 0;
    do
        console.log('do while work');
    while (a < 0);

    let b = 0;
    while (b < 0) {
        console.log('while work');
    }
}

// Task 13
// Напишите функцию func_13 которая возвращает строку, от 100 до 0 включительно.Используем цикл do while.

function func_13() {
    let i = 100;
    let str = '';

    do {
        str += `${i} `;
        i--;
    } while (i >= 0)

    console.log('****************** Task 13 ******************');
    console.log(str);
}

func_13();

// Task 14
// Стаханов в первый день своей работы добыл 5 тонн угля.Во второй - на 30 % больше от предыдущего дня.Напишите функцию func_14 которая вернет день, когда Стаханова побьют все, кто с ним работает, этот день наступит тогда, когда Стаханов в день добудет 132 тонны угля.Используйте для решения do while.

function func_14() {
    let i = 1;
    let tons = 5;

    do {
        tons += tons * 0.3;
        i++;
    } while (tons <= 132)

    console.log('****************** Task 14 ******************');
    console.log(`Days: ${i}`);
}

func_14();

// Task 15
// Гермиона Грейнджер в первый день наварила 1.1 литра зелья.Во второй день на 0.3 литра зелья больше.Напишите функцию func_15, которая вернет день, когда в Хоргвардсе не останется пустых котлов(суммарный объем котлов в замке 568 литров).Обратите внимание, что вам нужно найти суммарных объем сваренного зелья, а не дневной объем.Используем do while.

function func_15() {
    let i = 1;
    let liters = 1.1;

    do {
        liters += liters * 0.3;
        i++
    } while (liters <= 568)

    console.log('****************** Task 15 ******************');
    console.log(`Liters: ${liters}`);
}

func_15();

// Task 16
// На странице есть три параграфа p.task-16. Используя цикл do ..while посчитайте количество параграфов p.task-16 и если число четное - верните значение, если нет - верните false.Код напишите в функции func_16.

function func_16() {
    let count = 0;
    let p = document.querySelectorAll('.task-16');

    do {
        count++
    } while (count < p.length)

    if (count % 2 == 0) {
        console.log('****************** Task 16 ******************');
        console.log(count);
    } else {
        console.log('****************** Task 16 ******************');
        console.log(false);
    }
}

func_16();

// Task 17
// На странице есть три параграфа p.task-16. Используя цикл do ..while выведите в первый p.task-16 - число 1, во второй 2 и т.д.Решение оформите в виде функции func_17.

function func_17() {
    let i = 0;
    p = document.querySelectorAll('.task-16');

    do {
        p[i].innerHTML = `${i + 1}`;
        i++;
    } while (i < p.length)
}

func_17();


// Task 18
// На странице есть три параграфа p.task-18. Используя цикл do ..while выведите в первый p.task-18 - число равное количеству параграфов p.task - 18, во второй на единицу меньше и т.д.Решение оформите в виде функции func_18.

function func_18() {
    let i = 0;
    p = document.querySelectorAll('.task-18');

    do {
        p[i].innerHTML = `${p.length - i}`;
        i++;
    } while (i < p.length)
}

func_18();

// Task 19
// Напишите функцию func_19, которая возвращает строку вида: 1 * 3 * 5...до 20. Решите с помощью do while.

function func_19() {
    let i = 1;
    let str = '';

    do {
        if (i % 2 == 0) {
            str += '* ';
        } else {
            str += `${i} `;
        }
        i++;
    } while (i <= 20)

    console.log('****************** Task 19 ******************');
    console.log(str);
}

func_19();

// Task 20
// Напишите функцию func_20, которая возвращает строку вида:
//     1 * * *
//     * 1 * *
//     * * 1 *
//     * * * 1

function func_20() {
    let str = '';

    for (let i = 0; i < 5; i++) {
        for (let k = 0; k < 5; k++) {
            if (k == i) {
                str += '1 ';
            } else {
                str += '* ';
            }
        }
        str += '\n';
    }

    console.log('****************** Task 20 ******************');
    console.log(str);

}

func_20();