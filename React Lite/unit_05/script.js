let car = {
    model: 'Audi',
    weight: 0.5,
    color: 'red',
    go: function () {
        console.log(`go ${this.model}`);
    }
}
let ford = {
    year: '2017',
}

// Task 1
car.go();

// Task 2
console.log(ford);

// Task 3
ford.__proto__ = car;
console.log(ford);

// Task 4
ford.model = 'BWM';
ford.weight = 0.7;
ford.color = 'Blue';

ford.go();

// Task 5
car.mileage = 1999;
console.log(ford);

// Task 6 
ford.go = function () {
    console.log(`${this.year} ${this.color}`);
}

// Task 7
ford.__proto__.go();

// Task 8
let chevrolet = {
    __proto__: ford
}
console.log(chevrolet);

// Task 9
chevrolet.go = function () {
    console.log('chevrolet');
}

// Task 10 
chevrolet.body_style = 'Sedan';
chevrolet.drive_style = 'Sport';

// Task 11
for (let key in chevrolet) {
    console.log(key);
}