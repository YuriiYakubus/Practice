class Employer extends Man {
    constructor(name, age, passport, sex, create, salary) {
        super(name, age, passport, sex);
        this._create = create;
        this.salary = salary;
    }
    render(elem) {
        super.render(elem);
        let out = '';
        out += `<p>Created: ${this.create}</p>`;
        out += `<p>Salary: ${this.salary}</p>`;

        document.querySelector(elem).innerHTML += out;
    }
    set date(date) {
        if (typeof date === 'string') {
            this._create = date.trim();
        }
    }
    get date() {
        return this._create;
    }
}