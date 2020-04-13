class Man {
    constructor(name, age, passport, sex) {
        this.name = name;
        this.age = age;
        this.passport = passport;
        this.sex = sex;
    }
    render(elem) {
        let out = '';
        out += `<p>Name: ${this.name}</p>`;
        out += `<p>Age: ${this.age}</p>`;
        out += `<p>Passport: ${this.passport}</p>`;
        out += `<p>Sex: ${this.sex}</p>`;

        document.querySelector(elem).innerHTML = out;
    }
}