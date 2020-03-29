class Rect extends DrawField {
    constructor(w, h, id) {
        super(w, h, id);
    }
    create(elem, x, y, w, h) {
        document.body.prepend(super.create(elem));

        let canvas = document.querySelector('#rectCanvas');
        let ctx = canvas.getContext('2d');

        ctx.fillStyle = '#a8328d';
        ctx.fillRect(x, y, w, h);
    }
}