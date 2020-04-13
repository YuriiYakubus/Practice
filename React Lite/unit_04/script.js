// Task 1
const yura = new Man('Yuriy', 22, 'UA', 'male');
console.log(yura);

// Task 2
const employer = new Employer('Yuriy', 22, 'UA', 'male', '04.13.2020', 1500);
console.log(employer);

// Task 4
yura.render('.out-1');

// Task 5
employer.render('.out-1');
employer.date = '24.13.2020      ';
console.log(employer.date);