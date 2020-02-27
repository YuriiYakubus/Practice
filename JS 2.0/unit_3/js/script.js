// Task 1
let btn1 = document.querySelector('.btn-task-1');
btn1.onclick = () => {
    let a = 4;
    if (a == 4) {
        console.log('A равно 4');
    }
}

// Task 2
let btn2 = document.querySelector('.btn-task-2');
btn2.onclick = () => {
    let b = 8;
    let c = 10;
    if (b > c) {
        console.log(' b больше с');
    } else {
        console.log('c больше b');
    }
}

// Task 3

let btn3 = document.querySelector('.btn-task-3');
btn3.onclick = () => {
    let b = 10;
    let c = 10;
    if (b > c) {
        console.log(' b больше с');
    } else if (b == c) {
        console.log('Числа равны');
    } else {
        console.log('c больше b');
    }
}

// Task 4
let btn4 = document.querySelector('.btn-task-4');
btn4.onclick = () => {
    let num1 = document.querySelector('.num1');
    let num2 = document.querySelector('.num2');
    let output = document.querySelector('.output-task-4');
    if (num1.value > num2.value) {
        output.innerHTML = num1.value;
    } else if (num2.value > num1.value) {
        output.innerHTML = num2.value;
    } else {
        output.innerHTML = 'Числа равны';
    }
}

// Task 5
let btn5 = document.querySelector('.btn-task-5');
btn5.onclick = () => {
    let input = document.querySelector('.input-task-5');
    if (input.value < 2000) {
        document.querySelector('.output-task-5').innerHTML = 2019 - +input.value;
    } else if (input.value >= 2000) {
        console.log(2019 - +input.value);
    }
}

// Task 6
let btn6 = document.querySelector('.btn-task-6');
btn6.onclick = () => {
    let input = document.querySelector('.input-task-6');
    let output = document.querySelector('.output-task-6');
    if (input.value >= 1 && input.value <= 32) {
        output.innerHTML = 'Такая квартира есть';
    } else {
        output.innerHTML = ' Такой квартиры не существует';
    }
}

// Task 7
let btn7 = document.querySelector('.btn-task-7');
btn7.onclick = () => {
    let input = document.querySelector('.input-task-7');
    let output = document.querySelector('.output-task-7');
    if (input.value > 0) {
        output.innerHTML = 'Число больше чем 0';
    } else if (input.value < 0) {
        output.innerHTML = 'Число менше чем 0';
    } else {
        output.innerHTML = 'Число равно 0';
    }
}

// Task 8
let btn8 = document.querySelector('.btn-task-8');
btn8.onclick = () => {
    let input = document.querySelector('.input-task-8');
    let output = document.querySelector('.output-task-8');
    if (input.value % 2 == 0) {
        output.innerHTML = 'Число четное';
    } else if (input.value % 2 != 0) {
        output.innerHTML = 'Число не четное';
    }
}

// Task 9
let btn9 = document.querySelector('.btn-task-9');
btn9.onclick = () => {
    let input1 = document.querySelector('.input-task-9-1');
    let input2 = document.querySelector('.input-task-9-2');
    let output = document.querySelector('.output-task-9');
    if (input1.value != '' && input2.value != '') {
        output.innerHTML = input1.value ** input2.value;
    } else {
        output.innerHTML = 'You entered an empty string';
    }
}

// Task 10
let btn10 = document.querySelector('.btn-task-10');
btn10.onclick = () => {
    let input = document.querySelector('.input-task-10');
    let output = document.querySelector('.output-task-10');
    if (input.value == '' || input.value == ' ') {
        alert('You entered nothing');
    } else {
        alert('Hello ' + input.value);
    }
}

// Task 11
let btn11 = document.querySelector('.btn-task-11');
btn11.onclick = () => {
    let input = document.querySelector('.input-task-11');
    let a = input.value;
    a = a.trim();
    if (a == '') {
        alert('You entered nothing');
    } else {
        alert(a);
    }
}

// Task 12
let btn12 = document.querySelector('.btn-task-12');
btn12.onclick = () => {
    let input = document.querySelector('.input-task-12');
    switch (+input.value) {
        case 1:
            console.log('Один');
            break;
        case 2:
            console.log('Два');
            break;
        case 3:
            console.log('Три');
    }
}

// Task 13
let btn13 = document.querySelector('.btn-task-13');
btn13.onclick = () => {
    let input = document.querySelector('.input-task-13');
    let output = document.querySelector('.output-task-13');
    if (input.value >= 1 && input.value <= 5) {
        output.innerHTML = 'Александровская ул.';
    } else if (input.value >= 6 && input.value <= 11) {
        output.innerHTML = 'Алексеевская ул.';
    } else if (input.value >= 12 && input.value <= 20) {
        output.innerHTML = 'Алма-Атинская ул.';
    }
}

// Task 14
let btn14 = document.querySelector('.btn-task-14');
btn14.onclick = () => {
    let input = document.querySelector('.input-task-14');
    let output = document.querySelector('.output-task-14');
    if (input.value >= 0 && input.value <= 25) {
        output.innerHTML = 'Не обнаружено';
    } else if (input.value <= 50) {
        output.innerHTML = 'снижение числа лимфоцитов до 100 - вялость';
    } else if (input.value <= 150) {
        output.innerHTML = 'смертность 5%';
    } else if (input.value <= 350) {
        output.innerHTML = 'смертность 50% за 30 суток';
    } else if (input.value <= 600) {
        output.innerHTML = '90% смертность за 2 недели';
    }
}

// Task 15
let btn15 = document.querySelector('.btn-task-15');
btn15.onclick = () => {
    let x = 1;
    let y = 0;
    console.log(x && y);
    console.log(x || y);
}

// Task 16
let btn16 = document.querySelector('.btn-task-16');
btn16.onclick = () => {
    let input = document.querySelector('.input-task-16');
    let output = document.querySelector('.output-task-16');
    switch (+input.value) {
        case 500:
            output.innerHTML = '2525 тенге';
            break;
        case 1200:
            output.innerHTML = '5050 тенге';
            break;
        case 1600:
            output.innerHTML = '8275 тенге';
            break;
        case 1900:
            output.innerHTML = '9675 тенге';
            break;
        case 2000:
            output.innerHTML = '11075 тенге';
    }
}

// Task 17
let btn17 = document.querySelector('.btn-task-17');
btn17.onclick = () => {
    let input1 = document.querySelector('.input-task-17-1');
    let input2 = document.querySelector('.input-task-17-2');
    let output = document.querySelector('.output-task-17');
    if (input2.value == 'euro') {
        output.innerHTML = input1.value * 0.91;
    } else if (input2.value == 'rub') {
        output.innerHTML = input1.value * 66.03;
    } else if (input2.value == 'uah') {
        output.innerHTML = input1.value * 25.24;
    }
}

// Task 18
let btn18 = document.querySelector('.btn-task-18');
btn18.onclick = () => {
    let input1 = document.querySelector('.input-task-18-1');
    let input2 = document.querySelector('.input-task-18-2');
    let output = document.querySelector('.output-task-18');
    switch (input2.value) {
        case 'euro':
            output.innerHTML = input1.value * 0.91;
            break;
        case 'rub':
            output.innerHTML = input1.value * 66.03;
            break;
        case 'uah':
            output.innerHTML = input1.value * 25.24;
    }
}

// Task 19
let btn19 = document.querySelector('.btn-task-19');
btn19.onclick = () => {
    let input1 = document.querySelector('.input-task-19-1');
    let input2 = document.querySelector('.input-task-19-2');
    let input3 = document.querySelector('.input-task-19-3');
    let output = document.querySelector('.output-task-19');
    if (input3.value == '-') {
        output.innerHTML = +input1.value - +input2.value;
    } else if (input3.value == '+') {
        output.innerHTML = +input1.value + +input2.value;
    } else if (input3.value == '*') {
        output.innerHTML = +input1.value * +input2.value;
    } else if (input3.value == '/') {
        output.innerHTML = +input1.value / +input2.value;
    }
}

// Task 20
let btn20 = document.querySelector('.btn-task-20');
btn20.onclick = () => {
    let input1 = document.querySelector('.input-task-20-1');
    let input2 = document.querySelector('.input-task-20-2');
    let input3 = document.querySelector('.input-task-20-3');
    let output = document.querySelector('.output-task-20');
    switch (input3.value) {
        case '-':
            output.innerHTML = +input1.value - +input2.value;
            break;
        case '+':
            output.innerHTML = +input1.value + +input2.value;
            break;
        case '*':
            output.innerHTML = +input1.value * +input2.value;
            break;
        case '/':
            output.innerHTML = +input1.value / +input2.value;
    }
}