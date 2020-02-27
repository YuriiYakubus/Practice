let tile = {
    "material": '',
    "type": '',
    "size_x": 0,
    "size_y": 0,
    "outdoor": false,
    "color": '',
    "cover": '',
    "images": ['', ''],
    "imperialSize": function () {
        return [+(this.size_x / 25.4).toFixed(2), +(this.size_y / 25.4).toFixed(2)];
    },
    "isSquare": function () {
        if (this.size_x === this.size_y) {
            return true;
        } else {
            return false;
        }
    },
    __proto__: goods
};