class Header {
    constructor(h1, h3, motto, img, contacts) {
        this.h1 = h1;
        this.h3 = h3;
        this.motto = motto;
        this.img = img;
        this.contacts = contacts;
    }
    render(elem) {
        let out = `<h1>${this.h1}</h1>`;

        document.querySelector(elem).innerHTML = out;
    }
}