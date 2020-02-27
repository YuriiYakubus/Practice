//Task 1.
// Создайте массив a. Выведите его на страницу. Элементы внутри вложенных массивов разделяйте пробелом, между
// вложенными массивами - перенос строки!
const a = [
    [1, 2, 3],
    ['a', 'b', 'c'],
    [4, 5, 6],
    ['d', 'e', 'f'],
    [7, 8, 9],
];

document.querySelector('.btn-1').onclick = () => {
    let result = '';

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            result += a[i][j] + ' ';
        }
        result += '<br>';
    }

    document.querySelector('.out-1').innerHTML = result;
}

// Task 2.
// Выведите на страницу символ 3 из массива a.
document.querySelector('.btn-2').onclick = () => {
    document.querySelector('.out-2').innerHTML = a[0][2];
}

// Task 3.
// Выведите на страницу символ e из массива a.
document.querySelector('.btn-3').onclick = () => {
    document.querySelector('.out-3').innerHTML = a[3][1];
}

// Task 4.
// Выведите на страницу содержимое третьего вложенного массива в массиве a.
document.querySelector('.btn-4').onclick = () => {
    document.querySelector('.out-4').innerHTML = a[2];
}

// Task 5.
// Выведите на страницу только первые элементы вложенных массивов массива a.
document.querySelector('.btn-5').onclick = () => {
    let result = '';

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < 1; j++) {
            result += a[i][j] + ' ';
        }
        result += '<br>';
    }
    document.querySelector('.out-5').innerHTML = result;
}

// Task 6.
// Выведите на страницу только четные вложенные массивы массива a.
document.querySelector('.btn-6').onclick = () => {
    let result = '';

    for (let i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            result += a[i] + '<br>';
        }
    }
    document.querySelector('.out-6').innerHTML = result;
}

// Task 7.
// Выведите на страницу только числа из массива a.
document.querySelector('.btn-7').onclick = () => {
    let result = '';

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            if (!isNaN(a[i][j])) {
                result += a[i][j] + ' ';
            }
        }
        result += '<br>';
    }
    document.querySelector('.out-7').innerHTML = result;
}

// Task 8.
// Выведите на страницу длины вложенных массивов в массив a.
document.querySelector('.btn-8').onclick = () => {
    let result = '';

    for (let i = 0; i < a.length; i++) {
        result += 'Inner array ' + i + ' length : ' + a[i].length + '<br>';
    }

    document.querySelector('.out-8').innerHTML = result;
}

// Task 9.
// Выведите на страницу элементы массива a в обратном порядке, т.е.
document.querySelector('.btn-9').onclick = () => {
    let result = '';

    for (let i = a.length - 1; i > 0; i--) {
        for (let j = a[i].length - 1; j >= 0; j--) {
            result += a[i][j] + ' ';
        }
    }

    document.querySelector('.out-9').innerHTML = result;
}

// Task 10.
// Выведите на страницу элементы массива a, причем вложенные массивы должны выводиться в обратном порядке:
document.querySelector('.btn-10').onclick = () => {
    let result = '';

    for (let i = 0; i < a.length; i++) {
        for (let j = a[i].length - 1; j >= 0; j--) {
            result += a[i][j] + ' ';
        }
        result += '<br>';
    }

    document.querySelector('.out-10').innerHTML = result;
}

// Task 11.
// Создайте массив шахматную доску. Белые - 0, черные - 1. Выведите на страницу.
let chessDesck = [
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
];

document.querySelector('.btn-11').onclick = () => {
    let result = '';

    for (let i = 0; i < chessDesck.length; i++) {
        for (let j = 0; j < chessDesck[i].length; j++) {
            result += chessDesck[i][j] + ' ';
        }
        result += '<br>';
    }
    document.querySelector('.out-11').innerHTML = result;
}

// Task 12.
// Создайте массив шахматную доску. Белые - 0, черные - 1. Напишите функцию, которая выводит данный массив в виде шахматной доски - блоки div в нужном порядке, закранные цветом.

document.querySelector('.btn-12').onclick = () => {
    let result = '';

    for (let i = 0; i < chessDesck.length; i++) {
        for (let j = 0; j < chessDesck[i].length; j++) {
            if (chessDesck[i][j] === 1) {
                result += '<div class="black"></div>';
            } else {
                result += '<div class="white"></div>';
            }
        }
        result += '<br>';
    }
    document.querySelector('.out-12').innerHTML = result;
}

// Task 13.
// Создайте массив, который подходит под следующие условия:
// b[0][1] == 4;
// b[3][2] == 5
let b = [
    [, 4],
    [],
    [],
    [, , 5],
];

// Task 14.
// Создайте массив, который подходит под следующие условия:
// c[0][1] == 4;
// c[2] == 5
let c = [
    [, 4],
    [],
    [5],
];

// Task 15.
// Создайте массив, который подходит под следующие условия:
// d[0][1] == 4;
// d[2][3] == 5
// d[6] = [4,5]
let d = [
    [, 4],
    [],
    [, , , 5],
    [],
    [],
    [],
    [4, 5],
];

// Task 16.
// Создайте массив, который подходит под следующие условия:
// e[0][1] == 4;
// e[2][3] == 5
// e[6][0][1] = 6;
let e = [
    [, 4],
    [],
    [, , , 5],
    [],
    [],
    [],
    [
        [
            [],
            [6],
        ]
    ]
];

// Task 17.
// Создайте массив, который подходит под следующие условия:
// f[0][1][3] == 4;
// f[2][1][1] == 5
// f[6][0][1] = 6;
let f = [
    [
        [],
        [
            [],
            [],
            [],
            [4]
        ]
    ],
    [],
    [
        [],
        [
            [],
            [5]
        ]
    ],
    [],
    [],
    [],
    [
        [
            [],
            [6],
        ]
    ]
];

// Task 18.
// Создайте массив, который подходит под следующие условия:
// g[0][1][3] == 4;
// g[2][1][3] == 5
// g[6][0][1] = 6;
// g[3] == g[5];

let g = [
    [
        [],
        [
            [],
            [],
            [],
            [4],
        ],
    ],
    [],
    [
        [],
        [
            [],
            [],
            [],
            [5],
        ],
    ],
    [1],
    [],
    [1],
    [
        [
            [],
            [6],
        ],
    ],
];

// Task 19.
// Выведите на страницу сумму элементов массива a (только чисел).
document.querySelector('.btn-19').onclick = () => {
    let result = 0;

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            if (!isNaN(a[i][j])) {
                result += a[i][j];
            }
        }

    }
    document.querySelector('.out-19').innerHTML = result;
}

// Task 20.
// Создайте массив, который эмулирует доску для крестиков - ноликов, напишите все возможные выиграшные
// комбинации, т.е. a[0][0], a[0][1], a[0][2] - занята первая линия, и т.д.
document.querySelector('.btn-20').onclick = () => {
    let ticTacToeDesk = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    let out = document.querySelector('.out-20');


    for (let i = 0; i < ticTacToeDesk.length; i++) {
        for (let j = 0; j < ticTacToeDesk[i].length; j++) {
            ticTacToeDesk[i][j] = prompt('Enter ' + '[' + i + ']' + '[' + j + ']');
            console.log(ticTacToeDesk[i][j]);
        }
    }

    if (ticTacToeDesk[0][0] === '1' && ticTacToeDesk[0][1] === '1' && ticTacToeDesk[0][2] === '1') {
        out.innerHTML = 'Занята первая линия';
    } else if (ticTacToeDesk[1][0] === '1' && ticTacToeDesk[1][1] === '1' && ticTacToeDesk[1][2] === '1') {
        out.innerHTML = 'Занята вторая линия';
    } else if (ticTacToeDesk[2][0] === '1' && ticTacToeDesk[2][1] === '1' && ticTacToeDesk[2][2] === '1') {
        out.innerHTML = 'Занята третья линия';
    } else if (ticTacToeDesk[0][0] === '1' && ticTacToeDesk[1][0] === '1' && ticTacToeDesk[2][0] === '1') {
        out.innerHTML = 'Занят первый столбец';
    } else if (ticTacToeDesk[0][1] === '1' && ticTacToeDesk[1][1] === '1' && ticTacToeDesk[2][1] === '1') {
        out.innerHTML = 'Занят второй столбец';
    } else if (ticTacToeDesk[0][2] === '1' && ticTacToeDesk[1][2] === '1' && ticTacToeDesk[2][2] === '1') {
        out.innerHTML = 'Занят третий столбец';
    } else if (ticTacToeDesk[0][0] === '1' && ticTacToeDesk[1][1] === '1' && ticTacToeDesk[2][2] === '1') {
        out.innerHTML = 'Занята права диагональ';
    } else if (ticTacToeDesk[0][2] === '1' && ticTacToeDesk[1][1] === '1' && ticTacToeDesk[2][0] === '1') {
        out.innerHTML = 'Занята левая диагональ';
    }
    console.log(ticTacToeDesk)
}