// Task 1
let btn1 = document.querySelector('.task-1');
btn1.onclick = () => {
    console.log('Yura');
}

//Task 2 
let btn2 = document.querySelector('.task-2');
btn2.onclick = () => {
    console.log(09);
}

// Task 3 
let btn3 = document.querySelector('.task-3');
btn3.onclick = () => {
    console.log('Добро ' + 'пожаловать ' + ' на курс');
}

// Task 4
let btn4 = document.querySelector('.task-4');
btn4.onclick = () => {
    alert(2019);
}

// Task 5 
let btn5 = document.querySelector('.task-5');
btn5.onclick = () => {
    alert(2019 - 200);
}

// Task 6 
let btn6 = document.querySelector('.task-6');
btn6.onclick = () => {
    document.getElementById('one').innerHTML += 'Hello World';
}

// Task 7
let btn7 = document.querySelector('.task-7');
btn7.onclick = () => {
    document.getElementById('two').innerHTML += 12 * 12;
}

// Task 8 
let btn8 = document.querySelector('.task-8');
btn8.onclick = () => {
    document.querySelector('.one').innerHTML += 'Hello World';
}

// Task 9 
let btn9 = document.querySelector('.task-9');
btn9.onclick = () => {
    document.querySelector('span').innerHTML = 'world';
}

// Task 10
let btn10 = document.querySelector('.task-10');
btn10.onclick = () => {
    document.querySelector('.three').innerHTML = '<h3>Level three header</h3>';
}

// Task 11
let btn11 = document.querySelector('.task-11');
btn11.onclick = () => {
    document.querySelector('.four').innerHTML += '<h4>level 4 header</h4><p>random paragraph</p>';
}

// Task 12
let btn12 = document.querySelector('.task-12');
btn12.onclick = () => {
    let a = document.querySelector('.five');
    a.innerHTML = 3.1415;
}

// Task 13
let btn13 = document.querySelector('.task-13');
btn13.onclick = () => {
    let div7 = document.querySelector('.seven');
    div7.innerHTML = '<img src="https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png" alt="">';
}

// Task 14
let btn14 = document.querySelector('.task-14');
btn14.onclick = () => {
    let z1 = 6;
    let z2 = 3;
    document.querySelector('.multiplier').innerHTML = z1 * z2;
}

// Task 15
let btn15 = document.querySelector('.task-15');
btn15.onclick = () => {
    let y1 = 6;
    let y2 = 3;
    document.querySelector('.divider').innerHTML = y1 / y2;
}

// Task 16
let btn16 = document.querySelector('.task-16');
btn16.onclick = () => {
    let x1 = 'Hello';
    let x2 = 5;
    document.querySelector('.line-plus-number').innerHTML = x1 + x2;
}

// Task 17 
let btn17 = document.querySelector('.task-17');
btn17.onclick = () => {
    let d1 = document.querySelector('.test-1');
    console.log(d1);
}

// Task 18
let btn18 = document.querySelector('.task-18');
btn18.onclick = () => {
    let d2 = document.querySelector('.test-2');
    console.log(d2);
    d2 = 5;
    console.log(d2);
}

// Task 19
let btn19 = document.querySelector('.task-19');
btn19.onclick = () => {
    let divS3 = document.querySelector('.s3');
    console.log(divS3);
    divS3 = document.querySelector('.s4');
    console.log(divS3)
}

// Task 20 
let btn20 = document.querySelector('.task-20');
btn20.onclick = () => {
    document.querySelector('body').innerHTML = '';
}
