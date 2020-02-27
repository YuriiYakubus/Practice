// Task 1
document.querySelector('.btn-task-1').onclick = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// Task 2
let output2 = '';
document.querySelector('.btn-task-2').onclick = () => {
    for (let i = 1; i <= 10; i++) {
        output2 += i + ' ';
    }
    document.querySelector('.output-task-2').innerHTML = output2;
}

// Task 3
let output3 = '';
document.querySelector('.btn-task-3').onclick = () => {
    for (let i = 10; i >= 0; i--) {
        output3 += i + ' ';
    }
    document.querySelector('.output-task-3').innerHTML = output3;
}

// Task 4
let output4 = '';
document.querySelector('.btn-task-4').onclick = () => {
    for (let i = 0; i <= 10; i += 2) {
        output4 += i + ' ';
    }
    document.querySelector('.output-task-4').innerHTML = output4;
}

// Task 5
let output5 = '';
document.querySelector('.btn-task-5').onclick = () => {
    for (let i = 21; i >= 0; i -= 3) {
        output5 += i + ' ';
    }
    document.querySelector('.output-task-5').innerHTML = output5;
}

// Task 6
let output6 = '';
document.querySelector('.btn-task-6').onclick = () => {
    for (let i = 0; i < 6; i++) {
        output6 += '* * * * * *<br>';
    }
    document.querySelector('.output-task-6').innerHTML = output6;
}

// Task 7
let output7 = '';
document.querySelector('.btn-task-7').onclick = () => {
    let input = document.querySelector('.input-task-7');
    for (let i = input.value; i >= 0; i--) {
        output7 += i + ' ';
    }
    document.querySelector('.output-task-7').innerHTML = output7;
}

// Task 8
let output8 = '';
document.querySelector('.btn-task-8').onclick = () => {
    let input1 = document.querySelector('.input1-task-8');
    let input2 = document.querySelector('.input2-task-8');
    for (let i = input1.value; i <= input2.value; i++) {
        output8 += i + ' ';
    }
    document.querySelector('.output-task-8').innerHTML = output8;
}

// Task 9
let output9 = '';
document.querySelector('.btn-task-9').onclick = () => {
    let input1 = document.querySelector('.input1-task-9');
    let input2 = document.querySelector('.input2-task-9');
    if (input2.value > input1.value) {
        for (let i = input1.value; i <= input2.value; i++) {
            output8 += i + ' ';
        }
        document.querySelector('.output-task-9').innerHTML = output8;
    } else {
        alert('First number biger than second');
    }
}

// Task 10
let output10 = '';
document.querySelector('.btn-task-10').onclick = () => {
    for (let i = 1901; i <= 1950; i++) {
        if (i % 2 == 0) {
            output10 += i + ' ';
        }
        document.querySelector('.output-task-10').innerHTML = output10;
    }
}

// Task 11
let output11 = 0;
document.querySelector('.btn-task-11').onclick = () => {
    let divs = document.querySelectorAll('.one-task-11');
    for (let i = 0; i < divs.length; i++) {
        output11++;
    }
    document.querySelector('.output-task-11').innerHTML = output11;
}

// Task 12
document.querySelector('.btn-task-12').onclick = () => {
    let divs = document.querySelectorAll('.one-task-12');
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = 'orange';
    }
}

// Task 13
document.querySelector('.btn-task-13').onclick = () => {
    let divs = document.querySelectorAll('.one-task-13');
    for (let i = 0; i < divs.length; i++) {
        console.log(divs[i].innerHTML);
    }
}

// Task 14
document.querySelector('.btn-task-14').onclick = () => {
    let input = document.querySelectorAll('.input-task-14');
    for (let i = 0; i < input.length; i++) {
        input[i].placeholder = 'Введите данные';
    }
}

// Task 15
let counter = 0;
document.querySelector('.btn-task-15').onclick = () => {
    let input = document.querySelectorAll('.input-task-15');
    for (let i = 0; i < input.length; i++) {
        counter++;
    }
    console.log(counter);
}

// Task 16
let output16 = '';
document.querySelector('.btn-task-16').onclick = () => {
    let input = document.querySelectorAll('.input-task-16');
    for (let i = 0; i < input.length; i++) {
        if (input[i].checked)
            output16 = input[i].value;
    }
    document.querySelector('.output-task-16').innerHTML = output16;
}

// Task 17
document.querySelector('.btn-task-17').onclick = () => {
    let input = document.querySelectorAll('.input-task-16');
    input[0].checked = true;
}

// Task 18
document.querySelector('.btn-task-18').onclick = () => {
    let input = document.querySelectorAll('.input-task-18');
    for (let i = 0; i < input.length; i++) {
        input[i].value = i;
    }
}

// Task 19 Доробити
let output19;
document.querySelector('.btn-task-19').onclick = () => {
    let input = document.querySelectorAll('.input-task-19');
    for (let i = 0; i < input.length; i++) {
        if (input[i].checked == true && input[i].value == 6) {
            output19 = true;
        } else {
            output19 = false;
        }
    }
    document.querySelector('.output-task-19').innerHTML = output19;
}

// Task 20
let input = document.querySelectorAll('.input-task-20');
for (let i = 0; i < input.length; i++) {
    input[i].oninput = () => {
        console.log('был изменен input');
    }
}