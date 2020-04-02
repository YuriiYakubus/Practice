
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {

    document.querySelector('.out-1').textContent += 'touch ';
}

// ваше событие здесь!!!
document.querySelector('.div-1').addEventListener('touchstart', t1);
// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */
let count = 0;
function t2() {
    count++;
    document.querySelector('.out-2').textContent = count;
}

// ваше событие здесь!!!
document.querySelector('.div-2').addEventListener('touchstart', t2);

// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3() {
    let out = document.querySelector('.out-3');
    if (this.className === 'div-3_1 block') {
        out.textContent = 1;
    } else if (this.className === 'div-3_2 block') {
        out.textContent = 2;
    }
}

// ваше событие здесь!!!
document.querySelector('.div-3_1').addEventListener('touchstart', t3);
document.querySelector('.div-3_2').addEventListener('touchstart', t3);

// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function t4() {
    document.querySelector('.out-4').textContent = 'touch';
}

// ваше событие здесь!!!
document.querySelector('.b-4').addEventListener('click', () => {
    document.querySelector('.div-4').ontouchstart = t4;
});
// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {

}

// ваше событие здесь!!!
document.querySelector('.b-5').addEventListener('touchstart', () => {
    document.querySelector('.out-4').textContent = '';
});
// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
    document.querySelector('.out-6').textContent = 'touchend';
}

// ваше событие здесь!!!
document.querySelector('.div-4').addEventListener('touchend', t6);

// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
    this.style.backgroundColor = 'red';
}

// ваше событие здесь!!!
document.querySelector('.div-7').addEventListener('touchstart', t7);
// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

function t8() {
    let a8 = ['red', 'green', 'blue', 'pink', 'yellow'];
    let random = Math.floor(Math.random() * ((a8.length + 1) - 0) + 0);
    this.style.backgroundColor = a8[random];
}

// ваше событие здесь!!!
document.querySelector('.div-8').addEventListener('touchstart', t8);

// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9() {
    document.querySelector('.out-9').textContent = event.touches.length;
}

// ваше событие здесь!!!
document.querySelector('.div-9').addEventListener('touchstart', t9);

// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
let w = 75;
let counter = 0;
function t10() {
    counter++;
    this.style.width = (w + counter) + 'px';
}

// ваше событие здесь!!!
document.querySelector('.div-10').addEventListener('touchmove', t10);
// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11() {
    document.querySelector('.out-11').textContent = `radiusX ${event.targetTouches[0].radiusX} radiusY ${event.targetTouches[0].radiusY}`;

}

// ваше событие здесь!!!
document.querySelector('.div-11').addEventListener('touchmove', t11);
// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12. Добавьте touch события так, чтобы при клике на img-12-min картинка появлялась в блоке div-12-max. Если нажимается кнопка prev - то появляется изображение идущее перед текущим. Если нажимается кнопка next - то после текущего. Выбор изображений зациклен.  Изображение, которое сейчас дублируется в большом блоке должно выделяться классом .active-img. Добавьте кнопку reset для сброса состояния, когда выводится первое изображение. Все изображения и начальное состояние - выводится из массива 
    a = [1.png, 2.png, 3.png, 4.png, 5.png, 6.png] - изображения находятся в папке img.
    Усложните задачу - подумайте как в массиве сохранить информацию текст, которая будет выводиться если картинка активна. Сам текст можно сохранять в data-text при отрисовке изображения.
    Источник иконок https://www.iconfinder.com/iconsets/unigrid-phantom-halloween
*/
let c = 0;
let a = ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png', 'img/6.png'];
let min_images = document.querySelectorAll('.img-12-min');
let max_image = document.querySelector('.img-12-max');
function t12() {

}

// ваше событие здесь!!!

for (let i = 0; i < min_images.length; i++) {
    min_images[i].addEventListener('touchstart', () => {
        if (min_images[i].className.includes('active-img')) {
            max_image.setAttribute('src', min_images[i].getAttribute('src'));
        }
    });
}

// Next Button
document.querySelector('.next').addEventListener('touchstart', () => {
    if (c >= 5) {
        min_images[c].classList.remove('active-img');
        c = 0;
        min_images[c].classList.add('active-img');
        // max_image.setAttribute('src', a[c]);
    } else if (c <= 5) {
        min_images[c].classList.remove('active-img');
        c++;
        min_images[c].classList.add('active-img');
        // max_image.setAttribute('src', a[c]);
    }
});

// Prev Button
document.querySelector('.prev').addEventListener('touchstart', () => {
    if (c <= 0) {
        min_images[c].classList.remove('active-img');
        c = 5;
        min_images[c].classList.add('active-img');
        // max_image.setAttribute('src', a[c]);
    } else if (c >= 0) {
        min_images[c].classList.remove('active-img');
        c--;
        min_images[c].classList.add('active-img');
        // max_image.setAttribute('src', a[c]);
    }

});

// Reset Button
document.querySelector('.reset').addEventListener('touchstart', () => {
    min_images[c].classList.remove('active-img');
    c = 0;
    min_images[c].classList.add('active-img');
    max_image.setAttribute('src', a[c]);
});
