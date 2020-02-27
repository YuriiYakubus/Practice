let laminate = {
    "color": '',
    "thickness": 0,
    "suitable": '',
    "finish": '',
    "fitting_mechanism": '',
    "guaranteed": 0,
    "resistance": 0,
    "unit_coverage": 0,
    "getBoard": function (square) {
        return Math.round(square / ((this.size_x * this.size_y) / 1000));
    },
    __proto__: tile,
}