class DrawField {
    constructor(h, w, id) {
        this.h = h;
        this.w = w;
        this.id = id;
    }
    create(elem) {
        let div = document.createElement(elem);

        div.innerHTML = `<canvas id="${this.id}" width="${this.w}" height="${this.h}"></canvas>`;

        return div;
    }
}