// Task 1
let test = new Test();
test.testProp = 'test';
console.log(test);
console.log(test._testProp);

// Task 2
let test2 = new Test2();
console.log(test2.testProp = 'bbb');
console.log(test2);

console.log(test2.testProp = '');
console.log(test2);

console.log(test2.setTestProp(''));
console.log(test2);

// Task 3
console.log(test2.testProp);

// Task 4
let test3 = new Test3();
test3.testProp = 'Hello';
console.log(test3);
console.log(test3.testProp);

// Task 5
let test4 = new Test4();
test4.testProp = 10;
console.log(test4);

// Task 6
console.log(test4.testProp);
