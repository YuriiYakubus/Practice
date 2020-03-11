let t1 = 't1';
let t2 = 't2';
let t3 = 't3';
let t4 = 't4';

// Task 2
let instance_1 = new One(t1, t2);

// Task 3
let instance_2 = new One(t3, t4);

// Task 4
console.log(One);
console.log(instance_1);
console.log(instance_2);

// Task 5
console.log(Two);

// Task 6
let instance_3 = new Two('Yura');
let instance_4 = new Two('Oleh');
console.log(instance_3);
console.log(instance_4);

// Task 7
let box1 = new Box(10, 9, 9);
console.log(box1.inBox(8, 8, 8));