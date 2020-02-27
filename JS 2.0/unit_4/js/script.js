// Task 1
let btn1 = document.querySelector('.btn-task-1');
btn1.onclick = () => {
    alert('Task 1');
}

//Task 2 
let btn2 = document.querySelector('.input-task-2');
btn2.onclick = () => {
    alert('Task 2');
}

// Task 3
let p = document.querySelector('.paragraph-task-3');
p.onclick = () => {
    alert('Task 3')
}

// Task 4
let btn4 = document.querySelector('.input2-task-4');
btn4.onclick = () => {
    let check = document.querySelector('.input1-task-4');
    let output = document.querySelector('.output-task-4');
    if (check.checked) {
        output.innerHTML = check.checked;
    } else {
        output.innerHTML = check.checked;
    }
}

// Task 5
let btn5 = document.querySelector('.input2-task-5');
btn5.onclick = () => {
    let check = document.querySelector('.input1-task-5');
    let output = document.querySelector('.output-task-5');
    if (check.checked) {
        output.innerHTML = check.value;
    } else {
        output.innerHTML = check.checked;
    }
}

// Task 6
let btn6 = document.querySelector('.input2-task-6');
btn6.onclick = () => {
    let hidden = document.querySelector('.input1-task-6');
    alert(hidden.value);
}

// Task 7 
let btn7 = document.querySelector('.input2-task-7');
btn7.onclick = () => {
    let input = document.querySelector('.input1-task-7');
    alert(input.value);
    if (input.value.length < 6) {
        console.log('Your password is shorter than 6 characters');
    }
}

// Task 8 
let btn8 = document.querySelector('.btn-task-8');
btn8.onclick = () => {
    let div = document.querySelector('.task-8');
    div.innerHTML = '<input type="text" class="input-task-8"> <button class="btn2-task-8">Run</button>'
    let btn9 = document.querySelector('.btn2-task-8');
    btn9.onclick = () => {
        let input = document.querySelector('.input-task-8');
        alert(input.value);
    }
}

// Task 9
let btn9 = document.querySelector('.input2-task-9');
btn9.onclick = () => {
    let input = document.querySelector('.input1-task-9');
    if (input.checked) {
        alert(input.checked);
    } else {
        alert(input.checked);
    }
}

// Task 10
let btn10 = document.querySelector('.btn-task-10');
btn10.onclick = () => {
    let input = document.querySelector('.input-task-10');
    let div = document.querySelector('.task-10');
    div.style.backgroundColor = input.value;
}

// Task 11
let btn11 = document.querySelector('.input3-task-11');
btn11.onclick = () => {
    let input1 = document.querySelector('.input1-task-11');
    let input2 = document.querySelector('.input2-task-11');
    input2.value = input1.value;
}

// Task 12
let btn12 = document.querySelector('.input2-task-12');
btn12.onclick = () => {
    let input = document.querySelector('.input1-task-12');
    let output = document.querySelector('.output-task-12');
    output.innerHTML = input.value;
}

// Task 13
let input13 = document.querySelector('.input1-task-13');
let btn13 = document.querySelector('.input2-task-13');
btn13.onclick = () => {
    let output = document.querySelector('.output-task-13');
    output.innerHTML = input13.value;
}

input13.oninput = () => {
    let output = document.querySelector('.output2-task-13');
    output.innerHTML = input13.value;
}

// Task 14
let btn14 = document.querySelector('.input2-task-14');
btn14.onclick = () => {
    let input = document.querySelector('.input-task-14');
    let output = document.querySelector('.output-task-14');
    output.innerHTML = input.value;
}

// Task 15
let btn15 = document.querySelector('.input3-task-15');
btn15.onclick = () => {
    let textarea = document.querySelector('.input1-task-15');
    let input = document.querySelector('.input2-task-15');
    let output = document.querySelector('.output-task-15');
    textarea.value = input.value;
    output.innerHTML = input.value;
}

// Task 16
let btn16 = document.querySelector('.input2-task-16');
btn16.onclick = () => {
    let input = document.querySelector('#input1-task-16');
    let output = document.querySelector('.output-task-16');
    output.innerHTML = input.value;
}

// Task 17
let btn17 = document.querySelector('.input2-task-17');
btn17.onclick = () => {
    let input = document.querySelector('#input1-task-17');
    let output = document.querySelector('.output-task-17');
    output.innerHTML = input.options[input.selectedIndex].text;
}

// Task 18
let input = document.querySelector('#input-task-18');
input.onchange = () => {
    let output = document.querySelector('.output-task-18');
    output.innerHTML = input.value;
}

// Task 19
let btn19 = document.querySelector('.input3-task-19');
btn19.onclick = (event) => {
    event.preventDefault();
    let form = document.querySelector('.input-task-19');
    let input1 = document.querySelector('.input1-task-19');
    let input2 = document.querySelector('.input2-task-19');
    console.log(input1.value);
    console.log(input2.value);
}

// Task 20
let btn20 = document.querySelector('.input3-task-20');
btn20.onclick = (event) => {
    event.preventDefault();
    let form = document.querySelector('.input-task-20');
    console.log(form.elements.in1.value);
    console.log(form.elements.in2.value);
}
