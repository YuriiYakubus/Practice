let goods = {
    "art": 0,
    "price": 0,
    "title": '',
    "image": '',
    "producer": '',
    "country": 0,
    "description": '',
    "weigh": 0,
    "height": 0,
    "width": 0,
    "depth": 0,
    "unit": 0,
    "getCost": function () {
        return this.price * this.unit;
    }
};