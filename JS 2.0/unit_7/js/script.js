// Task 1
let btn1 = document.querySelector('.btn-task-1');
function name1() {
    console.log('Yura');
}
btn1.onclick = name1;

// Task 2
document.querySelector('.btn-task-2').onclick = function () {
    function name2(name) {
        console.log(name);
    }
    name2('Yura');
}

// Task 3
function number1(num) {
    console.log(num * 10);
}
document.querySelector('.btn-task-3').onclick = function () {
    number1(10);
}

// Task 4
let btn4 = document.querySelector('.btn-task-4');

function f1() {
    btn4.style.backgroundColor = 'red';
}

btn4.onclick = function () {
    f1();
}

// Task 5
document.querySelector('.btn-task-5').onclick = () => {
    let output = document.querySelector('.output-task-5');

    function f5() {
        return 'Yura';
    }

    output.innerHTML += f5();
}

// Task 6
document.querySelector('.btn-task-6').onclick = () => {
    let output = document.querySelector('.output-task-6');

    function f6(a, b) {
        if (a > b) {
            return a
        } else if (b > a) {
            return b
        } else {
            return a
        }
    }
    output.innerHTML += f6(2, 2);
}


// Task 7
document.querySelector('.btn-task-7').onclick = () => {
    let output = document.querySelector('.output-task-7');

    function f7(year) {
        return 2019 - year;
    }

    output.innerHTML += f7(1997);
}

// Task 8
document.querySelector('.btn-task-8').onclick = () => {
    let output = document.querySelector('.output-task-8');

    function f8() {
        return Math.floor(1 + Math.random() * (10 + 1 - 1));
    }

    output.innerHTML += f8();
}

// Task 9
document.querySelector('.btn-task-9').onclick = () => {
    let output = document.querySelector('.output-task-9');

    function f9(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min));
    }

    output.innerHTML += f9(0, 5);
}

// Task 10
document.querySelector('.btn-task-10').onclick = () => {
    let output = document.querySelector('.output-task-10');

    function f10() {
        let r = Math.floor(0 + Math.random() * (255 + 1 - 0)),
            g = Math.floor(0 + Math.random() * (255 + 1 - 0)),
            b = Math.floor(0 + Math.random() * (255 + 1 - 0));

        output.innerHTML += `rgb(${r},${g},${b})`;
    }

    f10();
}

// Task 11
document.querySelector('.btn-task-11').onclick = () => {
    let output = document.querySelector('.output-task-11');

    function f11() {
        return 5;
    }

    function f11Two(a, b) {
        return a * b
    }
    output.innerHTML = f11Two(5, f11());
}

// Task 12
document.querySelector('.btn-task-12').onclick = () => {
    let output = document.querySelector('.output-task-12');
    let input = document.querySelector('.input-task-12');

    function toNum(inp) {
        return +inp.value;
    }

    output.innerHTML += toNum(input);
}

// Task 13
document.querySelector('.btn-task-13').onclick = () => {
    let output = document.querySelector('.output-task-13');
    let input = document.querySelector('.input-task-13');

    function emptyInput(inp) {
        let a = inp.value.trim();
        if (a == '') {
            output.innerHTML = 'false';
        } else {
            output.innerHTML = a;
        }
    }

    emptyInput(input);
}

// Task 14
document.querySelector('.btn-task-14').onclick = () => {
    let output = document.querySelector('.output-task-14');

    function f14(num) {
        if (num % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }

    output.innerHTML = f14(1);
}

// Task 15
document.querySelector('.output-task-15').onmousemove = () => {
    console.log('move');
}

// Task 16
document.querySelector('.output-task-16').onmouseenter = () => {
    console.log('enter');
}

// Task 17
document.querySelector('.output-task-17').onmouseleave = () => {
    console.log('leave');
}

// Task 18
document.querySelector('.output-task-18').onclick = function () {
    this.style.background = 'red';
}

// Task 19
document.querySelector('.output-task-19').onclick = () => {
    this.style.background = 'red';
}

// Task 20
let divs = document.querySelectorAll('.go');

divs.forEach(function (item) {
    item.onclick = function () {
        this.style.background = 'red';
    }
});