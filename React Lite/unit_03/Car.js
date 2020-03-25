class Car {
    constructor(brand, name, weight, fuel, fuel_type, color, img) {
        this.brand = brand;
        this.name = name;
        this.weight = weight;
        this.fuel = fuel;
        this.fuel_type = fuel_type;
        this.color = color;
        this.img = img;
    }
    render(elem) {
        let out = `<div class="pricing-table row">
          <div class="col col-sm-6">

          <div class="col col-sm-6">
            <div class="package featured">
              <p class="package-name">${this.brand} ${this.name}</p>
              <hr>
      
              <ul class="features">
                <li>Weight - ${this.weight}</li>
                <li>Fuel capacity - ${this.fuel}</li>
                <li>Fuel type - ${this.fuel_type}</li>
                <li>Color -${this.color}</li>
                <li><img src="${this.img}"></li>
              </ul>
              <button class="button-primary">Get Started</button>
            </div>
          </div>
        </div>`

        document.querySelector(elem).innerHTML = out;
    }
}