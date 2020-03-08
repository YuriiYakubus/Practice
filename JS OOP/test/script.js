let a = 'Ivan';
let b = '12345678910';
const person = new User(a, b);

console.log(person);
console.log('person.validatePassword(): ', person.validatePassword());

let firstStudent = new Student(a, b, 'Halodnuy');
console.log(firstStudent);
console.log(firstStudent.getStudentCourses());
console.log(firstStudent.validatePassword());