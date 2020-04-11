class Goods {
    constructor(name, amount, image, count) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
    }
    draw() {
        document.querySelector('.out-4').innerHTML = `<p>Name: ${this.name} <br>
        Price: ${this.count}</p><img src="${this.image}">`;
    }
}