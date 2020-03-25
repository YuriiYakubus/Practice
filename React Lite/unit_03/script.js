// Task 1
const john = new Man(183, 85, 32, 'Male', 'John', 'UA', 'blue');
console.log('************* Task 1 *************');
console.log(john);

// Task 2
const audi = new Car('Audi', 'R8', '3,439 lb', '73', 'Petrol', 'Red', './img/images.jfif');
console.log('************* Task 2 *************');
console.log(audi);

// Task 3
audi.render('.audi');


// Task 4
const header = new Header('Title', 'subtitle', 'do not be afraid to fall learn to stand up', 'moto.png', ['email@gmail.com', '+380673407181']);
header.render('.header');

// TAsk 5
const bmw = new Car('Bmw', 'i8', '3 394 lb', '62', 'Premium', 'Silver', './img/bmw_i8.jpg');
bmw.render('.bmw')