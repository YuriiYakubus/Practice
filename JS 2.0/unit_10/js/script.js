// Task 1
let arr1 = ['hello', 3, true];

console.log('*******************  Task 1 ************************')
console.log(arr1);

// Task 2
let arr2 = ['hello', 3, true];

document.querySelector('.out').innerHTML = arr2;

// Task 3
let a3 = [2, 'hello', 17, 34, 'privet'];

document.querySelector('.out-3').innerHTML = 'array length is: ' + a3.length;

// Task 4
let a4 = [2, 'hello', 17, 34, 'privet'];

document.querySelector('.out-4').innerHTML = `0: ${a4[0]}<br> 3: ${a4[3]}<br> 8: ${a4[9]}`;

// Task 5
let a5 = [2, 'hello', 17, 34, 'privet'];

document.querySelector('.out-5').innerHTML = a5[0] + a5[2] + a5[3];

// Task 6
let arr6 = ['Юрий', 'Дева', 15, 'Сентября'];

document.querySelector('.out-6').innerHTML = arr6;

// Task 7
let b = ['one', 1, 2, 'two'];

b[4] = 'hi';
b[5] = 'foo';
b[6] = 'bar';

document.querySelector('.out-7').innerHTML = b;

// Task 8
let b8 = [];

b8[3] = 3.14;
b8[4] = 17;
b8[6] = 5;

document.querySelector('.out-8').innerHTML = b8;
console.log('*******************  Task 8 ************************');
console.log(b8);
console.log('Length: ' + b8.length);

// Task 9
let arr8 = [1, 2, 3, 4, 5, 6, 'hello', true, 9, 10];

document.querySelector('.out-9').innerHTML = '3: ' + arr8[3] + '<br>' + '7: ' + arr8[7];

console.log('*******************  Task 9 ************************');
console.log(arr8);

// Task 10
let arr10 = [];

arr10[1] = 'Hello';
arr10[5] = true;
arr10[10] = 10;

document.querySelector('.out-10').innerHTML = arr10 + '<br>Length: ' + arr10.length;

// Task 11
const c = [77, 88, 99, 66];

document.querySelector('.btn-11').onclick = change_11;

function change_11() {
    let temp;

    temp = c[0];
    c[0] = c[2];
    c[2] = temp;


    console.log('*******************  Task 11 ************************');
    console.log(c);
}

// Task 12
function change_12(arr12) {
    let temp;

    temp = arr12[0];
    arr12[0] = arr12[arr12.length - 1];
    arr12[arr12.length - 1] = temp;

    console.log('*******************  Task 12 ************************');
    console.log(arr12);
}

change_12([1, 2, 3, 4, 5, 6, 7]);

// Task 13
let d = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < d.length; i++) {
    document.querySelector('.out-13').innerHTML += d[i] + ' ';
}

// Task 14
let e = [1, 2, 3, 'hello', 66];

for (let i = 1; i <= e.length; i++) {
    document.querySelector('.out-14').innerHTML += e[e.length - i] + ' ';
}

// Task 15
let d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78]

for (let i = 0; i < d15.length; i++) {
    if (d15[i] > 0) {
        document.querySelector('.out-15').innerHTML += d15[i] + ' ';
    }
}

// Task 16
let a1 = [],
    a2 = [];
for (let i = 0; i < d15.length; i++) {
    if (i % 2 == 0) {
        a1[i] = d15[i];
    } else {
        a2[i] = d15[i];
    }
}

document.querySelector('.out-16').innerHTML = a1 + '<br>' + a2;


// Task 17
let e17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
let counter = 0;

for (let i = 0; i < e17.length; i++) {
    if (e17[i] == 0) {
        counter++
    }
}
document.querySelector('.out-17').innerHTML = 'Elements wich are equal to 0: ' + counter;

// Task 18
let max = e17[0];

for (let i = 0; i < e17.length; i++) {
    if (e17[i] > max) {
        max = e17[i];
    }
}

document.querySelector('.out-18').innerHTML = `Max array element: ${max}`;

// Task 19
let f = [-3, 0, 45, 22, 123, -485, 98, 34];
let max19 = f[0];
let counter19 = 0;

for (let i = 0; i < f.length; i++) {
    if (f[i] > max19) {
        max19 = f[i];
        counter19 = i;
    }
}

document.querySelector('.out-19').innerHTML = `Max array element index: ${counter19}`;

// Task 20
let sum20 = f[0];

for (let i = 1; i < f.length; i++) {
    sum20 += f[i];
}

document.querySelector('.out-20').innerHTML = `Sum of array elements equal: ${sum20}`;

