// Task 2
let instance_1 = new One('t1', 't2');

// Task 4 
let instance_2 = new OneE('instance_2_t1', 'instance_2_t2', 'instance_2_t3');

// Task 5
console.log(One);
console.log(OneE);
console.log(instance_1);
console.log(instance_2);

// Task 7
let box = new Box(2, 5, 7, 'red');
console.log('*********** Task 7 ***********');
console.log(box.inBox(1, 3, 5));

// Task 9
let superBoxInstance = new SuperBox(2, 5, 7, 'red');
console.log('*********** Task 9 ***********');
console.log(superBoxInstance.inBox(1, 3, 5));
console.log(superBoxInstance.inBox(10, 3, 5));
console.log(superBoxInstance.inBox(3, 6, 5));

// Task 10
let field = new DrawField('150px', '200px', 'canvas');
document.body.prepend(field.create('div'));

// Task 11
let rect = new Rect('100px', '150px', 'rectCanvas');
rect.create('div', 0, 0, 150, 100);
