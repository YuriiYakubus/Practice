// Task 1
document.querySelector('.btn-task-1').onclick = () => {
    let output = document.querySelector('.output-task-1');

    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 3; k++) {
            output.innerHTML += '*';
        }
        output.innerHTML += ' ';
    }
}

// Task 2
document.querySelector('.btn-task-2').onclick = () => {
    let output = document.querySelector('.output-task-2');

    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 5; k++) {
            output.innerHTML += '*';
        }
        output.innerHTML += '<br>';
    }
}

// Task 3
document.querySelector('.btn-task-3').onclick = () => {
    let output = document.querySelector('.output-task-3');

    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 6; k++) {
            if (k % 2 == 0) {
                output.innerHTML += '1';
            } else {
                output.innerHTML += '0';
            }
        }
        output.innerHTML += '<br>';
    }
}

// Task 4
document.querySelector('.btn-task-4').onclick = () => {
    let output = document.querySelector('.output-task-4');

    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 6; k++) {
            if ((k + 1) % 3 == 0) {
                output.innerHTML += 'Х';
            } else if (k % 2 == 0) {
                output.innerHTML += '1';
            } else if (k % 2 != 0) {
                output.innerHTML += '0';
            }
        }
        output.innerHTML += '<br>';
    }
}

// Task 5
document.querySelector('.btn-task-5').onclick = () => {
    let output = document.querySelector('.output-task-5');

    for (let i = 0; i < 3; i++) {
        for (let k = 0; k <= i; k++) {
            output.innerHTML += '*';
        }
        output.innerHTML += '<br>';
    }
}

// Task 6
document.querySelector('.btn-task-6').onclick = () => {
    let output = document.querySelector('.output-task-6');

    for (let i = 5; i > 0; i--) {
        for (let k = i; k > 0; k--) {
            output.innerHTML += '*';
        }
        output.innerHTML += '<br>';
    }
}

// Task 7
document.querySelector('.btn-task-7').onclick = () => {
    let output = document.querySelector('.output-task-7');

    for (let i = 3; i > 0; i--) {
        for (let k = 1; k < i; k++) {
            output.innerHTML += '&nbsp';
        }
        output.innerHTML += '*****<br>';
    }
}

// Task 8
document.querySelector('.btn-task-8').onclick = () => {
    let output = document.querySelector('.output-task-8');
    let n = 3;

    for (let i = 1; i <= n; i++) {
        for (let k = 1; k <= i; k++) {
            output.innerHTML += '*';
        }
        output.innerHTML += '<br>';
    }

    for (let i = n - 1; i >= 0; i--) {
        for (let k = 1; k <= i; k++) {
            output.innerHTML += '*';
        }
        output.innerHTML += '<br>';
    }
}


// Task 9
document.querySelector('.btn-task-9').onclick = () => {
    let output = document.querySelector('.output-task-9');
    let n = 6;

    for (let i = 1; i <= n; i++) {
        for (k = 1; k <= n; k++) {
            if (i == 1 || i == n || k == 1 || k == n) {
                output.innerHTML += '*';
            } else {
                output.innerHTML += '&nbsp';
            }
        }
        output.innerHTML += '<br>';
    }

}

// Task 10
document.querySelector('.btn-task-10').onclick = () => {
    let output = document.querySelector('.output-task-10');
    let input = document.querySelector('.input-task-10');
    let n = 6;

    for (let i = 1; i <= n; i++) {
        for (k = 1; k <= n; k++) {
            if (i == 1 || i == n || k == 1 || k == n) {
                output.innerHTML += input.value;
            } else {
                output.innerHTML += '&nbsp';
            }
        }
        output.innerHTML += '<br>';
    }
}

// Task 11
document.querySelector('.btn-task-11').onclick = () => {
    let output = document.querySelector('.output-task-11');

    for (let i = 6; i <= 7; i++) {
        for (let k = 1; k <= 10; k++) {
            output.innerHTML += `${i} * ${k} = ${i * k} <br>`;
        }
        output.innerHTML += `<br>`;
    }
}

// Task 12
document.querySelector('.btn-task-12').onclick = () => {
    let output = document.querySelector('.output-task-12');

    for (let i = 1; i <= 5; i++) {
        for (let k = 1; k <= i; k++) {
            output.innerHTML += `${k} `;
        }
        output.innerHTML += '<br>';
    }
}

// Task 13
document.querySelector('.btn-task-13').onclick = () => {
    let output = document.querySelector('.output-task-13');

    for (let i = 0; i < 5; i++) {
        for (let k = 1; k <= 10; k++) {
            if (k == 10) {
                output.innerHTML += `${(i + 1) * k}`;
            } else {
                output.innerHTML += `${i}${k} `;
            }
        }
        output.innerHTML += '<br>';
    }
}

// Task 14
document.querySelector('.btn-task-14').onclick = () => {
    let output = document.querySelector('.output-task-14');

    for (let i = 5; i > 0; i--) {
        for (let k = i; k > 0; k--) {
            output.innerHTML += `${k} `;
        }
        output.innerHTML += '<br>';
    }
}

// Task 15
document.querySelector('.btn-task-15').onclick = () => {
    let output = document.querySelector('.output-task-15');

    for (let i = 1; i <= 5; i++) {
        for (let k = 5; k > 0; k--) {
            if (k <= i) {
                output.innerHTML += k + ' ';
            } else {
                output.innerHTML += 'X ';
            }
        }
        output.innerHTML += '<br>';
    }
}

// Task 16
document.querySelector('.btn-task-16').onclick = () => {
    let output = document.querySelector('.output-task-16');

    for (let i = 1; i <= 5; i++) {
        for (let k = 1; k <= i; k++) {
            output.innerHTML += i + ' ';
        }
        output.innerHTML += '<br>';
    }
}

// Task 17
document.querySelector('.btn-task-17').onclick = () => {
    let output = document.querySelector('.output-task-17');

    for (let i = 5; i > 0; i--) {
        for (let k = 1; k <= 5; k++) {
            if (k >= i) {
                output.innerHTML += i + ' ';
            }
        }
        output.innerHTML += '<br>';
    }
}

// Task 18
document.querySelector('.btn-task-18').onclick = () => {
    let output = document.querySelector('.output-task-18');

    for (let i = 5; i > 0; i--) {
        for (let k = 1; k <= 5; k++) {
            if (k >= i && i % 2 == 0) {
                output.innerHTML += 'X ';
            } else if (k >= i) {
                output.innerHTML += i + ' ';
            }
        }
        output.innerHTML += '<br>';
    }
}

// Task 19
document.querySelector('.btn-task-19').onclick = () => {
    let output = document.querySelector('.output-task-19');
    let n1 = 3;
    let n2 = 5;

    for (let i = 0; i < 3; i++) {
        for (let k = n1; k > 1; k--) {
            output.innerHTML += '&nbsp';
        }

        for (let j = 0; j < n2; j++) {
            output.innerHTML += '*';
        }

        output.innerHTML += '<br>';
        n1--;
        n2 += 2;
    }
}

// Task 20
//   **
//  ****
// ******
//  ****
//   **
document.querySelector('.btn-task-20').onclick = () => {
    let output = document.querySelector('.output-task-20');
    let stars = 2;
    let spaces = 3;

    for (let i = 0; i < 3; i++) {

        for (let k = spaces; k > 1; k--) {
            output.innerHTML += '&nbsp';
        }

        for (let j = 0; j < stars; j++) {
            output.innerHTML += '*';
        }

        output.innerHTML += '<br>';
        stars += 2;
        spaces--;

    }
    let spaces2 = 2;
    let stars2 = 4;
    for (let p = 0; p < 2; p++) {

        for (let j = spaces2; j > 1; j--) {
            output.innerHTML += '&nbsp';
        }

        for (let j = 0; j < stars2; j++) {
            output.innerHTML += '*';
        }

        output.innerHTML += '<br>';
        stars2 -= 2;
        spaces2++;
    }
}
