class Goods2 extends Goods {
    constructor(name, amount, image, count, sale) {
        super(name, amount, image, count);
        this.sale = sale;
    }
    draw() {
        document.querySelector('.out-5').innerHTML = `<span>Sales: ${this.sale}</span>`
    }
}