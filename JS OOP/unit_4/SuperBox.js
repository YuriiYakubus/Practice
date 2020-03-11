class SuperBox extends Box {
    constructor(x, y, z, color) {
        super(x, y, z, color);
    }
    inBox(x, y, z) {
        if (super.inBox(x, y, z)) {
            return true;
        } else if (x < this.x && y < this.y || z < this.z && x < this.x || z < this.z && y < this.y) {
            return true;
        } else if (x > this.x && y > this.y || z > this.z && x > this.x || z > this.z && y > this.y) {
            return false;
        }
    }
}