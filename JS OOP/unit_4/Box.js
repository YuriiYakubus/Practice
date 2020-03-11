class Box {
    constructor(x, y, z, color) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.color = color;
    }
    inBox(x, y, z) {
        if (x * y * z <= this.x * this.y * this.z) {
            return true;
        } else {
            return false;
        }
    }
}