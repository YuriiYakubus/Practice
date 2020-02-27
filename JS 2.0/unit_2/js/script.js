// Task 1
let btn1 = document.querySelector('.btn-task-1');
btn1.onclick = () => {
    let a = 7;
    let b = 9;
    console.log(a * b);
}

// Task 2 
let btn2 = document.querySelector('.btn-task-2');
btn2.onclick = () => {
    let c = 7;
    let d = 9;
    document.querySelector('.task-2').innerHTML = c / d;
}

// Task 3
let btn3 = document.querySelector('.btn-task-3');
btn3.onclick = () => {
    let e = 3;
    let f = 5;
    document.querySelector('.task-3').innerHTML = e + f;
}

// Task 4
let btn4 = document.querySelector('.btn-task-4');
btn4.onclick = () => {
    let e1 = '3';
    let f1 = 5;
    document.querySelector('.task-4').innerHTML = e1 + f1;
}

// Task 5
let btn5 = document.querySelector('.btn-task-5');
btn5.onclick = () => {
    let e2 = 3;
    let f2 = 0;
    document.querySelector('.task-5').innerHTML = e2 / f2;
}

// Task 6
let btn6 = document.querySelector('.btn-task-6');
btn6.onclick = () => {
    let e3 = 3;
    let f3 = 'Hello';
    document.querySelector('.task-6').innerHTML = e3 + f3;
}

// Task 7
let btn7 = document.querySelector('.btn-task-7');
btn7.onclick = () => {
    let e4 = 3;
    let f4 = 'Hello';
    document.querySelector('.task-7').innerHTML = e4 * f4;
}

// Task 8
let btn8 = document.querySelector('.btn-task-8');
btn8.onclick = () => {
    let input = document.querySelector('.task-8');
    console.log(input.value);
}

// Task 9
let btn9 = document.querySelector('.btn-task-9');
btn9.onclick = () => {
    let input = document.querySelector('.task-9');
    document.querySelector('.output-task-9').innerHTML = input.value;
    input.value = '';
}

// Task 10
let btn10 = document.querySelector('.btn-task-10');
btn10.onclick = () => {
    let input = document.querySelector('.task-10');
    document.querySelector('.output-task-10').innerHTML = input.value * 10;
}

// Task 11
let btn11 = document.querySelector('.btn-task-11');
btn11.onclick = () => {
    let input = document.querySelector('.task-11');
    document.querySelector('.output-task-11').innerHTML = +input.value + 10;
}

// Task 12 
let btn12 = document.querySelector('.btn-task-12');
btn12.onclick = () => {
    let name = document.querySelector('.name');
    let surename = document.querySelector('.surename');
    console.log('Hello ' + name.value + ' ' + surename.value);
}

// Task 13 
let btn13 = document.querySelector('.btn-task-13');
btn13.onclick = () => {
    let num1 = document.querySelector('.num1');
    let num2 = document.querySelector('.num2');
    let output = document.querySelector('.output-task-13');
    output.innerHTML = +num1.value + +num2.value;
}

// Task 14 
let input2 = document.querySelector('.task-14');
let btn14 = document.querySelector('.btn-task-14');
btn14.onclick = () => {
    input2.value = 'Hello';
}

// Task 15
let y = document.querySelector('.task-15');
let btn15 = document.querySelector('.btn-task-15');
btn15.onclick = () => {
    y.style.border = '2px solid red';
}

// Task 16
let number1 = document.querySelector('.number1');
let number2 = document.querySelector('.number2');
let btn16 = document.querySelector('.btn-task-16');
btn16.onclick = () => {
    document.querySelector('.output-task-16').innerHTML = +number1.value + +number2.value;
}

// Task 17
let btn17 = document.querySelector('.btn-task-17');
btn17.onclick = () => {
    let input = document.querySelector('.task-17');
    t = input.value;
    t = parseInt(t);
    console.log(t);
}

// Task 18
let btn18 = document.querySelector('.btn-task-18');
btn18.onclick = () => {
    let input = document.querySelector('.task-18');
    t = input.value;
    t = parseFloat(t);
    console.log(t);
}

// Task 19
let num3 = document.querySelector('.num3');
let num4 = document.querySelector('.num4');
let btn19 = document.querySelector('.btn-task-19');
btn19.onclick = () => {
    document.querySelector('.task-19').innerHTML = +num3.value + +num4.value;
}

// Task 20
let name = document.querySelector('.name-task-20');
let surename = document.querySelector('.surename-task-20');
let age = document.querySelector('.age-task-20');
let activity = document.querySelector('.activity-task-20');
let btn20 = document.querySelector('.btn-task-20');
btn20.onclick = () => {
    console.log('Уважаеый ' + name.value + ', ' + surename.value + ', ваш возраст '
        + age.value + ' года, по професи вы ' + activity.value);
}
