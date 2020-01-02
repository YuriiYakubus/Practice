// Task 1
//Создайте button - при нажатии на него выводите alert с номером задачи.

document.querySelector('.btn-1').onclick = () => {
    alert('Task 1');
}

// Task 2
// Создайте input type=button - при нажатии на него выводите alert с номером задачи.

document.querySelector('.input-2').onclick = () => {
    alert('Task 2');
}

// Task 3
// Создайте p - при нажатии на него выводите alert с номером задачи.

document.querySelector('.p-3').onclick = () => {
    alert('Task 3');
}

// Task 4
// Создайте input(checkbox) и button - при нажатии на него выводите true если checkbox выбран и false если нет.

document.querySelector('.btn-4').onclick = () => {
    let input4 = document.querySelector('.input-4');
    let out = document.querySelector('.out-4');

    if (input4.checked) {
        out.innerHTML = input4.checked;
    } else {
        out.innerHTML = input4.checked;
    }
}

// Task 5
// Создайте input(checkbox) и button. Добавьте value для checkbox. При нажатии на него выводите value если checkbox выбран и false если нет.

document.querySelector('.btn-5').onclick = function () {
    let input = document.querySelector('.input-5');
    let out = document.querySelector('.out-5');

    if (input.checked) {
        out.innerHTML = input.value;
    } else {
        out.innerHTML = false;
    }
}

// Task 6
// Создайте input(hidden) и button - при нажатии на него выводите alert с value прописанным в input.

document.querySelector('.btn-6').onclick = () => {
    let input = document.querySelector('.input-6');

    alert(input.value);
}

// Task 7
// Создайте input(password) и button - при нажатии на него выводите alert с value прописанным в input. Выводите в консоль предупреждение, если длина пароля меньше 6 символов.

document.querySelector('.btn-7').onclick = () => {
    let input = document.querySelector('.input-7');

    if (input.value.length < 6) {
        console.log('Password length is lesser than 6 symbols');
    } else {
        alert(input.value);
    }
}

// Task 8
// Создайте div и кнопку. При нажатии кнопки создавайте внутри div элемент input и кнопку (innerHTML). Добавьте на созданную кнопку событие - при клике выводить alert c содержимым созданного input.

document.querySelector('.btn-8').onclick = () => {
    let out = document.querySelector('.out-8');

    out.innerHTML = `<div><input type='text' class='innerInput'><button class='btn-8_2'>Submit</button></div>`;

    document.querySelector('.btn-8_2').onclick = () => {
        let input = document.querySelector('.innerInput').value;

        alert(input);
    }
}

// Task 9
// Создайте один input(radio) . и button - при нажатии на button выводите alert с value прописанным в активном (если он активен, если нет - то alert - false) radiobutton.

document.querySelector('.btn-9').onclick = () => {
    let input = document.querySelector('.i-9');

    if (input.checked) {
        alert(input.value);
    } else {
        alert(false);
    }
}

// Task 10
// Создайте input(color) и button - при нажатии на него окрашивайте div выбранным цветом.

document.querySelector('.btn-10').onclick = () => {
    let input = document.querySelector('.i-10').value;
    document.querySelector('.out-10').style.backgroundColor = input;
}

// Task 11
// Создайте input(color) - два элемента и button - при нажатии на кнопку присвойте цвет из первого input в value второго.

document.querySelector('.btn-11').onclick = () => {
    let input1 = document.querySelector('.i-11_1');
    let input2 = document.querySelector('.i-11_2');

    input2.value = input1.value;
}

// Task 12
// Создайте input(date) и button - при нажатии на кнопку выводите на страницу выбранную дату.

document.querySelector('.btn-12').onclick = () => {
    document.querySelector('.out-12').innerHTML = document.querySelector('.i-12').value;
}

// Task 13
// Создайте input(range) и button - при нажатии на кнопку выводите на страницу значение из input. Добавьте событие oninput на range и тоже выводите значение на страницу.

document.querySelector('.btn-13').onclick = () => {
    document.querySelector('.out-13').innerHTML = document.querySelector('.i-13').value;
}

// Task 14
// Создайте text-area и button - при нажатии на кнопку выводите на страницу значение из textarea.

document.querySelector('.btn-14').onclick = () => {
    document.querySelector('.out-14').innerHTML = document.querySelector('.i-14').value;
}

// Task 15
// Создайте text-area, input и button - при нажатии на кнопку выводите текс из input в textarea и на страницу.

document.querySelector('.btn-15').onclick = () => {
    document.querySelector('.i-15_1').innerHTML = document.querySelector('.i-15_2').value;
}

// Task 16
// Создайте select и button - при нажатии на кнопку выводите на страницу value выбраннов в select option.

document.querySelector('.btn-16').onclick = () => {
    document.querySelector('.out-16').innerHTML = document.querySelector('.s-16').value;
}

// Task 17

// Task 18
// Создайте select добавьте на него событие onchange. По данному событию выводите value выбранного option на страницу.
let select = document.querySelector('.s-18');
select.onchange = () => {
    document.querySelector('.out-18').innerHTML = select.value;
}

// Task 19
// Создайте форму. В ней input(text) и input(password) - и кнопку. По нажатию кнопки выводите значение text и password в консоль!.

document.querySelector('.btn-19').onclick = (event) => {
    event.preventDefault();
    console.log(document.querySelector('.i-19_1').value);
    console.log(document.querySelector('.i-19_2').value);
}

// Task 20
// Создайте форму. В ней input(text) и input(password) - и кнопку. По нажатию кнопки выводите значение text и password в консоль! Используйте form.elements (читать)

document.querySelector('.btn-20').onclick = (event) => {
    event.preventDefault();
    let form = document.querySelector('.f-20');
    console.log(form.elements.in1.value);
    console.log(form.elements.in2.value);
}
