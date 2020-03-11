let t1 = 't1';
let t2 = 't2';
let t3 = 't3';

// Task 2
let instance_1 = new One(t1, t2);

// Task 4
let instance_2 = new OneE('test', 'test_2', 'test_3');

// Task 5
console.log(One);
console.log(OneE);
console.log(instance_1);
console.log(instance_2);

//  Task 7
let box1 = new Box(10, 10, 10, 'red');
console.log('********** Task 7 **********')
console.log(box1.inBox(9, 9, 9));

// Task 9
let superBoxInstance = new SuperBox(10, 10, 10, 'blue');
console.log('********** Task 9 **********')
console.log(superBoxInstance.inBox(9, 9, 11));

document.querySelector('body').onclick = () => {
    let canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);
    }
}